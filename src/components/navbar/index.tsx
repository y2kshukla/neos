import Link from "next/link";

const Navbar = ({ className }: { className?: string; }) => {
    return (
        <nav className={`py-4 px-12 fixed top-0 left-0 flex justify-between w-full ${className}`}>
            <div></div>
            <Link href={'/'} className="font-bold text-secondary-foreground text-2xl">NEOS</Link>
            <div className="font-bold text-secondary-foreground text-lg">FAQs</div>
        </nav>
    );
}
 
export default Navbar;