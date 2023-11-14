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

const StandardOffer = () => {
    return (
        <Card className='max-w-lg w-full h-full max-h-[500px] flex flex-col justify-between border-none'>
            <CardHeader>
                <CardTitle className='text-center text-3xl'>Standard offer</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col gap-6'>
                <div>
                    <Label htmlFor='Number_of_people'>
                        Number of people living in house
                    </Label>
                    <Input
                        type='text'
                        id='Number_of_people'
                        placeholder='Enter here'
                    />
                </div>
                <div className='flex gap-4'>
                    <div>
                        <Label htmlFor='first_name'>First Name</Label>
                        <Input
                            type='text'
                            id='first_name'
                            placeholder='Enter here'
                        />
                    </div>
                    <div>
                        <Label htmlFor='last_name'>Last Name</Label>
                        <Input
                            type='text'
                            id='last_name'
                            placeholder='Enter here'
                        />
                    </div>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <Label htmlFor='email'>Email Address</Label>
                        <Input
                            type='email'
                            id='email'
                            placeholder='Enter here'
                        />
                    </div>
                    <div>
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

export default StandardOffer;
