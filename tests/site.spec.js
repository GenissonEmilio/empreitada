import { test, expect } from "@playwright/test";

test("catálogo filtra, busca sem acentos e mostra estado vazio", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".equipment-card")).toHaveCount(5);
  await page.getByRole("button", { name: "Ferramentas", exact: true }).click();
  await expect(page.locator(".equipment-card")).toHaveCount(3);
  await page.getByRole("searchbox").fill("marmore");
  await expect(page.locator(".equipment-card")).toHaveCount(1);
  await expect(page.locator(".equipment-card h3")).toHaveText("Serra mármore");
  await page.getByRole("searchbox").fill("inexistente");
  await expect(page.locator(".empty-state")).toBeVisible();
});

test("orçamento prepara contato correto e mantém dados fora do HTML", async ({
  page,
}) => {
  await page.goto("/");
  await page.evaluate(() => {
    window.open = (url) => {
      window.testWhatsapp = url;
    };
  });
  await page.locator('[data-service="Pintura"]').click();
  await expect(page.locator("#service-select")).toHaveValue("Pintura");
  await page.getByLabel("Seu nome").fill("Ana <teste>");
  await page.getByLabel("Cidade / bairro").fill("Aracaju / Centro");
  await page
    .getByLabel("Conte um pouco da sua ideia")
    .fill("Pintar minha sala");
  await page.getByRole("button", { name: "Continuar no WhatsApp" }).click();
  const url = new URL(await page.evaluate(() => window.testWhatsapp));
  expect(url.pathname).toBe("/5579998708819");
  expect(url.searchParams.get("text")).toContain("Ana <teste>");
  expect(url.searchParams.get("text")).toContain("Pintura");
  await expect(page.locator("#form-status a")).toHaveAttribute(
    "href",
    url.toString(),
  );
});

test("menu móvel, links internos e layout sem transbordamento", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir menu" }).click();
  await expect(page.locator("#nav")).toBeVisible();
  await page
    .locator("#nav")
    .getByRole("link", { name: "Equipamentos" })
    .click();
  await expect(page.locator(".menu-toggle")).toHaveAttribute(
    "aria-expanded",
    "false",
  );
  const brokenAnchors = await page
    .locator('a[href^="#"]')
    .evaluateAll((links) =>
      links
        .filter((link) => !document.getElementById(link.hash.slice(1)))
        .map((link) => link.hash),
    );
  expect(brokenAnchors).toEqual([]);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= window.innerWidth,
    ),
  ).toBe(true);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  await expect(page.locator("html")).not.toHaveClass(/js-motion/);
});

test("recursos locais carregam e não há erros de JavaScript", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  for (const image of [
    "logo",
    "andaime",
    "betoneira",
    "serra",
    "furadeira",
    "plaina",
  ]) {
    const response = await page.request.get(`/assets/${image}.png`);
    expect(response.ok()).toBe(true);
  }
  expect(errors).toEqual([]);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.reload();
  const logoRatio = await page.locator('.about-art img').evaluate(image => {
    const bounds = image.getBoundingClientRect();
    return { displayed: bounds.width / bounds.height, intrinsic: image.naturalWidth / image.naturalHeight };
  });
  expect(logoRatio.displayed).toBeCloseTo(logoRatio.intrinsic, 1);
  await page.screenshot({ path: "test-results/desktop.png", fullPage: true });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: "test-results/mobile.png", fullPage: true });
});
