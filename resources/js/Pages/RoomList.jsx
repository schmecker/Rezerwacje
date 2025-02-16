import { useState } from "react"
import { format } from "date-fns"
import { DayPicker } from "react-day-picker"
import "react-day-picker/dist/style.css"

export default function RoomList() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [selectedTime, setSelectedTime] = useState(null)

    const rooms = [
        { id: 1, name: "Sala biurowa", capacity: 12, amenities: ["Wi-Fi", "Kawa", "Telewizor"] },
        { id: 2, name: "Sala spotkań", capacity: 8, amenities: ["Wi-Fi", "Tablica"] },
        { id: 3, name: "Studio", capacity: 4, amenities: ["Wi-Fi"] },
        { id: 4, name: "Sala konferencyjna", capacity: 20, amenities: ["Wi-Fi", "Kawa", "Telewizor", "Projektor"] },
    ]

    const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"]

    const getAmenityIcon = (amenity) => {
        switch (amenity) {
            case "Wi-Fi":
                return "📶"
            case "Kawa":
                return "☕"
            case "Telewizor":
                return "📺"
            case "Tablica":
                return "🗒️"
            case "Projektor":
                return "📽️"
            default:
                return "🔹"
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Rezerwacja Pokoi</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="col-span-1 bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Wybierz Datę i Godzinę</h2>
                        <div className="mb-4">
                            <DayPicker
                                mode="single"
                                selected={selectedDate}
                                onSelect={setSelectedDate}
                                footer={selectedDate && <p>Wybrano {format(selectedDate, "PP")}.</p>}
                            />
                        </div>
                        <div>
                            <label htmlFor="time-select" className="block text-sm font-medium text-gray-700 mb-2">
                                Wybierz Godzinę
                            </label>
                            <div className="grid grid-cols-3 gap-2">
                                {timeSlots.map((time) => (
                                    <button
                                        key={time}
                                        className={`py-2 px-4 text-sm font-medium rounded-md ${selectedTime === time
                                            ? "bg-blue-600 text-white"
                                            : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                                            }`}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-2 bg-white shadow rounded-lg p-6">
                        <h2 className="text-xl font-semibold mb-4">Dostępne Pokoje</h2>
                        <p className="text-gray-600 mb-4">
                            {selectedDate && selectedTime
                                ? `Wyświetlanie pokoi na ${format(selectedDate, "PP")} o godzinie ${selectedTime}`
                                : "Wybierz datę i godzinę, aby zobaczyć dostępne pokoje"}
                        </p>
                        <div className="space-y-4">
                            {rooms.map((room) => (
                                <div key={room.id} className="border rounded-lg p-4">
                                    <h3 className="text-lg font-semibold">{room.name}</h3>
                                    <p className="text-gray-600 flex items-center">
                                        <span className="mr-1">👥</span>
                                        Pojemność: {room.capacity}
                                    </p>
                                    <div className="flex space-x-2 mt-2">
                                        {room.amenities.map((amenity) => (
                                            <span key={amenity} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                                                {getAmenityIcon(amenity)} {amenity}
                                            </span>
                                        ))}
                                    </div>
                                    <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
                                        Zarezerwuj
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
