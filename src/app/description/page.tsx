import AppShell from '@/components/appshell';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Description = () => {
    const listArray = [
        `80% reduction on electricity bill`,
        `35% cheaper than rooftop solar`,
        `Instant connection`,
        `No need for rooftop`,
        `25 years useful life`,
        `100% renewable`,
    ];
    return (
        <AppShell>
            <div className='flex h-full w-full items-center justify-between gap-8 overflow-hidden rounded-xl bg-background p-10'>
                <div className='flex w-1/2 flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold'>
                            What is Virtual Solar?
                        </h1>
                        <p className='text-base'>
                            Buy panels inside of solar parks. Receive
                            electricity through the grid system.
                        </p>
                    </div>
                    <ul className='flex flex-col gap-3 text-base text-gray'>
                        {listArray.map((item: string, index: number) => (
                            <div key={index}>👉 {item}</div>
                        ))}
                    </ul>
                    <Button asChild className='self-start'>
                        <Link href={'/getoffer'}>CALCULATE YOUR SAVINGS</Link>
                    </Button>
                </div>
                <div className='relative aspect-[436/490] w-1/2 max-w-[436px]'>
                    <Image
                        fill
                        src={'/images/image-11.png'}
                        alt='Solar Panel'
                    />
                </div>
            </div>
        </AppShell>
    );
};

export default Description;
