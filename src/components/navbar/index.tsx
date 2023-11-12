import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="py-4 px-12 fixed top-0 left-0 flex justify-between w-full">
            <div></div>
            <Link href={'/'} className="font-bold text-secondary-foreground text-2xl">NEOS</Link>
            <div className="font-bold text-secondary-foreground text-lg">FAQs</div>
        </nav>
    );
}
 
export default Navbar;