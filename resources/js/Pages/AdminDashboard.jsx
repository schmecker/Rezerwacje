export default function AdminDashboard() {
    const rooms = [
        {
            id: 1,
            name: "Sala Konferencyjna A",
            capacity: 20,
            bookings_count: 5,
        },
        {
            id: 2,
            name: "Sala Spotkań B",
            capacity: 10,
            bookings_count: 2,
        },
        {
            id: 3,
            name: "Sala Zarządu C",
            capacity: 15,
            bookings_count: 7,
        },
    ];

    const bookings = [
        {
            id: 101,
            room: { name: "Sala Konferencyjna A" },
            user: { name: "Jan Kowalski" },
            date: "2025-03-15",
            time: "14:00",
        },
        {
            id: 102,
            room: { name: "Sala Spotkań B" },
            user: { name: "Anna Nowak" },
            date: "2025-03-16",
            time: "10:30",
        },
        {
            id: 103,
            room: { name: "Sala Zarządu C" },
            user: { name: "Alicja Wiśniewska" },
            date: "2025-03-17",
            time: "16:00",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Panel Administratora</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg p-4">
                            <h2 className="text-lg font-semibold mb-4">Szczegóły sal</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {rooms.map((room) => (
                                    <div key={room.id} className="bg-white p-4 rounded shadow">
                                        <h3 className="font-medium">{room.name}</h3>
                                        <p>Pojemność: {room.capacity}</p>
                                        <p>Łączna liczba rezerwacji: {room.bookings_count}</p>
                                    </div>
                                ))}
                            </div>
                            <h2 className="text-lg font-semibold mt-8 mb-4">Ostatnie rezerwacje</h2>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Sala
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Użytkownik
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Data
                                        </th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Godzina
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {bookings.map((booking) => (
                                        <tr key={booking.id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{booking.room.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{booking.user.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{booking.date}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{booking.time}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
