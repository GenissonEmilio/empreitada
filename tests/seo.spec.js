import { test, expect } from "@playwright/test";

test("HTML inicial entrega serviços, catálogo, região e metadados sem JavaScript", async ({
  browser,
  request,
}) => {
  const response = await request.get("/");
  expect(response.status()).toBe(200);
  expect(response.headers()["x-powered-by"]).toBeUndefined();
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto("/");
  await expect(page).toHaveTitle(
    "ESM Empreiteira em Lagarto e Sergipe | Construção e Reformas",
  );
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator(".service-card")).toHaveCount(4);
  await expect(page.locator(".equipment-card")).toHaveCount(5);
  await expect(page.locator(".hero-description")).toContainText("Lagarto");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    /^https:\/\/empreitada\.vercel\.app\/?$/,
  );
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    /Lagarto.*Sergipe/,
  );
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
    "content",
    /^index, follow/,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    /^https:\/\/empreitada\.vercel\.app\/?$/,
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
  const schema = JSON.parse(
    await page.locator('script[type="application/ld+json"]').textContent(),
  );
  expect(schema.name).toBe("ESM Empreiteira");
  expect(schema.telephone).toBe("+55-79-99870-8819");
  expect(schema.areaServed[0].name).toBe("Lagarto");
  expect(schema.hasOfferCatalog.itemListElement).toHaveLength(4);
  expect(schema.address).toBeUndefined();
  await context.close();
});

test("robots e sitemap usam a URL pública e imagem social existe", async ({
  request,
}) => {
  const robots = await request.get("/robots.txt");
  expect(robots.ok()).toBe(true);
  const text = await robots.text();
  expect(text).toContain("Allow: /");
  expect(text).toContain("Sitemap: https://empreitada.vercel.app/sitemap.xml");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  const xml = await sitemap.text();
  expect(xml).toContain("<loc>https://empreitada.vercel.app/</loc>");
  expect(xml).not.toMatch(/localhost|127\.0\.0\.1|#[a-z]/);
  const image = await request.get("/opengraph-image");
  expect(image.ok()).toBe(true);
  expect(image.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/pagina-inexistente")).status()).toBe(404);
});
