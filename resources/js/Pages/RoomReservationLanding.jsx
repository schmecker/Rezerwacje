import TextInput from "@/components/TextInput"
import { Calendar, Clock, Users } from "lucide-react"
import PrimaryButton from "@/Components/PrimaryButton"
export default function RoomReservationLanding() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
            <header className="container mx-auto px-4 py-6">
                <nav className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-blue-600">RoomReserve</h1>
                    <div className="space-x-4">
                        <PrimaryButton variant="ghost">Login</PrimaryButton>
                        <PrimaryButton>Sign Up</PrimaryButton>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Simplify Room Bookings for Your Company</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Effortlessly manage and reserve meeting spaces with our intuitive platform.
                    </p>
                    <PrimaryButton size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Get Started
                    </PrimaryButton>
                </section>

                <section className="grid md:grid-cols-3 gap-8 mb-12">
                    <FeatureCard
                        icon={<Calendar className="h-8 w-8 text-blue-500" />}
                        title="Easy Scheduling"
                        description="Book rooms in seconds with our user-friendly calendar interface."
                    />
                    <FeatureCard
                        icon={<Clock className="h-8 w-8 text-blue-500" />}
                        title="Real-time Availability"
                        description="See up-to-date room availability to plan your meetings efficiently."
                    />
                    <FeatureCard
                        icon={<Users className="h-8 w-8 text-blue-500" />}
                        title="Team Collaboration"
                        description="Coordinate with your team members for seamless room management."
                    />
                </section>

                <section className="bg-white rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to streamline your room reservations?</h3>
                    <div className="flex gap-4">
                        <TextInput type="email" placeholder="Enter your work email" className="flex-grow" />
                        <PrimaryButton className="bg-blue-600 hover:bg-blue-700">Request Demo</PrimaryButton>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-100 py-6 mt-12">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    &copy; 2025 RoomReserve. All rights reserved.
                </div>
            </footer>
        </div>
    )
}

function FeatureCard({ icon, title, description }) {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="flex justify-center mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

