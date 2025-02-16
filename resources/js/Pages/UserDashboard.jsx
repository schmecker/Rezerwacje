
import { Link } from "@inertiajs/react";

export default function UserDashboard({ }) {

    const user = {
        name: "John Doe"
    };

    const bookings = [
        {
            id: 1,
            room: { name: "Conference Room A" },
            date: "2025-02-20",
            time: "10:00 AM"
        },
        {
            id: 2,
            room: { name: "Meeting Room B" },
            date: "2025-02-22",
            time: "02:00 PM"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
                            <div className="p-4">
                                <h2 className="text-lg font-semibold mb-4">Welcome, {user.name}</h2>
                                <h3 className="text-md font-medium mb-2">Your Upcoming Bookings:</h3>
                                {bookings.length > 0 ? (
                                    <ul className="list-disc pl-5">
                                        {bookings.map((booking) => (
                                            <li key={booking.id} className="mb-2">
                                                {booking.room.name} - {booking.date} at {booking.time}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>Brak nadchodzących rezerwacji</p>
                                )}
                                <div className="mt-6">
                                    <Link href="/rooms" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                        Zarezerwuj sale
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

