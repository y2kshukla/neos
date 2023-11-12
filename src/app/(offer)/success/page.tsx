import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { BiSolidFilePdf } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";

const Success = () => {
    return (
        <div className="flex items-center gap-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <span className="text-[#27AE60] text-5xl">
                        <BsCheckCircleFill/>
                    </span>
                    <h1 className="text-2xl font-bold">Success!</h1>
                    <div className="text-sm text-gray">
                        You have received an email to xxx@gmail.com with the steps to sign the contract.
                        Come back here once you&apos;ve signed it. You can also view the contract here.
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
                    <Button>DOWNLOAD</Button>
                </div>
            </div>
            <div className="min-w-[425px] flex flex-col gap-4 items-center">
                <h1 className="text-2xl font-bold">€3,600</h1>
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl">Update payment method</CardTitle>
                        <CardDescription>Update your card details.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="flex gap-2">
                            <div className="w-2/3">
                                <Label htmlFor="Name_on_card">Name on card</Label>
                                <Input type="text" id="Name_on_card" placeholder="Olivia Rhye" />
                            </div>
                            <div>
                                <Label htmlFor="Expiry">Expiry</Label>
                                <Input type="text" id="Expiry" placeholder="06 / 2024" />
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <div className="w-2/3">
                                <Label htmlFor="Card_number">Card number</Label>
                                <Input type="text" id="Card_number" placeholder="1234 1234 1234 1234" />
                            </div>
                            <div>
                                <Label htmlFor="CVV">CVV</Label>
                                <Input type="text" id="CVV" placeholder="•••" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Button asChild>
                    <Link href={'/'}>
                        PAY NOW
                    </Link>
                </Button>
            </div>
        </div>
    );
}
 
export default Success;