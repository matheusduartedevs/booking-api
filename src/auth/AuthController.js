class AuthController {
    constructor(service) {
        this.service = service
    }

    register(req) {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return { code: 400, body: { message: 'Name, email and password are required' } }
        }

        try {
            const user = this.service.register(name, email, password)
            return { code: 201, body: user }
        } catch (error) {
            return { code: 400, body: { message: error.message } }
        }
    }
}

module.exports = AuthController