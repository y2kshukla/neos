import Image from "next/image";
import Navbar from "../navbar";

type shellTypes = {
    children: React.ReactNode;
    className?: string;
}

const AppShell = ({children, className}: shellTypes) => {
    return (
        <main className={`flex justify-center items-center w-full max-h-screen bg-center ${className}`}>
            <div className="fixed inset-0 -z-10 w-screen h-full">
                <Image fill src={'/images/image-10.jpg'} alt="Hero Image"/>
            </div>
            <Navbar/>
            {children}
        </main>
    );
}
 
export default AppShell;