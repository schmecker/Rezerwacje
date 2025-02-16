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
                        <PrimaryButton variant="ghost">Zaloguj się</PrimaryButton>
                        <PrimaryButton>Zarejestruj się</PrimaryButton>
                    </div>
                </nav>
            </header>

            <main className="container mx-auto px-4 py-12">
                <section className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Uprość rezerwacje sal w swojej firmie</h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Zarządzaj i rezerwuj sale konferencyjne w łatwy i szybki sposób.
                    </p>
                    <PrimaryButton size="lg" className="bg-blue-600 hover:bg-blue-700">
                        Rozpocznij
                    </PrimaryButton>
                </section>

                <section className="grid md:grid-cols-3 gap-8 mb-12">
                    <FeatureCard
                        icon={<Calendar className="h-8 w-8 text-blue-500" />}
                        title="Łatwe planowanie"
                        description="Rezerwuj sale w kilka sekund dzięki intuicyjnemu kalendarzowi."
                    />
                    <FeatureCard
                        icon={<Clock className="h-8 w-8 text-blue-500" />}
                        title="Dostępność w czasie rzeczywistym"
                        description="Sprawdzaj dostępność sal na bieżąco i planuj spotkania efektywnie."
                    />
                    <FeatureCard
                        icon={<Users className="h-8 w-8 text-blue-500" />}
                        title="Współpraca zespołowa"
                        description="Koordynuj rezerwacje ze swoim zespołem i zarządzaj salami wspólnie."
                    />
                </section>


            </main>

            <footer className="bg-gray-100 py-6 mt-12">
                <div className="container mx-auto px-4 text-center text-gray-600">
                    &copy; 2025
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
