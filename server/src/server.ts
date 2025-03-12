import express, { Request, Response } from "express";

const app = express();
const port = 4000;

app.get("/api", (req: Request, res: Response) => {
  const search = req.query.search as string;

  res.send(
    `<script src="/onSearchLater.js" id="on-search-later" data-search="${
      search ?? ""
    }"></script>`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
