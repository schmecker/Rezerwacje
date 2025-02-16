import { useForm } from "@inertiajs/react"
import { Transition } from "@headlessui/react"
import { usePage } from "@inertiajs/react"

export default function UpdateProfileInfoForm({ className = "" }) {
    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        phone: "",
        preferred_room_type: "",
    })
    const page = usePage()

    const submit = (e) => {
        e.preventDefault()
        patch(route("profile.update.preferences"))
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Informacje</h2>
                <p className="mt-1 text-sm text-gray-600">Zaktualizuj swoje informacje.</p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                        Numer telefonu
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        value={data.phone}
                        onChange={(e) => setData("phone", e.target.value)}
                        required
                    />
                    {errors.phone && <p className="mt-2 text-sm text-red-600">{errors.phone}</p>}
                </div>



                <div className="flex items-center gap-4">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                        disabled={processing}
                    >
                        Zapisz
                    </button>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    )
}

