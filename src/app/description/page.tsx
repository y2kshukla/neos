import AppShell from '@/components/appshell';
import H1 from '@/components/typography/h1';
import H2 from '@/components/typography/h2';
import List from '@/components/typography/list';
import P from '@/components/typography/p';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Description = () => {
    const listArray = [
        `⚡ 80% reduction on electricity bill`,
        `💸 35% cheaper than rooftop solar`,
        `⏱ Instant connection`,
        `🌆 No need for rooftop`,
        `🔄 4.5 years payback`,
        `☀ 25 years useful life`,
        `🌱 100% renewable`,
    ];
    return (
        <AppShell footer>
            {/* <div className='flex h-full w-full items-center justify-center gap-8 overflow-hidden rounded-xl bg-background p-[5%]'> */}
                <div className='flex items-center w-full gap-8 2xl:gap-16 max-xl:max-w-3xl xl:px-6 2xl:px-8'>
                    <div className='flex w-1/2 flex-col gap-4 2xl:gap-8'>
                        <div className='flex flex-col gap-2'>
                            <H2 className='2xl:text-4xl'>
                                What is Virtual Solar?
                            </H2>
                            <P className='text-gray'>
                                Buy panels inside of solar parks. Receive
                                electricity through the grid system.
                            </P>
                        </div>
                        <List className='flex flex-col gap-3 text-gray'>
                            {listArray.map((item: string, index: number) => (
                                <li key={index}>
                                    {item}
                                </li>
                            ))}
                        </List>
                        <Button asChild className='self-start'>
                            <Link href={'/getoffer'}>CALCULATE YOUR SAVINGS</Link>
                        </Button>
                    </div>
                    <div className='relative aspect-[400/400] w-[45vw] max-xl:max-w-[300px] max-xl:max-h-[300px]'>
                        <Image
                            fill
                            src={'/images/image-11.png'}
                            alt='Solar Panel'
                        />
                    </div>
                </div>
            {/* </div> */}
        </AppShell>
    );
};

export default Description;
