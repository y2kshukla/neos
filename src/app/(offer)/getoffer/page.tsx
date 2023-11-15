import Text from '@/components/title/paragraph';
import H2 from '@/components/typography/h2';
import H3 from '@/components/typography/h3';
import P from '@/components/typography/p';
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
            <Card className={`h-full flex flex-col justify-between ${isPremium && 'bg-[#E7F5FA]'}`}>
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
                            <H3>
                            {isPremium
                                ? 'Personalised Offer'
                                : 'Standard Offer'}
                            </H3> 
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className='my-8 flex flex-col gap-8'>
                    <CardDescription className='text-center text-base font-medium'>
                        <P>
                            You will not need anything else to get the offer
                        </P>
                    </CardDescription>
                    <ul className='flex flex-col items-center gap-4'>
                        <li><P>Instant Calculation</P></li>
                        <li><P>Answer 4 Questions</P></li>
                        <li><P>{isPremium ? '100' : '85'}% Accurate</P></li>
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
        <div className='flex gap-8 h-full max-h-[470px]'>
            <CardS />
            <CardS isPremium />
        </div>
    );
};

export default GetOffer;
