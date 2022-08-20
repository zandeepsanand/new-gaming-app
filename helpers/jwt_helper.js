const JWT = require('jsonwebtoken')
const createError = require('http-errors')

module.exports = {
    signAccessToken: (email,role,superAdmin) => {
        return new Promise((resolve, reject) => {

            const payload = {
                role: role,
                email:email,
                superAdmin:superAdmin
                
            }

            const secret = 'secretCode123'

           



            JWT.sign(payload, secret,  (err, token) => {
                if (err) {
                    console.log(err.message)
                    return reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },

    verifyAccessToken: (req, res, next) => {
        if (!req.headers['authorization']) {
            return next(createError.Unauthorized())
        }

        const authHeader = req.headers['authorization']
        const bearerToken = authHeader.split(' ')
        const token = bearerToken[1]
        console.log(token,'token')
        JWT.verify(token, 'secretCode123', (err, payload) => {
            if (err) {
                
                const message = err.name === 'JsonWebTokenError' ? 'Unauthorized' : err.message
                return next(createError.Unauthorized(message))
            }

            req.payload = payload
            next();
        })

    },

    signRefreshToken: (userId,role) => {
        return new Promise((resolve, reject) => {

            const payload = {
                role: role
            }

            const secret = process.env.REFRESH_TOKEN_SECRET

            const options = {
                expiresIn: '1y',
                issuer: 'ict-academy.com',
                audience: userId
            }



            JWT.sign(payload, secret, options, (err, token) => {
                if (err) {
                    console.log(err.message)
                    return reject(createError.InternalServerError())
                }
                resolve(token)
            })
        })
    },

    verifyRefreshToken: (refreshToken) => {
        return new Promise((resolve, reject) => {
            JWT.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, payload) => {
                if (err) return (createError.Unauthorized())

                const userId = payload.aud

                resolve(userId)
            })
        })
    }



}