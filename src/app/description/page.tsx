import AppShell from "@/components/appshell";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Description = () => {
    const listArray = [
        `80% reduction on electricity bill`,
        `35% cheaper than rooftop solar`,
        `Instant connection`,
        `No need for rooftop`,
        `25 years useful life`,
        `100% renewable`,
    ];
    return (
        <AppShell className="p-20">
            <div className="flex gap-8 rounded-xl bg-background overflow-hidden w-full h-full p-10">
                <div className="flex flex-col gap-4 w-1/2">
                    <div className="flex flex-col gap-2">
                        <h1 className="font-bold text-3xl">What is Virtual Solar?</h1>
                        <p className="text-base">Buy panels inside of solar parks. Receive electricity through the grid system.</p>
                    </div>
                    <ul className="text-base flex flex-col gap-3 text-gray">
                        {listArray.map((item: string, index: number) => (
                            <div key={index}>👉 {item}</div>
                        ))}
                    </ul>
                    <Button asChild>
                        <Link href={'/getoffer'}>CALCULATE YOUR SAVINGS</Link>
                    </Button>
                </div>
                <div className="relative w-1/2 aspect-square">
                    <Image fill src={'/images/image-11.png'} alt="Solar Panel"/>
                </div>
            </div>
        </AppShell>
    );
}
 
export default Description;