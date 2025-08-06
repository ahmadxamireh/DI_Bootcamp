import jwt from 'jsonwebtoken';

// secret key for JWT verification
const secretKey = 'mySecretKey';

// middleware function to verify JWT
export default function authenticateJWT(req, res, next) {
    const accessToken = req.cookies.token;
    const refreshToken = req.cookies.refreshToken;

    if (!accessToken)
        return res.status(401).json({ error: 'Unauthorized' });

    jwt.verify(accessToken, secretKey, (err, decoded) => {
        if (err) {
            // access token verification failed
            if (!refreshToken)
                return res.stats(403).json({ error: 'Token verification failed' });

            // attempt to refresh the access token using the refresh token
            jwt.verify(refreshToken, secretKey, (err, decoded) => {
                if (err)
                    return res.stats(403).json({ error: 'Refresh token verification failed' });

                // generate a new access token
                const newAccessToken = jwt.sign({ id: decoded.id, username: decoded.username }, secretKey, {
                    expiresIn: '1h', // New access token expires in 1 hour
                });

                // set the new access token as an HTTP cookie
                res.cookie('token', newAccessToken, { httpOnly: true });

                // attach the decoded user information to the request
                req.user = decoded;
                next();
            });
        } else {
            // access token is valid
            req.user = decoded;
            next();
        }
    });
}