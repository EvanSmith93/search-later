import express, { Request, Response } from "express";
import fs from "fs";
import path from "path";

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

    res.send(
      `<script src="http://localhost:${port}/onSearchLater.js" id="on-search-later" data-search="${search}"></script>`
    );
  } else {
    res.sendFile(path.join(__dirname, "../../app/dist"));
  }
});

app.use(express.static("../app/dist"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
