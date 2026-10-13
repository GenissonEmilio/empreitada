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
2. No ambiente Production, configure `SITE_URL=https://empreitada.net.br` e `SITE_NOINDEX=false`. Este endereço já é o padrão do projeto.
3. Publique e confirme respostas HTTP 200 em `/`, `/robots.txt`, `/sitemap.xml` e `/opengraph-image`.
4. Confira que o HTML contém canonical `https://empreitada.net.br/` e robots `index, follow`.

## Search Console

1. A propriedade de **domínio** `empreitada.net.br` foi verificada por TXT DNS na conta `officegenisson@gmail.com` em 13/10/2026. Preserve esse TXT no Registro.br.
2. O site anterior também possui verificação por tag HTML. O código mantém suporte a `GOOGLE_SITE_VERIFICATION`.
3. `https://empreitada.net.br/sitemap.xml` foi enviado ao Google. O estado inicial informa dificuldade de busca, embora o arquivo responda HTTP 200 com XML válido; aguarde o processamento e investigue se o erro persistir.
4. Use Inspeção de URL na página inicial e solicite indexação. A solicitação e o sitemap não garantem inclusão ou prazo de indexação.
5. Acompanhe relatórios de indexação, consultas, cliques e Core Web Vitals; investigue erros reais em vez de repetir solicitações.
6. Crie ou atualize o [Perfil da Empresa no Google](https://www.google.com/business/), se a empresa for elegível. Use ESM Empreiteira, o mesmo telefone, o site e as regiões atendidas. Empresas que atendem no local do cliente devem seguir as orientações de área de cobertura; não publique um endereço que não recebe clientes.

## Próximas melhorias com dados reais

- Fotos próprias de obras, com autorização, e descrições do serviço executado e cidade.
- Informações confirmadas de endereço e horários, se aplicáveis; só então ampliar os dados estruturados.
- Avaliações autênticas no Perfil da Empresa.
- Páginas específicas de serviços apenas quando houver conteúdo útil próprio, evitando páginas repetidas por cidade ou palavras-chave em excesso.
- O domínio próprio já é o canonical, e o endereço antigo redireciona permanentemente preservando caminhos e parâmetros. Atualize também o Perfil da Empresa quando ele existir.

## Referências

- [Guia de SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Dados estruturados de empresa local](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Robots no Next.js](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
