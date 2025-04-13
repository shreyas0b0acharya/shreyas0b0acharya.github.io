import { H2 } from "../components/ui/h2Comp";
// import Photo from "../photos/Photo.jpg";


export const Aside = () => {
    return (
        <aside  className="bg-white dark:bg-black shadow-xl border-l border-l-gray-300 dark:border-l-gray-700 w-[25vw] max-w-sm min-h-screen hidden sm:block ml-auto ">
             <div className="p-6">
                <div className="flex flex-col items-center text-center">
                    <img
                        src="/photos/Photo.jpg"
                        alt="Shreyu Acharya"
                        className="w-32 h-32 rounded-full object-cover border-4 border-themeColor shadow-lg mb-4"
                    />
                    <H2 className="text-xl font-semibold text-gray-800">Shreyas B Acharya</H2>
                    <p className="text-blue-600 text-sm mb-2">Computer Science Engineering Student</p>
                    <p className="text-gray-600 text-sm">
                        🎓 VTU | 🏋️ Calisthenics & Weight Training Enthusiast<br />
                        🧠 Learning Spoken English & Programming<br />
                        👨‍💻 Future Software Engineer
                    </p>
                </div>
            </div>
        </aside>
        
    );
};