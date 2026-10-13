# Configuração de empreitada.net.br

## Estado em 13 de outubro de 2026

- Domínio vinculado à produção do projeto `empreitada` na Vercel.
- `www.empreitada.net.br` cadastrado com redirecionamento 308 para `empreitada.net.br`.
- Registro.br liberou a edição da zona. Os registros A, CNAME e TXT foram salvos e conferidos novamente no painel, que informou “Zona DNS atualizada com sucesso”.
- Os registros A, CNAME e TXT estão publicados no DNS público. HTTPS da raiz responde HTTP 200; www redireciona com HTTP 308 para a raiz.
- Propriedade de domínio `empreitada.net.br` verificada no Search Console da conta `officegenisson@gmail.com`, perfil Chrome Genisson. Sitemap enviado em 13/10/2026; relatório inicial indica dificuldade de busca, apesar de o XML público responder HTTP 200.
- Indexação da página inicial solicitada e aceita pelo Google em 13/10/2026. A página entrou na fila de rastreamento; ainda não aparece como indexada.
- SEO para o domínio novo publicado no commit `e67fc91`: canonical, sitemap, robots e metadados usam o novo endereço. Build, nove testes de navegador e um teste de configuração passaram.
- O endereço antigo `empreitada.vercel.app` redireciona permanentemente com HTTP 308 para o domínio novo, preservando caminhos e parâmetros. Deploy da Vercel confirmado como concluído pelo status do commit; o perfil da Vercel não estava conectado para leitura do painel.

## Registros exigidos pela Vercel

| Tipo | Nome | Valor |
| --- | --- | --- |
| A | raiz / campo de nome vazio no Registro.br | 216.198.79.1 |
| CNAME | www | a6da54d655c21132.vercel-dns-017.com. |
| TXT | raiz / campo de nome vazio no Registro.br | google-site-verification=xP3trT9MVWnObf0DCkvyfr262CFDpcI5rj4dAu0la9o |

Valores obtidos diretamente do painel Domains do projeto. Confirmar novamente se a Vercel alterar sua recomendação.

## Conclusão pendente

1. Acompanhar o processamento do sitemap e a indexação no Google, sem repetir envios enquanto não houver erro persistente confirmado.
2. A atualização do link de apresentação do repositório via GitHub CLI retornou HTTP 404 por falta de acesso administrativo; isso não afeta a publicação do site.
