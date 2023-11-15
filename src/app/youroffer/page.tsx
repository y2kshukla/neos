import AppShell from '@/components/appshell';
import Graph from '@/components/chart';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Stepper from '@/components/stepper';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const YourOffer = () => {
    return (
        <>
            <AppShell className='!min-h-screen !max-h-fit !items-start'>
                <div className='flex flex-col w-full pb-16'>
                    <div className='flex w-full items-center justify-between rounded-t-md bg-[#E7F5FA] px-4 py-6'>
                        <div className='flex gap-4 font-medium'>
                            <span>5 Panels €3,600</span>
                            <span>Average Savings €600/year</span>
                        </div>
                        <Button asChild>
                            <Link href={'/contactdetails'}>Sign Contract</Link>
                        </Button>
                    </div>
                    <div className='flex h-full w-full flex-col items-center  overflow-hidden rounded-xl rounded-t-none bg-background p-10'>
                        <Stepper />
                        <div className='flex flex-col gap-8 max-w-4xl'>
                            <div className='flex w-full items-center justify-between'>
                                <div className='flex w-1/2 flex-col items-center justify-center gap-2'>
                                    <div className='relative aspect-[400/425] w-full max-w-[400px]'>
                                        <Image
                                            src={`/images/image-11.png`}
                                            alt='Solar Panel'
                                            fill
                                        />
                                    </div>
                                    <div className='flex flex-col items-center gap-1'>
                                        <h1 className='text-2xl font-bold'>€3,600</h1>
                                        <p className='text-gray'>
                                            for 25 years of solar power
                                        </p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex flex-col gap-1 '>
                                        <h1 className='text-3xl font-bold'>
                                            Your Offer
                                        </h1>
                                        <p className='text-base font-medium text-gray'>{`5 Panels (Equivalent to 3.2KWp)`}</p>
                                    </div>
                                    <ul className='flex flex-col gap-2 text-base'>
                                        <li>{`• €600 yearly savings (€15,000 total savings)`}</li>
                                        <li>{`• 4.5 years payback`}</li>
                                        <li>{`• 65% of consumption covered by solar`}</li>
                                    </ul>
                                    <Button className='self-start'>
                                        DOWNLOAD OFFER
                                    </Button>
                                </div>
                            </div>
                            <div className='flex items-center gap-8 self-end rounded-3xl border p-4'>
                                <span className='inline-flex font-medium'>
                                    Licensed&nbsp;by
                                </span>
                                <div className='flex w-full items-center gap-2'>
                                    <Image
                                        src={'/images/cnmc.png'}
                                        alt='cnmc'
                                        className='h-[30px] w-[55px]'
                                        width={55}
                                        height={30}
                                    />
                                    <Image
                                        src={'/images/omie-removebg-preview.png'}
                                        alt='cnmc'
                                        className='h-[30px] w-[62px]'
                                        width={62}
                                        height={30}
                                    />
                                    <Image
                                        src={'/images/ree-removebg-preview.png'}
                                        alt='cnmc'
                                        className='h-[17px] w-[136px]'
                                        width={136}
                                        height={17}
                                    />
                                </div>
                            </div>
                            <div className='flex w-full gap-4'>
                                <div className='flex w-1/2 flex-col gap-8 rounded-3xl border px-4 py-8 pl-8'>
                                    <h2 className='text-center text-xl font-bold'>
                                        How It Works?
                                    </h2>
                                    <ul className='flex list-disc flex-col gap-4'>
                                        <li>
                                            Neos becomes your retailer and uses the grid
                                            system to transport the electricity
                                            generated by your solar panels into your
                                            home.
                                        </li>
                                        <li>
                                            During solar production hours, you will pay
                                            €0.00 for the energy you consume.
                                        </li>
                                        <li>
                                            If there is excess production, Neos will
                                            sell 100% of the excess to the electricity
                                            market.
                                        </li>
                                        <li>
                                            Outside of solar production hours you will
                                            pay the market price of electricity, with a
                                            margin of €0.01 per KWh.
                                        </li>
                                        <li>
                                            You will need to pay tolls and costs
                                            associated with using the grid, estimated at
                                            €0.02 per KWh.
                                        </li>
                                        <li>
                                            If you decide you do not want Neos as your
                                            retailer, there is no commitment to stay
                                            with us, and you can choose another retailer
                                            at any point.
                                        </li>
                                        <li>
                                            If you choose another retailer, we will send
                                            you every month the revenues generated by
                                            selling your solar energy into the
                                            electricity market, which is equivalent to
                                            the savings you would obtain if you were
                                            still with Neos.
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex w-1/2 flex-col gap-4'>
                                    <div className='flex flex-col gap-8 rounded-3xl border px-4 py-8 pl-8'>
                                        <h2 className='text-center text-xl font-bold'>
                                            Compare Our Offer
                                        </h2>
                                        <ul className='flex list-disc flex-col gap-4'>
                                            <li>
                                                35% cheaper than rooftop solar panels
                                            </li>
                                            <li>
                                                40% more energy production per panel
                                                compared to rooftop solar panels
                                            </li>
                                            <li>
                                                85% savings compared to traditional
                                                utility providers
                                            </li>
                                            <li>
                                                80% less carbon intensive than
                                                traditional utility providers
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='flex h-full flex-col items-center justify-center gap-5 rounded-3xl border bg-[#E7F5FA] px-4 py-8'>
                                        <div className='text-center text-lg font-semibold'>
                                            Review your proposal with your Solar Expert
                                        </div>
                                        <Avatar className='h-[50px] w-[50px] rounded-full'>
                                            <AvatarImage src='/images/person.png' />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className='flex flex-col items-center justify-center'>
                                            <span className='text-sm font-medium'>
                                                Sebastian Gonzalez
                                            </span>
                                            <span className='text-sm text-gray'>
                                                sebastian@solarmente.se
                                            </span>
                                        </div>
                                        <Button>TALK TO YOUE EXPERT</Button>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full overflow-hidden rounded-3xl border'>
                                <div className='flex items-center justify-between px-4 pt-4'>
                                    <div className='text-xl font-medium'>
                                        Simulation
                                    </div>
                                    <div className='flex gap-4'>
                                        <div className='flex items-center gap-1'>
                                            <span className='h-3 w-6 bg-[#436DC6]'></span>
                                            <span>Product 1</span>
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <span className='h-3 w-6 bg-[#3492AC]'></span>
                                            <span>Product 2</span>
                                        </div>
                                    </div>
                                </div>
                                <Graph />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </AppShell>
        </>
    );
};

export default YourOffer;
