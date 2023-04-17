# Templates de código baseados em HTML semântico
Inicialmente, os templates criados estão se baseando em HTML semântico, visto que o HTML semântico é uma técnica usada para tornar o conteúdo da página web mais acessível, especialmente para pessoas com deficiência visual que usam leitores de tela para acessar o conteúdo.

Quando usamos HTML semântico, podemos criar uma estrutura clara e organizada para uma página. Dessa forma, leitores de tela conseguem navegar pelo site e entender a relação entre as diferentes partes da página.

Além disso, o HTML semântico também ajuda os desenvolvedores a criar páginas web que são compatíveis com as diretrizes de acessibilidade, como as estabelecidas pelo WCAG (Web Content Accessibility Guidelines). As diretrizes do WCAG fornecem orientação sobre como tornar o conteúdo da web mais acessível para pessoas com deficiência, incluindo aquelas com deficiência visual.

## Atributo _target='_blank'_
### Código inicial
![image](https://user-images.githubusercontent.com/36773331/231592311-58494d07-eb21-48e6-acd0-04ac71780ba0.png)
### Após o uso do `a11y-refactoring`
![image](https://user-images.githubusercontent.com/36773331/232590738-a5eb95ef-8bfa-4e2e-90d4-b1cc637f8549.png)
- _attrRef_ contém uma string com 0 ou mais caracteres representando o link de referência
- _attrTarget_ e content contém uma string com 0 ou mais caracteres

## Atributo _lang_
### Código inicial
![image](https://user-images.githubusercontent.com/36773331/232590932-487b114b-1212-4f9a-a512-2c0dd310c14f.png)
### Após o uso do `a11y-refactoring`
![image](https://user-images.githubusercontent.com/36773331/232590994-221f268c-356d-4fab-baad-e6f39adfec04.png)
- _attrLang_ contém uma string com 0 ou mais caracteres

## Atributo _alt_
### Código inicial
![image](https://user-images.githubusercontent.com/36773331/232591105-0c0736e8-ce51-402c-b23f-3ba97dbef881.png)
### Após o uso do `a11y-refactoring`
![image](https://user-images.githubusercontent.com/36773331/232591174-74f5cab8-d694-4944-8d6c-743d2be50eb8.png)
- _attrSrc_ e _attrAlt_ contém uma string com 0 ou mais caracteres

## Tags _thead_ e _tbody_ para tabelas
### Código inicial
![image](https://user-images.githubusercontent.com/36773331/231594524-3f3075c4-492b-4148-a689-a2f1dd306f7e.png)
### Após o uso do `a11y-refactoring`
![image](https://user-images.githubusercontent.com/36773331/231594348-7d2648ae-33c3-4671-892a-42da9a3dd317.png)
- _tagHead_ e _tagBody_ representam as tags _thead_ e _tbody_, respectivamente
  - Essas tags são inseridas de acordo com as tags _<th>_ e _<td>_ internas
