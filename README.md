## :white_check_mark: Transformações realizadas pelo `a11y-refactoring`
Atualmente o plugin está refatorando algumas <i>tags</i> e considerando que caso elas já possuam os atributos necessários, não adicione-os novamente.
# a11y-refactoring

O `a11y-refactoring` é um plugin para [VSCode](https://code.visualstudio.com/) desenvolvido para melhorar a acessibilidade de páginas web, automatizando a refatoração de código HTML. Este plugin é particularmente focado em tornar o conteúdo web mais acessível para pessoas cegas e usuários de leitores de tela.

Para visualizar os resultados das avaliações realizadas pelo plugin, acesse o [diretório de avaliações](https://github.com/easy-software-ufal/a11y-refactoring/tree/master/evaluations). Cada caso avaliado está sendo [tratado pelo `a11y-refactoring` com base em alguns templates](https://github.com/easy-software-ufal/a11y-refactoring/blob/master/templates.m).

## Transformações Realizadas pelo Plugin

### Melhoria da Semântica do HTML
- **Uso de Tags Semânticas**: Transforma `<div>` em tags semânticas como `<header>`, `<nav>`, e `<main>`. Isso permite uma navegação mais intuitiva por leitores de tela, crucial para usuários cegos. (WCAG 2.1, Seção 1.3.1: [Info and Relationships](https://www.w3.org/TR/WCAG21/#info-and-relationships))

### Textos Alternativos e Rótulos Acessíveis
- **Adição de Textos Alternativos em Imagens**: Insere atributos `alt` em imagens, fornecendo descrições essenciais para leitores de tela. Vital para a compreensão de conteúdo visual por usuários cegos. (WCAG 2.1, Critério de Sucesso 1.1.1: [Non-text Content](https://www.w3.org/TR/WCAG21/#non-text-content))
- **Rótulos ARIA em Elementos de Entrada e Interativos**: Implementa `aria-label` em elementos sem rótulos visíveis, garantindo que leitores de tela possam comunicar sua função e propósito. (WCAG 2.1, Critério de Sucesso 4.1.2: [Name, Role, Value](https://www.w3.org/TR/WCAG21/#name-role-value))

### Estrutura e Acessibilidade de Tabelas
- **Reestruturação de Tabelas**: Inclui `<thead>` e `<tbody>` para tornar tabelas mais compreensíveis para leitores de tela, facilitando a navegação para usuários cegos. (WCAG 2.1, Seção 1.3.1)

### Acessibilidade em Links e Frames
- **Melhoria na Acessibilidade de Links Externos**: Adiciona avisos em links que abrem em nova aba, ajudando usuários cegos a entender que o link abrirá uma nova janela ou guia. (WCAG 2.0, Critério de Sucesso 3.2.5: [Change on Request](https://www.w3.org/TR/UNDERSTANDING-WCAG20/consistent-behavior-no-extreme-changes-context.html))
- **Rótulos em Iframes**: Insere títulos em iframes, fornecendo contexto para usuários cegos sobre conteúdos incorporados. (WCAG 2.1, Critério de Sucesso 4.1.2)

### Definição da Linguagem do Documento
- **Configuração do Atributo 'lang'**: Define o idioma da página, melhorando a pronúncia e dialeto dos leitores de tela, crucial para a compreensibilidade por usuários cegos. (WCAG 2.1, Critério de Sucesso 3.1.1: [Language of Page](https://www.w3.org/TR/WCAG21/#language-of-page))

### Melhoria na Codificação de Caracteres
- **Inserção de Metatag de Caracteres**: Garante a correta codificação de caracteres, essencial para a leitura precisa do texto por leitores de tela. (WCAG 2.1, Critério de Sucesso 4.1.1: [Parsing](https://www.w3.org/TR/WCAG21/#parsing))

## Importância das Diretrizes WCAG e WAI-ARIA

Este plugin foi cuidadosamente desenvolvido para seguir as diretrizes da WCAG e as especificações WAI-ARIA, assegurando que o conteúdo da web seja acessível a todos, incluindo pessoas cegas e usuários de tecnologias assistivas.

## Como o Plugin Funciona

O `a11y-refactoring` facilita a implementação de práticas de acessibilidade em projetos web no ambiente VSCode. Ele identifica e refatora automaticamente elementos que não estão em conformidade com as diretrizes de acessibilidade.

## Contribuição e Feedback

Suas contribuições e feedback são extremamente valiosos! Se você tem ideias para melhorar o plugin ou quer contribuir com novas funcionalidades, sinta-se à vontade para colaborar.

## Recursos Adicionais

Para mais informações sobre acessibilidade na web, confira:

- [Diretrizes WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/)
- [Especificações WAI-ARIA](https://www.w3.org/TR/wai-aria/)

---

  
## ⚙️ Como executar a ferramenta localmente
1. Faça o clone do projeto e rode o `npm i` no diretório criado
2. Abra o VSCode para o diretório `a11y-refactoring`
3. Use a tecla `F5` para executar sua extensão localmente e outra janela aparecerá 
4. Agora pressione `ctrl+shift+p` e informe o idioma da página HTML. Digite `enter` e o código será alterado

![newrecorder](https://user-images.githubusercontent.com/36773331/229955421-031cbf60-9f92-4154-8ea4-c3ef6979adf0.gif)
