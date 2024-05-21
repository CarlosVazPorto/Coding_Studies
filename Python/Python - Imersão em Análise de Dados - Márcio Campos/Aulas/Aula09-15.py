import pandas      as pd
import numpy       as np
import re
import matplotlib  as mpl
from   datetime import datetime

def ajusta_virgula(coluna):
    
    if pd.isna(coluna):
        return 0
    
    elif isinstance(coluna, str):
        try:
            return float(coluna.replace(',', '.'))
        except ValueError:
            return 0    
    else:
        return coluna

df_dados               = pd.read_csv("FolhaPag.csv", delimiter=';', encoding='Windows-1252')

df_folha               = df_dados.copy()

df_folha['Nome']       = df_folha['Nome'].astype(str) # sem efeito, mesmo contendo NaN

df_folha['Nascimento'] = pd.to_datetime(df_folha['Nascimento'], format='%d/%m/%Y')

df_folha.rename(columns={'Salï¿½rio': 'Salario'}, inplace=True)

df_folha['Salario']    = df_folha['Salario'].str.replace(',', '.').astype(float)

df_folha['Filhos']     = df_folha['Filhos'].fillna(0)

df_folha['Filhos']     = df_folha['Filhos'].astype('Int64')

df_folha['Ativo']      = df_folha['Ativo'].map({'VERDADEIRO': True, 'FALSO': False})

df_folha['UF']         = df_folha['UF'].astype(str) # sem efeito, mesmo contendo NaN

df_folha['email']      = df_folha['email'].astype(str) # sem efeito, mesmo contendo NaN

df_folha['FGTS']       = df_folha['FGTS'].str.replace(',', '.').fillna('0').astype(float).round(2)

df_folha.rename(columns={'13Sal': 'decimo_terceiro'}, inplace=True)

df_folha['decimo_terceiro'] = df_folha['decimo_terceiro'].str.replace(',', '.').fillna('0').astype(float).round(2)

ajusta_colunas = ['Fï¿½rias', 'CestaBï¿½sica', 'AjudaCusto']

for coluna in ajusta_colunas:
    df_folha[coluna] = df_folha[coluna].apply(lambda x: ajusta_virgula(x))

df_folha.rename(columns={'Fï¿½rias': 'Ferias', 'CestaBï¿½sica': 'CestaBasica'}, inplace=True)

colunas_selecionadas = [
    'Nome', 'Nascimento', 'Salario', 'Filhos', 'Ativo', 'UF', 'email', 
    'FGTS', 'decimo_terceiro', 'Ferias', 'CestaBasica', 'AjudaCusto'
]

df_folha = df_folha[colunas_selecionadas]

df_temp            = df_folha.copy()

df_temp['Salario'] = df_temp['Salario'].fillna(0)

tem_nan_colunas = df_temp.isna().any(axis=0)

print(tem_nan_colunas)

df_temp.info()

df_temp['FGTS']            = (df_temp['Salario'] * 8.5 / 10 ).round(2)
df_temp['decimo_terceiro'] = (df_temp['Salario'] / 12).round(2)
df_temp['Ferias']          = ( ( ( df_temp['Salario'] / 30) * 10 ) / 12 ).round(2)

df_temp['CestaBasica']     = df_temp['Filhos'].astype(float). \
                                               apply( lambda linha: 50 if linha == 0 else (500 if linha >= 5 else 100 * linha) ).round(2)

df_temp['AjudaCusto']      = df_temp['Filhos'].astype(float). \
                                               apply(lambda coluna: 85 if coluna == 0 else (625 if coluna >= 5 else 125 * coluna)).round(2)

# ----------------------------------------------------------
# Atualizando AjudaCusto baseado nas condições
# - Ativos , > 50 anos, 150.00 por Filho, se não tiver 75.00
# ----------------------------------------------------------

# Calculando a idade
# ------------------

df_temp['Idade']      = df_temp['Nascimento'].apply(lambda anonasc: datetime.now().year - pd.to_datetime(anonasc).year)

df_temp['AjudaCusto'] = df_temp.apply(lambda linha: 150.00 * linha['Filhos'] if linha['Filhos'] > 0 else 75, axis=1)

# -----------------------------------------------------------------------------------------------------------------
# O método loc no pandas é utilizado para acessar um grupo de linhas e colunas por rótulos ou uma matriz booleana.
# Ele é extremamente versátil e pode ser usado tanto para seleção quanto para atribuição de valores.
# No contexto do nosso código, o loc é usado para atualizar a coluna AjudaCusto sob condições específicas, as quais
# explicítamos acima.
# -----------------------------------------------------------------------------------------------------------------

df_temp.loc[10:30, 'AjudaCusto'] = \
             df_temp.apply(lambda linha: 200.00 * linha['Filhos'] if linha['Filhos'] > 0 else 132, axis=1)

df_temp.loc[49999:, 'AjudaCusto'] = \
             df_temp.apply(lambda linha: 900.00 * linha['Filhos'] if linha['Filhos'] > 0 else 550, axis=1)

df_temp.loc[(df_temp['Ativo'] == True) & (df_temp['Idade'] > 50), 'AjudaCusto'] = \
             df_temp.apply(lambda linha: 250.00 * linha['Filhos'] if linha['Filhos'] > 0 else 215, axis=1)

print(df_temp.iloc[35])