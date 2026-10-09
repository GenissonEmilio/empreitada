import { test, expect } from "@playwright/test";

test("carrossel avança sozinho e permite pausar sem reiniciar", async ({
  page,
}) => {
  await page.goto("/");
  await page.locator(".equipment-carousel").scrollIntoViewIfNeeded();
  const scroll = () =>
    page.locator(".equipment-track").evaluate((element) => element.scrollLeft);
  await page.locator(".equipment-track").hover();
  await page
    .locator(".equipment-track")
    .dispatchEvent("wheel", { deltaY: 100 });
  await expect.poll(scroll, { timeout: 2000 }).toBeGreaterThan(10);
  const initial = await scroll();
  await expect.poll(scroll, { timeout: 2000 }).toBeGreaterThan(initial + 20);
  await page
    .getByRole("button", { name: "Pausar carrossel", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Reproduzir carrossel", exact: true }),
  ).toBeVisible();
  await page.waitForTimeout(500);
  const paused = await scroll();
  await page.waitForTimeout(4500);
  expect(await scroll()).toBeCloseTo(paused, 0);
  await page.getByRole("button", { name: "Próximos equipamentos" }).click();
  await expect.poll(scroll).toBeGreaterThan(paused);
});

test("carrossel retoma após setas e mantém reprodução ao filtrar", async ({
  page,
}) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Manuais", exact: true }).click();
  await page.locator(".equipment-carousel").scrollIntoViewIfNeeded();
  const track = page.locator(".equipment-track");
  const scroll = () => track.evaluate((element) => element.scrollLeft);
  await expect.poll(scroll, { timeout: 2000 }).toBeGreaterThan(10);
  await page.getByRole("button", { name: "Próximos equipamentos" }).click();
  await expect(track).toHaveAttribute("data-autoplay", "false");
  await page.waitForTimeout(800);
  const manual = await scroll();
  await expect(track).toHaveAttribute("data-autoplay", "true", {
    timeout: 6000,
  });
  await expect.poll(scroll, { timeout: 2000 }).toBeGreaterThan(manual + 20);
});

test("movimento reduzido, filtros manuais e imagens individuais", async ({
  page,
  request,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(
    page.getByRole("button", { name: "Reproduzir carrossel", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Manuais", exact: true }).click();
  await expect(page.locator(".equipment-card")).toHaveCount(16);
  await page.getByRole("searchbox").fill("cavadeira");
  await expect(page.locator(".equipment-card")).toHaveCount(1);
  await expect(page.locator(".equipment-card h3")).toHaveText(
    "Cavadeira articulada",
  );
  await expect(page.locator(".equipment-card img")).toHaveAttribute(
    "alt",
    "Cavadeira articulada",
  );
  await expect(
    page.getByRole("link", { name: "Consultar Cavadeira articulada" }),
  ).toHaveAttribute("href", /wa.me\/5579998708819/);
  await expect(
    page.getByRole("button", { name: "Próximos equipamentos" }),
  ).toBeDisabled();
  await page.getByRole("searchbox").fill("");
  await page.getByRole("button", { name: "Todos", exact: true }).click();
  const urls = await page
    .locator(".equipment-card img")
    .evaluateAll((images) =>
      images.map(
        (image) =>
          new URL(image.src).searchParams.get("url") ||
          image.getAttribute("src"),
      ),
    );
  expect(new Set(urls).size).toBe(40);
  for (const url of urls) expect((await request.get(url)).ok(), url).toBe(true);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.locator(".equipment-carousel").scrollIntoViewIfNeeded();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: "test-results/carousel-mobile.png",
    fullPage: false,
  });
});
