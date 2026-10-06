const configuredUrl = process.env.SITE_URL || "https://empreitada.vercel.app";
const parsedUrl = new URL(configuredUrl);
if (
  !["http:", "https:"].includes(parsedUrl.protocol) ||
  parsedUrl.username ||
  parsedUrl.password ||
  parsedUrl.pathname !== "/" ||
  parsedUrl.search ||
  parsedUrl.hash
) {
  throw new Error(
    "SITE_URL deve ser a origem pública do site, sem caminhos, credenciais ou parâmetros.",
  );
}
export const siteUrl = parsedUrl.origin;
export const indexable =
  process.env.VERCEL_ENV !== "preview" && process.env.SITE_NOINDEX !== "true";
export const siteTitle =
  "ESM Empreiteira em Lagarto e Sergipe | Construção e Reformas";
export const siteDescription =
  "Construção civil, reformas, pintura e impermeabilização em Lagarto e regiões de Sergipe. Consulte equipamentos e solicite seu orçamento com a ESM Empreiteira.";
export const services = [
  "Construção civil",
  "Reformas e alvenaria",
  "Pintura",
  "Impermeabilização",
];
