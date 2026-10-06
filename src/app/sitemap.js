import { siteUrl, indexable } from "../lib/site";
export default function sitemap() {
  // Only real pages: section anchors do not represent separate URLs.
  return indexable ? [{ url: `${siteUrl}/` }] : [];
}
