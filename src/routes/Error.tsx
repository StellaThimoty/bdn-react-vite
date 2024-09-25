import { useRouteError } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import gif from '/suspense.gif'
import { Suspense, lazy } from 'react'
import MobileHeader from '../components/MobileHeader'
import { Separator } from '@/components/ui/separator'

export default function ErrorPage() {
  const Video = lazy(() => import('../components/Video'))
  const error = useRouteError();
  console.error(error);

  return (
      <div className="max-[723px]:bg-[url('/suspense.gif')] bg-cover">
        <main className='grow bg-backgroundPurple/75 h-[100%] min-h-screen text-white'>
          {window.innerWidth >= 723 ? <Header/> : <MobileHeader/>}
          <div className="p-6">
            <h1 className="text-4xl font-lemonmilk uppercase">ERRO - {error.status} {error.statusText}</h1>
            <Separator className='border-1 min-[723px]:w-[682px]'/>
            <div className='flex justify-center mt-8'>
              <p>Acabou de acontecer um erro</p>
              <p>{error.error.message}</p>
            </div>
          </div>
          <Suspense fallback={<img src={gif}></img>}>
            {window.innerWidth >= 723 ? <Video/> : <img src={gif} id='bgVideo'></img> }
          </Suspense>
        </main>
        <Footer/>
      </div>
  );
}