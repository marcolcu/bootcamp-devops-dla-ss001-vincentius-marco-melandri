import express from 'express';
import type { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get("/hello", (_req: Request, res: Response) => {
    res.json({ message: 'Hello, world!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
