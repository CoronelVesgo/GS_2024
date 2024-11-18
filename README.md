# GS_2024

# Integrantes:
  * Lucas Makoto   | RM:95387
  * Caio Sprovieri | RM:93327
  * Felipe Castro  | RM 93318
# Versões:
* V 1.0 : Lançamento Inicial.
* V 2.0 : Menu de escolha de carregamento Rápido e Normal Adicionados, adicionado opções de pagamento.
* V 2.1 : Ajustes na formatação do código e documentação/manual.

# Manual
* Front-END<br> 
Quando o usuário conecta o carro na estação de carregamento, ele pode clicar em "Abastecer meu veículo".<br> 
Depois disto, ele vai ter duas opções: recarga rápida ou normal, após a escolha, vai aparecer uma tela de pagamento com três opções: Crédito, Débito ou Pix, além da opção de retornar ao menu de escolha caso o cliente tenha selecionado a oção errada.<br>
Após escolher a opção de pagamento, o usuário vai se deparar na tela de carregamento do carro, no qual mostra o nome do usuário, o modelo do carro dele, a barra de carregamento e a porcentagem carregada, e quanto tempo falta para a carga completa.

* Back- END<br> 
O código é formado por três partes:<br> 
*assets*, que é onde está tanto o css que dá a aparência da aplicação, quanto o JavaScript que controla o monitoramento do abastecimento do carro, a porcentagem de abastecimento, quanto tempo vai levar, além de conectar com o servidor que está armazenado o nome e o modelo do carro do cliente.<br>
*publico*, é onde está armazenado as páginas HTML do projeto, desde a tela inicial, como a tela de escolha de carregamento, de pagamento e a tela de carregamento em si.<br>
*server* é onde está armazenado tanto o código que faz e monitora os servidores node.js, como também a base de dados sqlite, é lá que fica as informações do cliente, como o nome e o modelo do carro por exemplo.


# Observação importante:<br>
Sempre que for abrir o código, utilizar o comando no terminal "npm start".