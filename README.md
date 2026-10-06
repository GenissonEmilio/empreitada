# ESM Empreiteira

Site em Next.js App Router e React para construção, reformas e consulta de equipamentos em Lagarto e regiões de Sergipe. Visual e funcionalidades da versão original preservados.

## Executar

```sh
npm ci
npm run dev
```

Abra http://127.0.0.1:3000. Use uma versão de Node.js compatível com Next.js (consulte `engines` em `node_modules/next/package.json`).

## Produção

```sh
npm run build
npm start
```

Na Vercel, selecione o preset **Next.js** e remova `dist` do diretório de saída, se configurado. Variáveis disponíveis: [.env.example](.env.example). Configuração e próximos passos no Google: [docs/SEO.md](docs/SEO.md).

O formulário prepara uma mensagem para o WhatsApp; o visitante revisa e envia no aplicativo. Não há servidor de e-mail, banco de dados ou armazenamento dos dados do formulário.

## Conteúdo

- Conteúdo: `src/app/page.jsx`; metadados: `src/app/layout.jsx`.
- Contatos do WhatsApp: `src/lib/contact.js`; SEO: `src/lib/site.js`; catálogo: `src/lib/equipment.js`.
- Componentes React interativos: `src/components/`.
- Sitemap, robots e imagem social: `src/app/`.
- Imagens fornecidas: `public/assets/`. O catálogo usa imagens de referência e solicita confirmação de disponibilidade, sem afirmar estoque ou preços.
- Foto de abertura: arquivo local `public/assets/obra.jpg`, obtido do [Unsplash](https://images.unsplash.com/photo-1504307651254-35680f356dfd). Foto de referência, não apresentada como obra da empresa. Fontes servidas pelo próprio Next.js com `next/font`.
- Código recebido preservado em `referencia-original.txt`.
- Não foram inventados projetos, depoimentos, endereço, anos de experiência ou resultados.

## Verificação

```sh
npx playwright install chromium
npx playwright test
node --test tests/site-config.test.js
npm run build
npm run test:production
```

Os testes cobrem catálogo, formulário, menu móvel, HTML sem JavaScript, metadados, dados estruturados, robots, sitemap e imagem de compartilhamento. A indexação depende da publicação acessível e dos processos do Google; código no GitHub por si só não solicita indexação.
