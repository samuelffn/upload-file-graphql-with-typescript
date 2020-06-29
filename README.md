# upload-file-graphql
Poc em Node JS com TypeScript para fazer upload de arquivo com GraphQL

## npm i

Será necessário baixar todas as dependências do projeto, para isso use o comando **npm i** dentro da pasta do projeto

## Executando o projeto

Execute o comando: **npm run start**
O servidor é executado na porta **7411**
Para parar: **Ctrl + c**

## Exemplo de solicitações com Insominia

1. Clique em **New request**
2. Escolha um nome e tipo de solicitação **POST**
3. Para o corpo, escolha **MuitpartForm**
4. Na URL, use: **http://localhost:7411/**
5. Na guia Multipart, use os parâmetros:
- **operações**, escolha o tipo Texto (várias linhas) com o conteúdo:
{
"query":"mutation fileUpload($file: Upload!) {\n fileUpload(file: $file)\n}",
"variables":{ "file": null},
"operationName":"fileUpload"
}
- **map**, escolha o tipo de texto com o conteúdo: value: **{"file": ["variables.file"]}**
- **arquivo**, escolha o tipo de arquivo e selecione um arquivo na máquina local
6. Clique no botão **Enviar** e você verá a guia Visualizar com o retorno.
