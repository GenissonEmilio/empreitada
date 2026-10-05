# ESM Empreiteira

Site responsivo em português para serviços de construção, reformas e consulta de equipamentos.

## Executar

```sh
npm install
npm run dev
```

## Gerar versão de produção

```sh
npm run build
npm run preview
```

A pasta `dist` pode ser publicada em hospedagem estática. O formulário prepara uma mensagem para o WhatsApp; o visitante revisa e envia no aplicativo. Não há servidor de e-mail, banco de dados ou armazenamento dos dados do formulário.

## Conteúdo

- Contatos: `index.html`; número usado no orçamento e catálogo: `src/main.js`.
- Imagens fornecidas: `public/assets/`. O catálogo usa imagens de referência e solicita confirmação de disponibilidade, sem afirmar estoque ou preços.
- Foto de abertura: arquivo local `public/assets/obra.jpg`, obtido do [Unsplash](https://images.unsplash.com/photo-1504307651254-35680f356dfd). O link de imagem do código original retornava 404 e foi substituído. Fontes Google Fonts com alternativas locais como fallback.
- Código recebido preservado em `referencia-original.txt`.
- Não foram inventados projetos, depoimentos, endereço, anos de experiência ou resultados.

## Verificação

```sh
npx playwright install chromium
npx playwright test
```
