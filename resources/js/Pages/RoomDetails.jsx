import { useForm } from "@inertiajs/react";

export default function RoomDetails({ }) {
    const { data, setData, post, processing, errors } = useForm({
        date: "",
        time: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(`/rooms/${room.id}/book`);
    };

    const room = {
        id: 1,
        name: "Sala konferencyjna A",
        capacity: 20,
        amenities: ["Projektor", "Tablica", "WiFi", "Klimatyzacja"],
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">{room.name}</h1>
                            <p className="text-gray-600">Pojemność: {room.capacity} osób</p>
                            <p className="text-gray-600">Udogodnienia: {room.amenities.join(", ")}</p>
                        </div>
                        <div className="divide-y divide-gray-200">
                            <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="date">
                                            Data
                                        </label>
                                        <input
                                            type="date"
                                            id="date"
                                            value={data.date}
                                            onChange={(e) => setData("date", e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                        {errors.date && <div className="text-red-500 text-xs italic">{errors.date}</div>}
                                    </div>
                                    <div className="mb-6">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="time">
                                            Godzina
                                        </label>
                                        <input
                                            type="time"
                                            id="time"
                                            value={data.time}
                                            onChange={(e) => setData("time", e.target.value)}
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        />
                                        {errors.time && <div className="text-red-500 text-xs italic">{errors.time}</div>}
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <button
                                            type="submit"
                                            disabled={processing}
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        >
                                            Zarezerwuj
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
