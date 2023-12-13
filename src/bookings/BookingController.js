class BookingController {
    constructor(service) {
        this.service = service
    }

    index(req) {
        const bookings = this.service.findAllBookings()
        return { code: 200, body: { bookings } }
    }

    save(req) {
        const { roomId, guestName, checkInDate, checkOutDate } = req.body
        const user = req.user

        if (!roomId || !guestName || !checkInDate || !checkOutDate) {
            return { code: 400, body: { message: "All fields are required." } }
        }

        const booking = this.service.createBooking({ roomId, guestName, checkInDate, checkOutDate })

        return { code: 201, body: { message: "Booking created successfully", booking } }
    }
}

module.exports = BookingController