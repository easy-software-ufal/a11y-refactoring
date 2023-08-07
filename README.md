[Perguntas do formulário](https://drive.google.com/file/d/1vWSagpJo-0Qzm5sXzXsVwnHU9GoA_jUN/view?usp=sharing)
# :bulb: Plugin de refatoramento para acessibilidade web
O `a11y-refactoring` é um plugin para [VSCode](https://code.visualstudio.com/) com o objetivo de refatorar um código HTML em que, caso não haja atributos essenciais para leitores de tela em algumas <i>tags</i> HTML, insira-os.

Inicialmente o plugin está focado no HTML semântico. O HTML semântico é um importante primeiro passo na construção de páginas web acessíveis, mas nem sempre é suficiente para atender a todas as necessidades de acessibilidade. Em alguns casos, é necessário utilizar outras tecnologias, como as diretrizes de acessibilidade WCAG (Web Content Accessibility Guidelines) e as especificações de acessibilidade do WAI-ARIA (Web Accessibility Initiative - Accessible Rich Internet Applications).

Ainda assim, antes de entrar de fato no uso de diretrizes como a WCAG e especificações como WAI-ARIA, é importante que o ponto de partida seja o HTML semântico. Considerando isso, [criamos alguns templates que já estão sendo tratados pelo `a11y-refactoring`](https://github.com/easy-software-ufal/a11y-refactoring/blob/master/templates.md).

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
  - Anteriormente estávamos usando o atributo `summary`, mas ele foi considerado obsoleto a partir do HTML5. O motivo é que este atributo não estava sendo utilizado de forma consistente pelos desenvolvedores web e também não era amplamente suportado pelos navegadores. 
  - Em vez disso, estamos usando os elementos semânticos `<thead>` e `<tbody>` que são parte da estrutura HTML da tabela e ajudam a organizar o conteúdo em seções lógicas. Isso é importante para usuários que utilizam tecnologias assistivas, como leitores de tela, que podem navegar pelas seções da tabela com mais facilidade. O uso desses elementos também ajuda a deixar a tabela mais clara e fácil de entender visualmente.

- Texto alternativo para imagens
  - As imagens devem possuir o atributo `alt` com um texto alternativo que possua uma descrição do seu conteúdo. Se a tag `<img>` tiver apenas o atributo `src`, o leitor pode ou não ler o nome do arquivo, podendo ser bem confuso.
  - Caso as imagens sejam decorativas, não tendo a necessidade de uma descrição por texto alternativo, então é recomendado incluí-las via `background-image` através de CSS.
  
- Não abrir novas instâncias sem a solicitação do usuário
  - Segundo a [WCAG 2.0 Critério de Sucesso 3.2.5](https://www.w3.org/Translations/WCAG20-pt-br/#consistent-behavior), o usuário deve ser informado por meio de texto do link caso seja necessário sair da página, assim ele pode decidir se quer acessar o link e saberá que se trata de uma nova aba ou janela. Essa informação é definida pela <i>tag</i> `<a>`.
  
## ⚙️ Como executar a ferramenta localmente
1. Faça o clone do projeto e rode o `npm i` no diretório criado
2. Abra o VSCode para o diretório `a11y-refactoring`
3. Use a tecla `F5` para executar sua extensão localmente e outra janela aparecerá 
4. Agora pressione `ctrl+shift+p` e informe o idioma da página HTML. Digite `enter` e o código será alterado

![newrecorder](https://user-images.githubusercontent.com/36773331/229955421-031cbf60-9f92-4154-8ea4-c3ef6979adf0.gif)
