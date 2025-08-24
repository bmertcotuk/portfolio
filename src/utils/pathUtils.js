/**
 * Returns the correct path for assets considering the base URL
 */
export function getAssetPath(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Get the base URL from import.meta.env or use default
  const base = import.meta.env.BASE_URL || '/portfolio/';
  
  return `${base}${cleanPath}`;
}