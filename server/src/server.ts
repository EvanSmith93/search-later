import express, { Request, Response } from "express";
import { marked } from "marked";
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

    res.send("<script>window.close();</script>");
  } else {
    res.sendFile(path.join(__dirname, "../../app/dist"));

    // const data = fs.readFileSync(filePath, "utf8");
    // const list = marked(data);

    // const html = `
    // <!doctype html>
    // <html>
    //   <head>
    //     <link rel="search" type="application/opensearchdescription+xml" title="Search Later" href="http://localhost:4000/opensearch.xml">
    //   </head>
    //   <body>
    //     ${list}
    //   </body>`;

    // console.log(html);
    // res.send(html);
  }
});

app.use(express.static("../app/dist"));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
