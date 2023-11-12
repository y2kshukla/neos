import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-background py-3 fixed bottom-0 left-0 flex justify-center gap-8 w-full">
            <div className="w-full flex justify-end font-medium text-gray">Licensed by</div>
            <div className="flex gap-4 w-full">
                <span className="relative h-full aspect-[55/30]">
                    <Image src={'/images/cnmc.png'} alt="cnmc" fill/>
                </span>
                <span className="relative h-full aspect-[62/30]">
                    <Image src={'/images/omie-removebg-preview.png'} alt="cnmc" fill/>
                </span>
                <span className="relative h-full aspect-[136/17]">
                    <Image src={'/images/ree-removebg-preview.png'} alt="cnmc" fill/>
                </span>
            </div>
        </footer>
    );
}
 
export default Footer;