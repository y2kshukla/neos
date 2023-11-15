import SubTitle from '@/components/title/subtitle';
import H2 from '@/components/typography/h2';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';

const PersonalizedOffer = () => {
    return (
        <Card className='max-w-lg xl:max-w-xl 2xl:max-w-2xl w-full h-full max-h-[450px] xl:max-h-[500px] flex flex-col justify-between border-none'>
            <CardHeader>
                <CardTitle>
                    <H2 className='text-center'>
                        Personalized Offer
                    </H2>
                </CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-4 2xl:gap-6'>
                <div>
                    <Label htmlFor='CUPS'>CUPS</Label>
                    <Input type='text' id='CUPS' placeholder='Enter here' />
                    <span className='text-xs text-[#2D9CDB]'>
                        You can find your CUPS number in any of your electricity
                        bills
                    </span>
                </div>
                <div className='flex gap-4 xl:gap-6 w-full'>
                    <div className='w-1/2'>
                        <Label htmlFor='first_name'>First Name</Label>
                        <Input
                            type='text'
                            id='first_name'
                            placeholder='Enter here'
                        />
                    </div>
                    <div className='w-1/2'>
                        <Label htmlFor='last_name'>Last Name</Label>
                        <Input
                            type='text'
                            id='last_name'
                            placeholder='Enter here'
                        />
                    </div>
                </div>
                <div className='flex gap-4 xl:gap-6 w-full'>
                    <div className='w-1/2'>
                        <Label htmlFor='email'>Email Address</Label>
                        <Input
                            type='email'
                            id='email'
                            placeholder='Enter here'
                        />
                    </div>
                    <div className='w-1/2'>
                        <Label htmlFor='phone'>Phone Number</Label>
                        <Input type='tel' id='phone' placeholder='Enter here' />
                    </div>
                </div>
            </CardContent>
            <CardFooter className='flex justify-center'>
                <Button asChild>
                    <Link href={'/youroffer'}>CALCULATE YOUR SAVINGS</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};

export default PersonalizedOffer;
