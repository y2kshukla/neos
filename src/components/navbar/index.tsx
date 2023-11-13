import Link from 'next/link';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { Button } from '../ui/button';

const Navbar = ({ className }: { className?: string }) => {
    const languages = ['EN English', 'ES Spanish', 'PT Portuguese'];
    return (
        <nav
            className={`fixed left-0 top-0 flex w-full justify-between px-[5%] py-4 ${className}`}
        >
            <div className='text-lg font-bold text-secondary-foreground'>
                FAQs
            </div>
            <Link
                href={'/'}
                className='text-2xl font-bold text-secondary-foreground'
            >
                NEOS
            </Link>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={`outline`} className='rounded-sm'>
                        English
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='w-40'>
                    <DropdownMenuLabel>Languages</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {languages.map((data, index) => (
                        <DropdownMenuItem
                            className='cursor-pointer p-2 hover:bg-slate-400'
                            key={index}
                        >
                            {data}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
};

export default Navbar;
