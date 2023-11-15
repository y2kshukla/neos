import Image from 'next/image';
import Navbar from '../navbar';
import Footer from '../footer';

type shellTypes = {
    children: React.ReactNode;
    className?: string;
    footer?: boolean;
};

const AppShell = ({ children, className, footer }: shellTypes) => {
    return (
        <main
            className={`flex h-screen w-full items-center justify-center bg-center ${className} px-[5%] pt-16 pb-12 2xl:pt-20 2xl:pb-20`}
        >
            <div className='fixed inset-0 -z-10 h-full w-screen'>
                <Image fill src={'/images/image-10.jpg'} alt='Hero Image' />
            </div>
            <Navbar />
            {children}
            {footer && <Footer />}
        </main>
    );
};

export default AppShell;
