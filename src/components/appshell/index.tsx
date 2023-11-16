import Image from 'next/image';
import Navbar from '../navbar';
import Footer from '../footer';

type shellTypes = {
    children: React.ReactNode;
    className?: string;
    footer?: boolean;
    removeCover?: boolean;
};

const AppShell = ({ children, className, footer, removeCover }: shellTypes) => {
    return (
        <main
            className={`flex h-screen w-full items-center justify-center bg-center ${className} px-[5%] pt-16 pb-12 2xl:pt-20 2xl:pb-20`}
        >
            <div className='fixed inset-0 -z-10 h-full w-screen'>
                <Image fill src={'/images/image-10.jpg'} alt='Hero Image' />
            </div>
            <Navbar />
            {removeCover ? <>{ children }</> : <div className='w-full max-w-6xl aspect-[16/11] max-h-[80vh] max-md:min-h-[80vh] p-8 bg-white rounded-md flex justify-center items-center'>
                {children}
            </div>}
            {footer && <Footer />}
        </main>
    );
};

export default AppShell;
