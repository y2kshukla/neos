'use client';

import { usePathname } from 'next/navigation';
import { Separator } from '../ui/separator';

const Stepper = () => {
    const pathname = usePathname();

    const Number = ({
        number,
        isActive,
    }: {
        number: number;
        isActive: boolean;
    }) => {
        return (
            <span
                className={`${isActive ? 'bg-primary' : 'bg-[#EAEAED]'} ${
                    isActive ? 'text-white' : 'text-black'
                } flex h-8 w-8 items-center justify-center rounded-full`}
            >
                {number}
            </span>
        );
    };

    return (
        <ol className='text-gray-500 dark:text-gray-400 flex w-full items-center justify-center gap-2 text-center text-sm font-medium sm:text-base'>
            <li
                className={`flex items-center text-gray ${
                    (pathname == '/getoffer' ||
                        pathname == '/standardoffer' ||
                        pathname == '/personalizedoffer' ||
                        pathname == '/youroffer' ||
                        pathname == '/contactdetails' ||
                        pathname == '/paymentgateway' ||
                        pathname == '/success') &&
                    'text-black'
                }`}
            >
                <span className="flex items-center gap-2">
                    <Number
                        number={1}
                        isActive={
                            pathname == '/getoffer' ||
                            pathname == '/standardoffer' ||
                            pathname == '/personalizedoffer' ||
                            pathname == '/youroffer' ||
                            pathname == '/contactdetails' ||
                            pathname == '/paymentgateway' ||
                            pathname == '/success'
                        }
                    />
                    Receive&nbsp;Offer
                </span>
            </li>
            <Separator className='w-28' />
            <li
                className={`flex items-center text-gray ${
                    (pathname == '/contactdetails' ||
                        pathname == '/paymentgateway' ||
                        pathname == '/success') &&
                    'text-black'
                }`}
            >
                <span
                    className={`flex items-center gap-2`}
                >
                    <Number
                        number={2}
                        isActive={
                            pathname == '/contactdetails' ||
                            pathname == '/paymentgateway' ||
                            pathname == '/success'
                        }
                    />
                    Sign&nbsp;Contract
                </span>
            </li>
            <Separator className='w-28' />
            <li
                className={`flex items-center text-gray ${
                    pathname == '/success' && 'text-black'
                }`}
            >
                <span className="flex items-center gap-2">
                    <Number number={3} isActive={pathname == '/success'} />
                    Enjoy&nbsp;Solar
                </span>
            </li>
        </ol>
    );
};

export default Stepper;
