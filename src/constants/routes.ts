export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
} as const;

export type RouteKey = keyof typeof ROUTES;
