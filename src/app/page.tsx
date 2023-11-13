import AppShell from '@/components/appshell';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <AppShell className='flex h-screen items-center justify-center'>
            <div className='flex'>
                <div className='relative z-10 -mr-16 h-[500px] w-[300px]'>
                    <Image src={'/images/iPhone.svg'} alt='Iphone' fill />
                </div>
                <div className='flex flex-col gap-3 self-end rounded-xl bg-[#01092299] px-16 py-32 text-secondary-foreground'>
                    <h1 className='text-4xl font-bold'>
                        Welcome to the Future
                    </h1>
                    <p>
                        Discover Virtual Solar. No installation. Cheap energy.
                        Instant connection.{' '}
                    </p>
                    <div className='flex gap-3'>
                        <Button
                            asChild
                            variant={`outline`}
                            className='text-black'
                        >
                            <Link href={`/description`}>LEARN MORE</Link>
                        </Button>
                        <Button className='self-start border border-secondary !bg-transparent !text-secondary'>
                            GET QUOTE
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </AppShell>
    );
}
