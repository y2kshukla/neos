'use client';
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
import { useState, useEffect } from 'react';

const Navbar = ({ className }: { className?: string }) => {
    const languages = ['EN English', 'ES Spanish', 'PT Portuguese'];

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Check if the user has scrolled
            if (window.scrollY > 0) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Add the event listener to the window
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            setVisible(
                prevScrollPos > currentScrollPos || currentScrollPos < 50
            );

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    console.log(visible);

    return (
        <nav
            className={`fixed left-0 top-0 flex w-full justify-between z-20 px-[5%] transition ease-in-out delay-150 py-4 ${
                visible ? '' : '-translate-y-full '
            } ${scrolled && 'bg-white border-b'} ${className}`}
        >
            <Link
                href={'/'}
                className={`w-1/2 flex items-center justify-start text-2xl font-bold text-secondary-foreground ${scrolled && '!text-black'}`}
            >
                NEOS
            </Link>
            <div className='flex w-1/2 items-center justify-end gap-8'>
                <div className={`text-lg font-bold text-secondary-foreground ${scrolled && '!text-gray'}`}>
                    FAQs
                </div>
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
            </div>
        </nav>
    );
};

export default Navbar;
