const app = require("./app")

const PORT = process.env.PORT || 3000

const start = async () => {
    try {
        app.listen({ port: PORT })
        app.log.info(`Server on http://localhost:${PORT}`)
    } catch (error) {
        app.log.error(error)
        process.exit(1)
    }
}

start()