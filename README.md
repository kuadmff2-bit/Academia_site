# Academia_site

Site responsivo para academia, com galeria, planos e formulário de interesse que abre o WhatsApp com a mensagem pronta.

## Arquivos principais

- `index.html` — textos, legendas, horários, nomes dos planos, preços e benefícios.
- `style.css` — cores, tamanhos, espaçamentos e responsividade.
- `script.js` — número do WhatsApp e funcionamento do formulário.
- `assets/estrutura.webp` — foto grande da academia.
- `assets/motivacao.webp` — foto principal do topo.
- `assets/halteres.webp` — foto da área de pesos.

## Trocar o número do WhatsApp

Abra `script.js` e altere:

```js
const WHATSAPP_NUMBER = "5592999999999";
```

Use somente números: `55` + DDD + número.

## Trocar fotos

Você pode substituir os arquivos dentro de `assets` mantendo exatamente os mesmos nomes. Assim não precisa alterar o HTML.

## Enviar mudanças pelo VS Code

```bash
git add .
git commit -m "Atualiza site da academia"
git push
```
