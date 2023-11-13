import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BiSolidFilePdf } from 'react-icons/bi';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const PaymentGateWay = () => {
    return (
        <div className='flex items-center'>
            <div className='flex w-1/2 flex-col gap-8'>
                <div className='flex flex-col gap-2'>
                    <span className='text-5xl text-[#27AE60]'>
                        <BsCheckCircleFill />
                    </span>
                    <h1 className='text-2xl font-bold'>Success!</h1>
                    <div className='text-sm text-gray'>
                        You have received an email to xxx@gmail.com with the
                        steps to sign the contract. Come back here once
                        you&apos;ve signed it. You can also view the contract
                        here.
                    </div>
                </div>
                <div className='flex justify-between rounded-sm border p-3'>
                    <div className='flex items-center gap-2'>
                        <span className='text-2xl text-red-600'>
                            <BiSolidFilePdf />
                        </span>
                        <span className='text-sm font-medium'>
                            Solardetails.pdf
                        </span>
                    </div>
                    <Button asChild>
                        <Link href={'/success'}>DOWNLOAD</Link>
                    </Button>
                </div>
            </div>
            <div className='flex w-1/2 flex-col items-center gap-4'>
                <div className='flex items-center justify-center'>
                    <div className='relative aspect-[430/490] h-[350px]'>
                        <Image
                            src={`/images/image-11.png`}
                            alt='Solar Panel'
                            fill
                        />
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='text-2xl font-bold'>Price to Pay: €3,600</h1>
                    <span>With Commercialisation Agreement</span>
                </div>
            </div>
        </div>
    );
};

export default PaymentGateWay;
