import { routes } from '../data/routes'

/**
 * Converts a registered route path into a regex that matches real URLs.
 * Segments starting with ':' (e.g. ':slug') become [^/]+ wildcards.
 */
function routeToPattern(routePath: string): RegExp {
  const escaped = routePath
    .split('/')
    .map(segment => segment.startsWith(':') ? '[^/]+' : segment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('/')
  return new RegExp(`^${escaped}$`)
}

const routePatterns: RegExp[] = routes.map(r => routeToPattern(r.path))

/**
 * Returns true if the given path matches any registered route —
 * either an exact static route or a dynamic route with :slug segments.
 */
export function isRegisteredRoute(path: string): boolean {
  return routePatterns.some(pattern => pattern.test(path))
}
