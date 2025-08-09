import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import { PORT } from "./helpers/envVarChecker";

// create an Express app instance
const app = express();

// enable CORS with credentials (cookies) for frontend on localhost:5173
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// parse incoming JSON and cookies requests
app.use(express.json());
app.use(cookieParser());

// log dev environment (optional)
if (process.env.NODE_ENV !== "production") {
    console.log("🚧 Running in development mode");
}

// default test route
app.get("/", (req, res) => {
    res.json({ message: "API is working" });
});

// mount all API routes under /api
app.use("/api", authRoutes); // handles /register, /login, /refresh
app.use("/api", userRoutes); // handles /profile, etc.

// catch al unknown routes
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// start the server and listen on the specified port
app.listen(PORT, () => console.log(`Server running on port ${ PORT }`));