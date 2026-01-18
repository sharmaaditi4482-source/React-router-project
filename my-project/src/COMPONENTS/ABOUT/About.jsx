export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Turning ideas into React applications                        </h2>
                        <p className="mt-6 text-gray-800">
                            I’m a frontend developer focused on building clean, responsive, and user-friendly web applications using React and modern JavaScript.

                            I enjoy turning ideas into real products, learning new technologies, and collaborating with others to create meaningful digital experiences.

                        </p>
                        <h2>                            What I do:
                            <br /></h2>
                        <p className="mt-4 text-gray-600">
                            • React & JavaScript Development<br />
                            • Responsive UI with Tailwind CSS  <br />
                            • Clean Code & Reusable Components  <br />
                            • Git & GitHub Workflow  <br />

                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
