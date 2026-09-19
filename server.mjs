import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "dist");
const port = Number(process.env.PORT || 10000);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon"
};

createServer(async (req, res) => {
  try {
    let pathname = decodeURIComponent(new URL(req.url || "/", "http://localhost").pathname);
    if (pathname === "/") pathname = "/index.html";
    const safe = normalize(pathname).replace(/^(.\.[/\\])+/, "");
    let file = join(root, safe);

    try {
      const data = await readFile(file);
      res.writeHead(200, { "Content-Type": types[extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-cache" });
      res.end(data);
    } catch {
      const data = await readFile(join(root, "index.html"));
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-cache" });
      res.end(data);
    }
  } catch {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  }
}).listen(port, "0.0.0.0", () => console.log(`Made by Nexora running on port ${port}`));
