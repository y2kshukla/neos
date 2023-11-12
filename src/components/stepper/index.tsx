'use client'
 
import { usePathname } from 'next/navigation'
import { BsCheckCircleFill } from "react-icons/bs";

const Stepper = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
        <ol className="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base">
            <li className={`flex md:w-full items-center ${(pathname == '/getoffer' || pathname == '/standardoffer' || pathname == '/personalizedoffer' || pathname == '/youroffer' || pathname == '/contactdetails' || pathname == '/paymentgateway' || pathname == '/success') && 'text-blue-600 dark:text-blue-500'} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                <span className="flex items-center gap-2 after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <BsCheckCircleFill/>
                    Receive <span className="hidden sm:inline-flex sm:ms-1">Offer</span>
                </span>
            </li>
            <li className={`flex md:w-full items-center ${(pathname == '/contactdetails' || pathname == '/paymentgateway' || pathname == '/success') && 'text-blue-600 dark:text-blue-500'} sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                <span className={`flex items-center gap-2 after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500`}>
                    <BsCheckCircleFill/>
                    Sign <span className="hidden sm:inline-flex sm:ms-1">Contract</span>
                </span>
            </li>
            <li className={`flex md:w-full items-center ${(pathname == '/success') && 'text-blue-600 dark:text-blue-500'} after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 dark:after:border-gray-700`}>
                <span className="flex items-center gap-2 after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-200 dark:after:text-gray-500">
                    <BsCheckCircleFill/>
                    Enjoy <span className="hidden sm:inline-flex sm:ms-1">Solar</span>
                </span>
            </li>
        </ol>
    );
}

export default Stepper;
