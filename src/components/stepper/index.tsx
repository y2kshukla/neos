'use client'
 
import { usePathname } from 'next/navigation'
import { Separator } from '../ui/separator';

const Stepper = () => {
    const pathname = usePathname();
    console.log(pathname);

    const Number = ({ number, isActive }: { number: number; isActive: boolean; }) => {
        return (
            <span className={`${isActive ? 'bg-primary' : 'bg-[#EAEAED]'} ${isActive ? 'text-white' : 'text-black'} w-8 h-8 flex items-center justify-center rounded-full`}>{number}</span>
        );
    }

    return (
        <ol className="flex items-center justify-center gap-2 w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className={`flex items-center text-gray ${(pathname == '/getoffer' || pathname == '/standardoffer' || pathname == '/personalizedoffer' || pathname == '/youroffer' || pathname == '/contactdetails' || pathname == '/paymentgateway' || pathname == '/success') && 'text-black'}`}>
                <span className="flex items-center gap-2 after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <Number number={1} isActive={pathname == '/getoffer' || pathname == '/standardoffer' || pathname == '/personalizedoffer' || pathname == '/youroffer' || pathname == '/contactdetails' || pathname == '/paymentgateway' || pathname == '/success'}/>
                    Receive&nbsp;Offer
                </span>
            </li>
            <Separator className='w-28'/>
            <li className={`flex items-center text-gray ${(pathname == '/contactdetails' || pathname == '/paymentgateway' || pathname == '/success') && 'text-black'}`}>
                <span className={`flex items-center gap-2 after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`}>
                    <Number number={2} isActive={pathname == '/contactdetails' || pathname == '/paymentgateway' || pathname == '/success'}/>
                    Sign&nbsp;Contract
                </span>
            </li>
            <Separator className='w-28'/>
            <li className={`flex items-center text-gray ${(pathname == '/success') && 'text-black'}`}>
                <span className="flex items-center gap-2 after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <Number number={3} isActive={pathname == '/success'}/>
                    Enjoy&nbsp;Solar
                </span>
            </li>
        </ol>
    );
}

export default Stepper;
