import Navbar from "../navbar";

type shellTypes = {
    children: React.ReactNode;
    className?: string;
}

const AppShell = ({children, className}: shellTypes) => {
    return (
        <main className={`flex justify-center items-center w-full min-h-screen bg-hero-pattern bg-center ${className}`}>
            <Navbar/>
            {children}
        </main>
    );
}
 
export default AppShell;