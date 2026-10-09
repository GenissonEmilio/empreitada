# Imagens individuais de ferramentas

As montagens fornecidas serviram para identificar os tipos de ferramentas. O site não exibe as montagens, as marcas, os textos ou os selos presentes nelas. Variantes da mesma ferramenta foram agrupadas por tipo, sem atribuir marca ou modelo ao catálogo.

## Arquivos finais

- 35 imagens novas em `public/assets/tools/*.webp`, uma ferramenta por arquivo.
- Os cinco equipamentos do catálogo original continuam em `public/assets/`.
- Catálogo, descrições e uso principal: `src/lib/equipment.js`.
- Imagens novas geradas com a ferramenta integrada `image_gen`, e preparadas em WebP de até 640 px com `scripts/prepare-tool-assets.mjs`. Originais mantidos na pasta de imagens geradas do Codex.
- As imagens são representações ilustrativas, não comprovação de marca, modelo, estoque, capacidade ou especificações. A disponibilidade continua sob consulta.

## Conjunto de prompts

Prompt comum: “Use case: product-mockup. Asset type: standalone tool catalog photograph. Exactly ONE [subject]. Photorealistic, physically accurate recognizable construction, crisp metal and wood surfaces, entire object visible in a centered square composition with 12% margin, isolated pure white backdrop, three-quarter studio lighting with subtle shadow. Nothing else in the image. No additional tools, no collage, no words, no brand, no logo, no watermark. Generic illustration of the corresponding tool type from user reference sheets, matching cohesive professional catalog photography.”

Variações equivalentes foram usadas no primeiro conjunto de ferramentas elétricas, sempre com um único objeto, enquadramento inteiro, fundo branco e sem marca ou texto.

Subjects: rotary hammer drill; angle grinder; orbital finishing sander; jigsaw; circular saw; cordless drill driver; galvanized telescopic construction prop; metal cut-off saw; compound miter saw; heat gun; electric paint sprayer; rotary multitool; portable air compressor; inverter welding machine; plunge router; hoe; pointed shovel; articulated post hole digger; axe; pickaxe; claw hammer; combination pliers; adjustable wrench; handsaw; retractable tape measure; construction wheelbarrow; aluminum extension ladder; spirit level; paint roller; manual staple gun; ratchet wrench; chainsaw; bench grinder; chain hoist; carpenter pincer.

## Comportamento do carrossel

Avança um cartão a cada 4,2 segundos quando está visível. Pausa ao passar o mouse, focar um cartão, usar filtros/busca ou navegar manualmente. O botão Reproduzir permite retomá-lo. Respeita movimento reduzido e pausa quando a aba está oculta. Não duplica cartões nem links; todo o catálogo permanece no HTML inicial.
