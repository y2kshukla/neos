import Image from "next/image";

const Footer = ({ className }: { className?: string; }) => {
    return (
        <footer className={`bg-background py-3 fixed items-center bottom-0 left-0 flex justify-center gap-8 w-full ${className}`}>
            <span className="inline-flex font-medium">Licensed&nbsp;by</span>
            <div className="flex gap-2 items-center">
                <Image src={'/images/cnmc.png'} alt="cnmc" className="w-[55px] h-[30px]" width={55} height={30}/>
                <Image src={'/images/omie-removebg-preview.png'} alt="cnmc" className="w-[62px] h-[30px]" width={62} height={30}/>
                <Image src={'/images/ree-removebg-preview.png'} alt="cnmc" className="w-[136px] h-[17px]" width={136} height={17}/>
            </div>
        </footer>
    );
}
 
export default Footer;