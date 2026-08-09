const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Prefix an internal path with the site's base path.
 * Paths that are already absolute URLs or already carry the base
 * (e.g. image paths saved by Pages CMS) are returned unchanged.
 */
export function withBase(path: string): string {
  if (/^[a-z][a-z0-9+.-]*:/i.test(path)) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  if (p === base || p.startsWith(`${base}/`)) return p;
  return `${base}${p}`;
}
