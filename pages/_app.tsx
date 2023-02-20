import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { BASE_URL } from '../Constants';


const MyApp = ({ Component, pageProps, data}: AppProps | any) => {
  const [isSSR, setisSSR] = useState(true)

  useEffect(() => {
    setisSSR(false)
  }, [])

  console.log(data)

  if(isSSR) return null;

  return (
    <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API}`}>
      <div className='xl:w-[1200px] m-auto overflow-hidden h-[100vh]'>
        <Navbar/>
        <div className='flex gap-6 md:gap-20'>
          <div className='h-[92vh] overflow-hidden xl:hover:overflow-auto'>
            <Sidebar/>
          </div>
          <div className='mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1'>
            <Component {...pageProps} />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  )
}

export default MyApp

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${BASE_URL}/api/users`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}