export default function GetStarted() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
                What would you like to do?
            </h1>

            <p className="text-lg text-gray-200 max-w-xl mb-10">
                Choose one of the options below to explore my work or get in touch.
            </p>

            <div className="grid gap-6 sm:grid-cols-3">
                <a
                    href="/about"
                    className="p-6 border rounded-xl hover:shadow-lg transition"
                >
                    <h3
                        className="inline-flex items-center justify-center px-6 py-3 
                         bg-indigo-600 text-white font-medium rounded-lg 
                         hover:bg-indigo-700 transition duration-300"

                    >About Me</h3>
                    <p className="text-gray-300 text-sm">
                        Learn more about my background and skills.
                    </p>
                </a>

                <a
                    href="https://github.com/sharmaaditi4482-source"
                    className="p-6 border rounded-xl hover:shadow-lg transition"

                >
                    <h3 className="inline-flex items-center justify-center px-6 py-3 
                         bg-indigo-600 text-white font-medium rounded-lg 
                         hover:bg-indigo-700 transition duration-300"
                    >Projects</h3>
                    <p className="text-gray-300 text-sm">
                        See what I’ve built using React and web technologies.
                    </p>
                </a>

                <a
                    href="/contact"
                    className="p-6 border rounded-xl hover:shadow-lg transition"
                >
                    <h3 className="inline-flex items-center justify-center px-6 py-3 
                         bg-indigo-600 text-white font-medium rounded-lg 
                         hover:bg-indigo-700 transition duration-300">Contact</h3>
                    <p className="text-gray-300 text-sm">
                        Reach out for collaboration, internships, or queries.
                    </p>
                </a>
            </div>
        </div>
    );
}
