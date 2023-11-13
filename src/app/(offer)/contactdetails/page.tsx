import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

const ContactDetails = () => {
    const Details = ({ trCol, brCol, tlCol, blCol, oneCol,seperator }: { trCol?: string; brCol?: string; tlCol: string; blCol: string; oneCol?: boolean; seperator?: boolean; }) => {
        return (
            <>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <span className="text-base font-semibold">{tlCol}</span>
                        <span className="text-base text-gray">{blCol}</span>
                    </div>
                    {oneCol && <div className="flex flex-col">
                        <span className="text-base font-semibold">{trCol}</span>
                        <span className="text-base text-gray">{brCol}</span>
                    </div>}
                </div>
                {seperator && <Separator/>}
            </>
        );
    }
    return (
        <div className="flex">
            <div className="w-1/2 flex flex-col gap-4">
                <h1 className="text-2xl font-bold">Your Details</h1>
                <Card>
                    <CardContent className="flex flex-col gap-2 pt-6">
                        <Details tlCol="First Name" blCol="Cameron" trCol="Last Name" brCol="Williamson" seperator/>
                        <Details tlCol="Email Address" blCol="cameron@gmail.com" trCol="Phone Number" brCol="(406) 555-0120" seperator/>
                        <Details tlCol="CUPS" blCol="05" oneCol={true} seperator/>
                        <Details tlCol="Address" blCol="2972 Westheimer Rd. Santa Ana, Illinois 85486 " oneCol={true} seperator/>
                        <Details tlCol="Postcode" blCol="984 493" trCol="City" brCol="New York, USK"/>
                    </CardContent>
                </Card>
                <div className="flex items-center space-x-2">
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                        By ticking, you are confirming that you have read, understood
                        and agree <span className="text-primary">NEOS</span> <span className="text-[#2F80ED] underline">terms and conditions.</span>
                    </label>
                </div>
            </div>
            <div className="w-1/2 flex flex-col gap-1 items-center">
                <div className="flex justify-center items-center">
                    <div className="relative h-[350px] aspect-[430/490]">
                        <Image src={`/images/image-11.png`} alt="Solar Panel" fill/>
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-center">
                        <h1 className="text-2xl font-bold">€3,600</h1>
                        <div className="flex items-center space-x-2">
                            <Checkbox id="agreement" />
                            <label
                                htmlFor="agreement"
                                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                                Commercialisation Agreement
                            </label>
                        </div>
                    </div>
                    <Button asChild>
                        <Link href={'/paymentgateway'}>
                            GENERATE CONTACT
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
 
export default ContactDetails;