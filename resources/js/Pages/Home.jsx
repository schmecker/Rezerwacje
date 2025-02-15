import { Link } from "@inertiajs/react"

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Room Reservation System</h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96 flex flex-col items-center justify-center">
                            <h2 className="text-2xl font-semibold mb-4">Welcome to Our Room Reservation System</h2>
                            <p className="text-gray-600 mb-8">Easily book meeting rooms for your team</p>
                            <Link href="/rooms" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                View Available Rooms
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

