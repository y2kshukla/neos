import Image from 'next/image';
import Navbar from '../navbar';

type shellTypes = {
    children: React.ReactNode;
    className?: string;
};

const AppShell = ({ children, className }: shellTypes) => {
    return (
        <main
            className={`flex h-screen w-full items-center justify-center bg-center ${className} px-[5%] pt-20 pb-12`}
        >
            <div className='fixed inset-0 -z-10 h-full w-screen'>
                <Image fill src={'/images/image-10.jpg'} alt='Hero Image' />
            </div>
            <Navbar />
            {children}
        </main>
    );
};

export default AppShell;
