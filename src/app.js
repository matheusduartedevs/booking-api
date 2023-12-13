const fastify = require("fastify");
const BookingRepository = require("./bookings/BookingRepository");
const BookingService = require("./bookings/BookingService");
const BookingController = require("./bookings/BookingController");
const UserRepository = require("./auth/UserRepository");
const AuthService = require("./auth/AuthService");
const AuthController = require("./auth/AuthController");

const app = fastify({ logger: true })

const bookingRepository = new BookingRepository()
const bookingService = new BookingService(bookingRepository)
const bookingController = new BookingController(bookingService)
const userRepository = new UserRepository()
const authService = new AuthService(userRepository)
const authController = new AuthController(authService) 

app.get('/api/bookings', (req, reply) => {
    const { code, body } = bookingController.index(req)
    reply.code(code).send(body)
})

app.post('/api/bookings', (req, reply) => {
    const { code, body } = bookingController.save(req)
    reply.code(code).send(body)
})

app.post('/api/auth/register', (req, reply) => {
    const { code, body } = authController.register(req)
    reply.code(code).send(body)
})

module.exports = app