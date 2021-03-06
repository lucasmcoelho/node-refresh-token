import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";

const app = express();
app.use(express.json());
app.use(router);
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
        return response.status(400).json({
            status: "Error",
            message: error.message,
        });
    }
);

app.listen(3001, () => console.log("Server started! URL: http://localhost:3001"))