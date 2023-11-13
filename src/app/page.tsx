import AppShell from '@/components/appshell'
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <AppShell className='flex justify-center items-center h-screen'>
      <div className='flex'>
        <div className='-mr-16 z-10 relative w-[300px] h-[500px]'>
          <Image src={'/images/iPhone.svg'} alt='Iphone' fill/>
        </div>
        <div className='bg-[#01092299] rounded-xl text-secondary-foreground flex flex-col gap-3 self-end px-16 py-32'>
          <h1 className='text-4xl font-bold'>Welcome to the Future</h1>
          <p>Discover Virtual Solar. No installation. Cheap energy. Instant connection. </p>
          <div className='flex gap-3'>
            <Button asChild className='!bg-white !text-foreground self-start'>
              <Link href={`/description`}>LEARN MORE</Link>
            </Button>
            <Button className='!bg-transparent border border-secondary !text-secondary self-start'>GET QUOTE</Button>
          </div>
        </div>
      </div>
      <Footer/>
    </AppShell>
  )
}
