import AppShell from '@/components/appshell';
import Text from '@/components/title/paragraph';
import SubTitle from '@/components/title/subtitle';
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
            <div className='flex h-full w-full items-center justify-center gap-8 overflow-hidden rounded-xl bg-background p-[5%]'>
                <div className='flex w-full gap-8 max-w-3xl'>
                    <div className='flex w-1/2 flex-col gap-4'>
                        <div className='flex flex-col gap-2'>
                            <SubTitle>
                                What is Virtual Solar?
                            </SubTitle>
                            <Text className='text-gray'>
                                Buy panels inside of solar parks. Receive
                                electricity through the grid system.
                            </Text>
                        </div>
                        <ul className='flex flex-col gap-3 text-base text-gray'>
                            {listArray.map((item: string, index: number) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <Button asChild className='self-start'>
                            <Link href={'/getoffer'}>CALCULATE YOUR SAVINGS</Link>
                        </Button>
                    </div>
                    <div className='relative aspect-[400/425] w-1/2 max-w-[436px]'>
                        <Image
                            fill
                            src={'/images/image-11.png'}
                            alt='Solar Panel'
                        />
                    </div>
                </div>
            </div>
        </AppShell>
    );
};

export default Description;
