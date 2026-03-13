import { createApiApp } from "../server";

const app = createApiApp(null);

export const config = {
  runtime: "nodejs",
};

export default function handler(req: any, res: any) {
  // Depending on Vercel routing, `req.url` might not include `/api`.
  // Ensure Express routes mounted at `/api/*` still match.
  if (typeof req.url === "string" && !req.url.startsWith("/api/") && req.url !== "/api") {
    req.url = `/api${req.url.startsWith("/") ? "" : "/"}${req.url}`;
  }
  return app(req, res);
}
