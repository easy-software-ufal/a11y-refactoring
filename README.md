# :bulb: Plugin de refatoramento para acessibilidade web
O `a11y-refactoring` é um plugin para [VSCode](https://code.visualstudio.com/) com o objetivo de refatorar um código HTML em que, caso não haja atributos essenciais para leitores de tela em algumas <i>tags</i> HTML, insira-os.

## :wrench: Acessibilidade no desenvolvimento
Existem boas práticas para tornar uma página mais acessível. No entanto, grande parte da acessibilidade depende da utilização correta de elementos HTML e seus valores semânticos. Elementos semânticos trazem informações adicionais a leitores de tela e outras ferramentas, facilitando a navegação no site.

Além disso, a acessibilidade web é voltada principalmente para pessoas com algum tipo de deficiência ou limitação. Por exemplo, pessoas cegas ou com baixa visão, pessoas com autismo, pessoas surdas ou com baixa audição, entre outras limitações. Para esse plugin estaremos considerando pessoas com deficiência visual ou cegas para trazer uma melhor experiência ao usar tecnologias assistivas.

Algumas tecnologias assistivas foram desenvolvidas para proporcionar mais independência e autonomia aos usuários. Porém, essas ferramentas terão um melhor aproveitamento se os códigos do site seguirem determinados padrões.

No Brasil, de acordo como o comitê de ajudas Técnicas do Governo Federal e a [Lei nº 13.146/2015](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2015/lei/l13146.htm):

> "Tecnologia Assistiva é uma área do conhecimento, de característica interdisciplinar, que engloba produtos, recursos, metodologias, estratégias, práticas e serviços que objetivam promover a funcionalidade, relacionada à atividade e participação, de pessoas com deficiência, incapacidades ou mobilidade reduzida, visando sua autonomia, independência, qualidade de vida e inclusão social". (BRASIL - SDHPR. – Comitê de Ajudas Técnicas – ATA VII).

## 🤔 Por que devemos pensar na acessibilidade para o HTML?
A acessibilidade deve ser pensada durante todo o desenvolvimento de um site, mesmo que você não tenha controle sobre alguns códigos desenvolvidos por <i>frameworks</i>, <b>mas toda melhoria contribui para uma web mais acessível</b>.

## :white_check_mark: Transformações realizadas pelo `a11y-refactoring`
Atualmente o plugin está refatorando algumas <i>tags</i> e considerando que caso elas já possuam os atributos necessários, não adicione-os novamente.
- Definição da linguagem do documento
  - No início do documento HTML podemos definir a linguagem da página usando `<html lang='pt-br'>`. Essa definição é um benefício não somente para tecnologias assistivas, mas também para SEO e ferramentas de tradução. No contexto das tecnologias assistivas, é possível definir o perfil de voz e conjunto de caracteres por meio da definição do atributo `lang`.
  
- Texto alternativo para tabelas
  - O atributo `summary` funciona como um resumo ou texto alternativo para a tabela, indicando mais detalhes para o usuário. Esse atributo é associado à <i>tag</i> `<table>`.

- Texto alternativo para imagens
  - As imagens devem possuir o atributo `alt` com um texto alternativo que possua uma descrição do seu conteúdo. Se a tag `<img>` tiver apenas o atributo `src`, o leitor pode ou não ler o nome do arquivo, podendo ser bem confuso.
  - Caso as imagens sejam decorativas, não tendo a necessidade de uma descrição por texto alternativo, então é recomendado incluí-las via `background-image` através de CSS.
  
- Não abrir novas instâncias sem a solicitação do usuário
  - Segundo a [WCAG 2.0 Critério de Sucesso 3.2.5](https://www.w3.org/Translations/WCAG20-pt-br/#consistent-behavior), o usuário deve ser informado por meio de texto do link caso seja necessário sair da página, assim ele pode decidir se quer acessar o link e saberá que se trata de uma nova aba ou janela. Essa informação é definida pela <i>tag</i> `<a>`.
  
## ⚙️ Como executar a ferramenta localmente
1. Acesse o diretório `a11y-refactoring` e abra o terminal
2. Use o comando `code a11y-refactoring`
3. Use a tecla `F5` para executar sua extensão localmente e outra janela aparecerá 
4. Agora pressione `ctrl+shift+p` e informe o idioma da página HTML. Digite `enter` e o código será alterado

![newrecorder](https://user-images.githubusercontent.com/36773331/229955421-031cbf60-9f92-4154-8ea4-c3ef6979adf0.gif)

### [Templates criados até agora](https://www.canva.com/design/DAFfPQGwUbc/rkUmM4NzezLbajuivT8w_Q/edit?utm_content=DAFfPQGwUbc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
