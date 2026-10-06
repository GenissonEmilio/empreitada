import test from "node:test";
import assert from "node:assert/strict";

test("prévia não é indexável e validação evita canonical incorreto", async () => {
  const original = {
    SITE_URL: process.env.SITE_URL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    SITE_NOINDEX: process.env.SITE_NOINDEX,
  };
  try {
    process.env.SITE_URL = "https://empreitada.vercel.app";
    process.env.VERCEL_ENV = "preview";
    process.env.SITE_NOINDEX = "false";
    assert.equal((await import("../src/lib/site.js?preview")).indexable, false);
    process.env.VERCEL_ENV = "production";
    assert.equal(
      (await import("../src/lib/site.js?production")).indexable,
      true,
    );
    process.env.SITE_NOINDEX = "true";
    assert.equal(
      (await import("../src/lib/site.js?disabled")).indexable,
      false,
    );
    process.env.SITE_URL = "https://empreitada.vercel.app/errado";
    await assert.rejects(import("../src/lib/site.js?invalid"), /SITE_URL/);
  } finally {
    for (const [key, value] of Object.entries(original)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
  }
});
