import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="mx-auto max-w-screen-xl p-4">
            <aside className="relative rounded-xl bg-pink-200 sm:mx-16 mx-2 sm:py-16 overflow-hidden">
                <div className="relative z-10 w-full px-4 pb-20 pt-10 sm:py-24 sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
                            Have a Project in Mind?

                            <span className="hidden sm:block text-lg text-slate-900 mt-2">I’m open to collaborations, internships, and new ideas.
                            </span>
                        </h2>

                        <a
                            className="inline-flex text-blue-100 items-center px-6 py-3 font-medium bg-blue-700 rounded-lg hover:opacity-75"
                            href='https://www.linkedin.com/in/aditi-sharma-8021b937b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>

                            &nbsp; My Linkedin
                        </a>
                    </div>
                </div>

                <div className="absolute inset-0 flex items-center px-6">
                    <img className="sm:w-90 w-90" src='https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg' alt="image1" />
                </div>
            </aside>

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-70 w-70" src="https://res.cloudinary.com/dgv74hbnt/image/upload/v1768729293/WhatsApp_Image_2025-11-12_at_2.29.47_PM_ch4abf.jpg" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Hi, I’m Aditi Sharma</h1>
            <p className="mt-2 text-xl text-slate-300 text-center">
                I’m a frontenddeveloper who loves building clean, simple, and useful web applications.
            </p>
        </div>
    );
}
