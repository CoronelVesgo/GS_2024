# GS_2024

# Integrantes:
  * Lucas Makoto   | RM:95387
  * Caio Sprovieri | RM:93327
  * Felipe Castro  | RM 93318
# Versões:
* V 1.0 : Lançamento Inicial.
* V 2.0 : Menu de escolha de carregamento Rápido e Normal Adicionados, adicionado opções de pagamento.
* V 2.1 : Ajustes na formatação do código,estética e documentação/manual.
* V3.0  : Adaptação do projeto inical HTML para o REACT.

# Manual
* Front-END<br> 
Quando o usuário conecta o carro na estação de carregamento, ele pode clicar em "Abastecer meu veículo".<br> 
Depois disto, ele vai ter duas opções: recarga rápida ou normal, após a escolha, vai aparecer uma tela de pagamento com três opções: Crédito, Débito ou Pix, além da opção de retornar ao menu de escolha caso o cliente tenha selecionado a oção errada.<br>
Após escolher a opção de pagamento, o usuário vai se deparar na tela de carregamento do carro, no qual mostra o nome do usuário, o modelo do carro dele, a barra de carregamento e a porcentagem carregada, e quanto tempo falta para a carga completa.

* Back- END<br> 
O código é formado em:<br>
*src*: Pasta principal do projeto 
*App e main*: São os arquivos que compilam os códigos que formam o projeto, mais precisamente o "App" que compila os códigos enquanto o "main" que renderiza o APP<br>
*CódigosJava*: É a past onde estão guardados os códigos JavaScript utilizados no projeto, os códigos que controlam  o monitoramento do abastecimento do carro, a porcentagem de abastecimento, quanto tempo vai levar.<br>
*Css*:É a pasta onde está o Css que formata a UI do projeto. <br>
*Paginas*: É a pasta onde está armazenado os arquivos em REACT, desde a tela inicial, como a tela de escolha de carregamento, de pagamento e a tela de carregamento em si.<br>
*Server*: É a pasta onde está armazenado tanto o código que faz e monitora os servidores node.js, como também a base de dados sqlite, é lá que fica as informações do cliente, como o nome e o modelo do carro por exemplo.


# Observação importante:<br>
Quando for abrir o código pela primeira vez, por precaução utilizar estes códigos no terminal:<br><br>

cd GS_Hete<br>
npm install ()<br><br>
Sempre que for abrir o código, utilizar estes comandos no terminal:<br><br>

cd GS_Hete<br>
npm run dev<br>
