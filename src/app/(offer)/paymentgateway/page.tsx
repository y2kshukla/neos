import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import { BiSolidFilePdf } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const PaymentGateWay = () => {
    return (
        <div className="flex items-center">
            <div className="w-1/2 flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-[#27AE60] text-5xl">
                        <BsCheckCircleFill/>
                    </span>
                    <h1 className="text-2xl font-bold">Success!</h1>
                    <div className="text-sm text-gray">
                        You have received an email to xxx@gmail.com with the steps to sign the contract.
                        Come back here once you've signed it. You can also view the contract here.
                    </div>
                </div>
                <div className="rounded-sm p-3 border flex justify-between">
                    <div className="flex gap-2 items-center">
                        <span className="text-2xl text-red-600">
                            <BiSolidFilePdf/>
                        </span>
                        <span className="text-sm font-medium">
                            Solardetails.pdf
                        </span>
                    </div>
                    <Button asChild>
                        <Link href={'/success'}>
                            DOWNLOAD
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="w-1/2 flex flex-col gap-4 items-center">
                <div className="flex justify-center items-center">
                    <div className="relative h-[350px] aspect-[430/490]">
                        <Image src={`/images/image-11.png`} alt="Solar Panel" fill/>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold">Price to Pay: €3,600</h1>
                    <span>With Commercialisation Agreement</span>
                </div>
            </div>
        </div>
    );
}
 
export default PaymentGateWay;