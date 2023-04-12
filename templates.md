# Templates de código baseados em HTML semântico
Inicialmente, os templates criados estão se baseando em HTML semântico, visto que o HTML semântico é uma técnica usada para tornar o conteúdo da página web mais acessível, especialmente para pessoas com deficiência visual que usam leitores de tela para acessar o conteúdo.

Quando usamos HTML semântico, podemos criar uma estrutura clara e organizada para uma página. Dessa forma, leitores de tela conseguem navegar pelo site e entender a relação entre as diferentes partes da página.

Além disso, o HTML semântico também ajuda os desenvolvedores a criar páginas web que são compatíveis com as diretrizes de acessibilidade, como as estabelecidas pelo WCAG (Web Content Accessibility Guidelines). As diretrizes do WCAG fornecem orientação sobre como tornar o conteúdo da web mais acessível para pessoas com deficiência, incluindo aquelas com deficiência visual.

## Atributo _target='_blank'_
### Código inicial
![image](https://user-images.githubusercontent.com/36773331/231592311-58494d07-eb21-48e6-acd0-04ac71780ba0.png)
### Após o uso do `a11y-refactoring`
![image](https://user-images.githubusercontent.com/36773331/231592362-2b9a5818-60db-44da-bddf-6fbd0673ee31.png)
- _atrRef_ contém uma string com 0 ou mais caracteres representando o link de referência
- _atrTarget_ e content contém uma string com 0 ou mais caracteres

## Atributo _lang_
### Código inicial
![image](https://user-images.githubusercontent.com/36773331/231593399-f8629c65-9f03-4190-a5fc-891fae7de7ab.png)
### Após o uso do `a11y-refactoring`
![image](https://user-images.githubusercontent.com/36773331/231593481-21af23df-8384-467f-b5a1-c0a676815dd2.png)
- _atrLang_ contém uma string com 0 ou mais caracteres

## Atributo _alt_
### Código inicial
![image](https://user-images.githubusercontent.com/36773331/231593771-cf01f38c-ec10-4ff3-9491-c147cabc347d.png)
### Após o uso do `a11y-refactoring`
![image](https://user-images.githubusercontent.com/36773331/231593849-a97c21bd-f500-410c-87ba-6c7f98b412c6.png)
- _atrSrc_ e _atrAlt_ contém uma string com 0 ou mais caracteres

## Tags _thead_ e _tbody_ para tabelas
### Código inicial
![image](https://user-images.githubusercontent.com/36773331/231594524-3f3075c4-492b-4148-a689-a2f1dd306f7e.png)
### Após o uso do `a11y-refactoring`
![image](https://user-images.githubusercontent.com/36773331/231594348-7d2648ae-33c3-4671-892a-42da9a3dd317.png)
- _tagHead_ e _tagBody_ representam as tags _<thead>_ e _<tbody>_, respectivamente
  - Essas tags são inseridas de acordo com as tags _<th>_ e _<td>_ internas
