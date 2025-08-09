// simple home page placeholder; later you will list stories here

export default function Home() {
    return (
        <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
            {/* card container */ }
            <div className="w-full max-w-3xl bg-white rounded-xl shadow-md p-6 sm:p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Home</h1>
                <p className="text-gray-600">
                    This is where stories will be listed later.
                </p>
            </div>
        </div>
    );
}