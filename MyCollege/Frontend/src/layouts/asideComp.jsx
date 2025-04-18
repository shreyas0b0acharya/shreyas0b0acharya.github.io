import Photo from "../photos/Photo.jpg";

export const Aside = () => {
    return (
        <aside className="bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 border-l-2 border-gray-300 dark:border-gray-700 w-[25vw] max-w-sm min-h-screen hidden sm:block ml-auto">
            <div className="p-6">
                <div className="flex flex-col items-center text-center">
                    <img
                        src={Photo}
                        alt="Shreyu Acharya"
                        className="w-24 h-auto rounded-2xl object-cover border-4 border-themeColor shadow-xl mb-4 hover:scale-105 transition-all duration-300"
                    />
                    <div className="p-4 space-y-2 text-gray-800 dark:text-gray-200">
                        <h1 className="text-lg font-semibold tracking-tight">Shreyas B Acharya</h1>
                        <h2 className="text-xs">USN: <span className="font-medium text-gray-700 dark:text-gray-300">4SM23CS088</span></h2>
                        <h2 className="text-xs">College: <span className="font-medium text-gray-700 dark:text-gray-300">SJMIT, Chitradurga</span></h2>
                        <h2 className="text-xs">Branch: <span className="font-medium text-gray-700 dark:text-gray-300">CSE</span></h2>
                        <h2 className="text-xs">Year: <span className="font-medium text-gray-700 dark:text-gray-300">2nd</span></h2>
                        <h2 className="text-xs">Semester: <span className="font-medium text-gray-700 dark:text-gray-300">4</span></h2>
                        <h2 className="text-xs">Section: <span className="font-medium text-gray-700 dark:text-gray-300">B</span></h2>
                        <h2 className="text-xs">
                            Email:{" "}
                            <a
                                href="mailto:shreyasb19386@gmail.com"
                                className="text-blue-600 dark:text-blue-400 underline underline-offset-4 hover:text-blue-800 dark:hover:text-blue-300 transition-all duration-300"
                            >
                                shreyasb19386@gmail.com
                            </a>
                        </h2>
                    </div>
                </div>
            </div>
        </aside>
    );
};
