# a11y-refactoring 
## Executando a extensão localmente
1. Acesse o diretório `a11y-refactoring` e abra o terminal
2. Use o comando `code a11y-refactoring`
3. Use a tecla `F5` para executar sua extensão e outra janela aparecerá 
4. Agora pressione `ctrl+shift+p` e encontre o comando `a11y`. Execute-o e o código será alterado

![recorder](https://user-images.githubusercontent.com/36773331/229786854-ce9a77ec-5d9e-407c-b6a1-03d80b229487.gif)

## Estado atual
Atualmente o plugin está refatorando apenas as tags `<img>` para que elas tenham o atributo `alt`. Caso a tag já possua esse atributo, ele não será adicionado novamente.
