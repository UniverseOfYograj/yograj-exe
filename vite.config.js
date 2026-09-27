import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

function portfolioSeo(siteUrl) {
  const sitemapUrl = new URL("/sitemap.xml", siteUrl).href;
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}</loc><changefreq>monthly</changefreq><priority>1.0</priority></url>
</urlset>`;

  return {
    name: "portfolio-seo",
    transformIndexHtml: {
      order: "pre",
      handler(html) {
        return html.replaceAll("%VITE_SITE_URL%", siteUrl);
      },
    },
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: sitemap,
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, projectRoot, "VITE_");
  let siteUrl;

  try {
    siteUrl = new URL(env.VITE_SITE_URL || "https://yograj-exe.pages.dev").origin;
  } catch {
    throw new Error("VITE_SITE_URL must be a valid absolute site URL.");
  }

  return {
    plugins: [react(), tailwindcss(), portfolioSeo(siteUrl)],
  };
});