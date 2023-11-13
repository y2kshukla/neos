import Image from 'next/image';

const Footer = ({ className }: { className?: string }) => {
    return (
        <footer
            className={`fixed bottom-0 left-0 flex w-full items-center justify-between gap-8 bg-background px-12 py-3 ${className}`}
        >
            <div>Copyright@neos.com</div>
            <div className='flex items-center justify-center gap-4'>
                <span className='inline-flex font-medium'>
                    Licensed&nbsp;by
                </span>
                <div className='flex items-center gap-2'>
                    <Image
                        src={'/images/cnmc.png'}
                        alt='cnmc'
                        className='h-[30px] w-[55px]'
                        width={55}
                        height={30}
                    />
                    <Image
                        src={'/images/omie-removebg-preview.png'}
                        alt='cnmc'
                        className='h-[30px] w-[62px]'
                        width={62}
                        height={30}
                    />
                    <Image
                        src={'/images/ree-removebg-preview.png'}
                        alt='cnmc'
                        className='h-[17px] w-[136px]'
                        width={136}
                        height={17}
                    />
                </div>
            </div>
            <div>Privacy Policy</div>
        </footer>
    );
};

export default Footer;
