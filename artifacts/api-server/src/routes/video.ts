import { Router, type IRouter, type Request, type Response } from "express";
import fs from "fs";
import path from "path";

const router: IRouter = Router();

const VIDEO_PATH = path.resolve(
  process.cwd(),
  "..",
  "..",
  "attached_assets",
  "Best_Ring_Ceremony_2020_highlight_PRATEEK_+_KANIKA_BY_RAHUL_SI_1779523086465.mp4"
);

router.get("/video/featured", (req: Request, res: Response) => {
  if (!fs.existsSync(VIDEO_PATH)) {
    res.status(404).json({ error: "Video not found" });
    return;
  }

  const stat = fs.statSync(VIDEO_PATH);
  const fileSize = stat.size;
  const rangeHeader = req.headers.range;

  if (rangeHeader) {
    const parts = rangeHeader.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunkSize = end - start + 1;

    const fileStream = fs.createReadStream(VIDEO_PATH, { start, end });

    res.writeHead(206, {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunkSize,
      "Content-Type": "video/mp4",
      "Cache-Control": "public, max-age=86400",
    });

    fileStream.pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
      "Accept-Ranges": "bytes",
      "Cache-Control": "public, max-age=86400",
    });

    fs.createReadStream(VIDEO_PATH).pipe(res);
  }
});

export default router;
