# Publicação e presença no Google

## Implementado

- Next.js App Router entrega conteúdo e catálogo no HTML inicial, inclusive sem JavaScript.
- Título e descrição específicos para construção, reformas, Lagarto e Sergipe.
- URL canônica, Open Graph, Twitter e imagem de compartilhamento.
- `robots.txt` e `sitemap.xml` gerados pelo Next.js, com a página real e sem âncoras tratadas como páginas.
- JSON-LD `Organization` com contato, serviços e regiões confirmadas. Não há endereço, avaliações, preços ou horários inventados. Sem endereço confirmado, não usamos marcação de empresa local para prometer resultados enriquecidos.
- Imagens responsivas pelo Next Image no catálogo e abertura, foto prioritária e fontes servidas pelo próprio Next.js.
- Previews Vercel com `noindex`; conteúdo visível e navegação preservados sem scripts.

## Configuração na Vercel

1. Use o preset **Next.js**. Build: `npm run build`; instalação: `npm ci`; deixe o diretório de saída como padrão do framework (remova `dist`, se configurado antes).
2. No ambiente Production, configure `SITE_URL=https://empreitada.vercel.app` e `SITE_NOINDEX=false`. Este endereço já é o padrão do projeto.
3. Publique e confirme respostas HTTP 200 em `/`, `/robots.txt`, `/sitemap.xml` e `/opengraph-image`.
4. Confira que o HTML contém canonical `https://empreitada.vercel.app/` e robots `index, follow`.

## Ações que exigem a conta do proprietário

1. Abra [Google Search Console](https://search.google.com/search-console) e adicione uma propriedade de **prefixo de URL**: `https://empreitada.vercel.app/`.
2. Escolha a verificação por **tag HTML**. Copie somente o token do atributo `content` para `GOOGLE_SITE_VERIFICATION` no ambiente Production da Vercel. Publique novamente e conclua a verificação. O código já cria a meta tag automaticamente.
3. Envie `sitemap.xml` em Sitemaps.
4. Use Inspeção de URL na página inicial e solicite indexação. A solicitação e o sitemap não garantem inclusão ou prazo de indexação.
5. Acompanhe relatórios de indexação, consultas, cliques e Core Web Vitals; investigue erros reais em vez de repetir solicitações.
6. Crie ou atualize o [Perfil da Empresa no Google](https://www.google.com/business/), se a empresa for elegível. Use ESM Empreiteira, o mesmo telefone, o site e as regiões atendidas. Empresas que atendem no local do cliente devem seguir as orientações de área de cobertura; não publique um endereço que não recebe clientes.

## Próximas melhorias com dados reais

- Fotos próprias de obras, com autorização, e descrições do serviço executado e cidade.
- Informações confirmadas de endereço e horários, se aplicáveis; só então ampliar os dados estruturados.
- Avaliações autênticas no Perfil da Empresa.
- Páginas específicas de serviços apenas quando houver conteúdo útil próprio, evitando páginas repetidas por cidade ou palavras-chave em excesso.
- Ao adotar domínio próprio, atualizar `SITE_URL`, redirecionar permanentemente o endereço antigo para o novo e atualizar Search Console e Perfil da Empresa.

## Referências

- [Guia de SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Dados estruturados de empresa local](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Robots no Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
