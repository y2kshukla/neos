import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

const Navbar = ({ className }: { className?: string; }) => {
    const languages = ['EN English', 'ES Spanish', 'PT Portuguese'];
    return (
        <nav className={`py-4 px-12 fixed top-0 left-0 flex justify-between w-full ${className}`}>
            <div className="font-bold text-secondary-foreground text-lg">FAQs</div>
            <Link href={'/'} className="font-bold text-secondary-foreground text-2xl">NEOS</Link>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={`outline`} className="rounded-sm">English</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuLabel>Languages</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {languages.map((data, index) => (
                        <DropdownMenuItem className="cursor-pointer p-2 hover:bg-slate-400" key={index}>{data}</DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
}
 
export default Navbar;