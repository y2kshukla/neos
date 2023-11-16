import AppShell from '@/components/appshell';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Text from '@/components/title/paragraph';
import Title from '@/components/title/title';
import H1 from '@/components/typography/h1';
import P from '@/components/typography/p';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <AppShell className='flex h-screen items-center justify-center' footer removeCover>
            <div className='flex -mt-6 xl:-mt-12'>
                <div className='relative z-10 -mr-16 h-[500px] w-[300px]'>
                    <Image src={'/images/iPhone.svg'} alt='Iphone' fill />
                </div>
                <div className='flex flex-col gap-3 self-end rounded-xl bg-[#01092299] px-16 py-32 text-secondary-foreground'>
                    <H1>
                        Welcome to the Future
                    </H1>
                    <P>
                        Discover Virtual Solar. No installation. Cheap energy.<br/>
                        Instant connection.{' '}
                    </P>
                    <div className='flex gap-3'>
                        <Button
                            asChild
                            variant={`outline`}
                            className='text-black'
                        >
                            <Link href={`/description`}>LEARN MORE</Link>
                        </Button>
                        <Button asChild className='self-start border border-secondary !bg-transparent !text-secondary'>
                            <Link href={`/getoffer`}>
                                GET QUOTE
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}
