import express, { Request, Response } from "express";
import { marked } from "marked";
import fs from "fs";

const app = express();
const port = 4000;

const filePath = "src/searchLater.md";

app.get("/", (req: Request, res: Response) => {
  const search = req.query.search as string;
  console.log(search, req.query);

  if (search) {
    const url = `https://google.com/search?q=${encodeURIComponent(search)}`;
    const markdownLine = `* [${search}](${url})\n`;

    fs.appendFileSync(filePath, markdownLine);

    res.send("<script>window.close();</script>");
  } else {
    const data = fs.readFileSync(filePath, "utf8");
    const html = marked(data);
    res.send(html);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
