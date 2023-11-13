import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

const GetOffer = () => {
    const CardS = ({ isPremium }: { isPremium?: boolean }) => {
        return (
            <Card className={`max-w-xs ${isPremium && 'bg-[#E7F5FA]'}`}>
                <CardHeader className='border-b'>
                    <CardTitle>
                        <div className='flex items-center justify-center gap-2'>
                            {isPremium && (
                                <span className='relative h-7 w-7'>
                                    <Image
                                        src={'/images/premium-quality-1.svg'}
                                        alt='Premium icon'
                                        fill
                                    />
                                </span>
                            )}
                            {isPremium
                                ? 'Personalised Offer'
                                : 'Standard Offer'}
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className='my-8 flex flex-col gap-8'>
                    <CardDescription className='text-center text-base font-medium'>
                        You will not need anything else to get the offer
                    </CardDescription>
                    <ul className='flex flex-col items-center gap-4'>
                        <li>Instant Calculation</li>
                        <li>Answer 4 Questions</li>
                        <li>{isPremium ? '100' : '85'}% Accurate</li>
                    </ul>
                </CardContent>
                <CardFooter className='flex justify-center'>
                    <Button asChild>
                        <Link
                            href={
                                isPremium
                                    ? '/personalizedoffer'
                                    : '/standardoffer'
                            }
                        >
                            GET OFFER
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        );
    };
    return (
        <div className='flex gap-8'>
            <CardS />
            <CardS isPremium />
        </div>
    );
};

export default GetOffer;
