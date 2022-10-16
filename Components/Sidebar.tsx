import React, {useState} from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'
import GoogleLogin from 'react-google-login';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai'
import { ImCancelCircle } from 'react-icons/im'
import Discover from './Discover';
import Footer from './Footer';
import SuggestedAccounts from './SuggestedAccounts';
import useAuthStore from '../Redux/store';
import Image from 'next/image';

const Sidebar = () => {
    const [showBar, setshowBar] = useState(true)

    const { userProfile } = useAuthStore()

    const normalLink = 'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#FE004F]'

    return (
        <div>
            <div 
                className='block xl:hidden m-2 ml-4 mt-3 text-xl cursor-pointer'
                onClick={() => setshowBar((prev) => !prev)}    
            >
                {
                    showBar ? <ImCancelCircle/> : <AiOutlineMenu/>
                }
            </div>

            {
                showBar && (
                    <div className='xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3'>
                        <div className='xl:border-b-2 border-gray-200 xl:pb-4'>
                            <Link href='/'>
                                <div className={normalLink}>
                                    <p className='text-2xl'>
                                        <AiFillHome/>
                                    </p>
                                    <span className='text-xl hidden xl:block capitalize font-bold'>
                                        for you
                                    </span>
                                </div>
                            </Link>
                        </div>
                        {
                            userProfile && (
                                <div className='px-2 py-4 hidden xl:block'>
                                    <h1 className='font-bold capitalize text-2xl'>
                                        Information
                                    </h1>
                                    <h2 className='capitalize'>{userProfile?.userName}</h2>
                                    <div className='mt-4'>
                                        <Image
                                            src={userProfile?.image}
                                            alt="profile"
                                            width={200}
                                            height={200}
                                            className="rounded-full"
                                        />
                                    </div>
                                </div>
                            )
                        }

                        <Discover/>
                        <SuggestedAccounts/>
                        <Footer/>
                    </div>
                )
            }
        </div>
    )
}

export default Sidebar