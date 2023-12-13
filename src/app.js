const fastify = require("fastify");
const BookingRepository = require("./bookings/BookingRepository");
const BookingService = require("./bookings/BookingService");
const BookingController = require("./bookings/BookingController");

const app = fastify({ logger: true })

const bookingRepository = new BookingRepository()
const bookingService = new BookingService(bookingRepository)
const bookingController = new BookingController(bookingService)

app.get('/api/bookings', (req, reply) => {
    const { code, body } = bookingController.index(req)
    reply.code(code).send(body)
})

app.post('/api/bookings', (req, reply) => {
    const { code, body } = bookingController.save(req)
    reply.code(code).send(body)
})

module.exports = app