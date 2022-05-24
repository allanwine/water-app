# WaterApp

## Como rodar a aplicação

Primeiramente você deve, no vscode, instalar as dependências do projeto, utilizando comando `npm i`.
<br> Este projeto foi feito utilizando o framework [Angular](https://angular.io/).
<br> Ele requere as versões atualizadas do NodeJS e do Node Packet Manager (NPM).
<br> Você pode verificar se tem as versões instaladas utilizando o comando no terminal: `node -v` e `npm -v`.
<br> Se os dois estiverem instalados, você pode proceder com a instalação do Angular CLI com o comando: `npm i -g @angular/cli`.
<br>
<br> Caso esteja rodando a aplicação no windows, talvez seja necessário executar o comando no terminal:
<br> `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
<br> (Tenha certeza de ler as mensagens exibidas e que você entende as implicações de setar uma execution policy)
<br> Por fim, você pode iniciar a aplicação usando o comando: `ng serve`
<br> Navegue até `http://localhost:4200/`.

## Explanação do projeto (vídeo)

O vídeo demonstra o uso da aplicação de duas formas: Com um usuário de testes já presente na aplicação, e com a criação de um usuário distinto.
<br>O usuário de testes é autenticado com o email test@test.com e a senha 123456.
<br>Como o peso do usuário de testes é de 85kg, ao logar no sistema já é sugerido o consumo de água com base neste peso, sendo de 2975ml.
<br>Com a criação de um usuário distinto, utilizando um peso fictício, quando logado é sugerido o consumo de água com base no peso do usuário.
