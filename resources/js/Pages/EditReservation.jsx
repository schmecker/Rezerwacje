import { useForm, usePage } from "@inertiajs/react" //Fixed import
import { Link } from "@inertiajs/react"

export default function EditReservation() {

    const booking = {
        id: 101,
        room_id: 2,
        date: "2025-03-16",
        time: "10:30",
        room: { name: "Meeting Room B" },
    };

    const rooms = [
        { id: 1, name: "Conference Room A" },
        { id: 2, name: "Meeting Room B" },
        { id: 3, name: "Boardroom C" },
    ];

    const { } = usePage().props
    const { data, setData, put, processing, errors } = useForm({
        room_id: booking.room_id,
        date: booking.date,
        time: booking.time,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        put(route("bookings.update", booking.id))
    }


    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Edytuj rezerwacje</h1>
                            <p className="text-gray-600">ID Rezerwacji: {booking.id}</p>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <form
                                onSubmit={handleSubmit}
                                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                            >
                                <div className="relative">
                                    <label
                                        htmlFor="room"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Sala
                                    </label>
                                    <select
                                        id="room"
                                        name="room_id"
                                        value={data.room_id}
                                        onChange={(e) => setData("room_id", e.target.value)}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                    >
                                        {rooms.map((room) => (
                                            <option key={room.id} value={room.id}>
                                                {room.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.room_id && <p className="text-red-500 text-xs italic">{errors.room_id}</p>}
                                </div>
                                <div className="relative">
                                    <label
                                        htmlFor="date"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Data
                                    </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        value={data.date}
                                        onChange={(e) => setData("date", e.target.value)}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                    />
                                    {errors.date && <p className="text-red-500 text-xs italic">{errors.date}</p>}
                                </div>
                                <div className="relative">
                                    <label
                                        htmlFor="time"
                                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                    >
                                        Godzina
                                    </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        value={data.time}
                                        onChange={(e) => setData("time", e.target.value)}
                                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-blue-600"
                                    />
                                    {errors.time && <p className="text-red-500 text-xs italic">{errors.time}</p>}
                                </div>
                                <div className="relative">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="bg-blue-500 text-white rounded-md px-4 py-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
                                    >
                                        {processing ? "Updating..." : "Update Reservation"}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                            <Link href={route("dashboard")} className="text-blue-600 hover:text-blue-800">
                                &larr; Powrot
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

