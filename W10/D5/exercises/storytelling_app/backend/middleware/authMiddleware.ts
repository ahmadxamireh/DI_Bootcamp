import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET } from "../helpers/envVarChecker";

// extend express Request type to allow custom 'user' field
declare global {
    namespace Express {
        interface Request {
            user?: JwtPayload;
        }
    }
}

// middleware to verify access token in authorization header
export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    // get token from authorization header
    const authHeader = req.headers.authorization;
    const token = authHeader?.startsWith("Bearer ") ? authHeader.split(" ")[1] : null;

    // if no token found, block access
    if (!token)
        return res.status(401).json({ error: 'Access token is missing or invalid' });

    // verify token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err)
            return res.status(401).json({ error: 'Token verification failed' });

        // attach user info to the request object
        req.user = decoded as JwtPayload;
        next();
    });
}