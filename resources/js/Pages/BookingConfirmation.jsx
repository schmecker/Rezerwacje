import { Link } from "@inertiajs/react"

export default function BookingConfirmation({ }) {

    const booking = {
        id: 12345,
        room: {
            name: "Conference Room A",
        },
        date: "2025-03-15",
        time: "14:00",
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold text-center">Booking Confirmed!</h1>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <p>Room: {booking.room.name}</p>
                                <p>Date: {booking.date}</p>
                                <p>Time: {booking.time}</p>
                                <p>Booking ID: {booking.id}</p>
                            </div>
                            <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                <Link href="/dashboard" className="text-blue-600 hover:text-blue-700">
                                    {" "}
                                    View My Bookings &rarr;{" "}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

