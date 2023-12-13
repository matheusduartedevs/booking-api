const fastify = require("fastify");
const BookingRepository = require("./bookings/BookingRepository");
const BookingService = require("./bookings/BookingService");

const app = fastify({ logger: true })

const bookingRepository = new BookingRepository()
const bookingService = new BookingService(bookingRepository)

app.get('/api/bookings', (req, reply) => {
    const bookings = bookingService.findAllBookings()
    reply.send(bookings)
})

app.post('/api/bookings', (req, reply) => {
    const { roomId, guestName, checkInDate, checkOutDate } = req.body

    const booking = bookingService({ roomId, guestName, checkInDate, checkOutDate })

    reply.code(201).send({ message: "Booking created successfully", booking })
})

module.exports = app