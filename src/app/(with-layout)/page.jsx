
'use client'
import { useUser } from '@/context/Context'
// import { onAuth, signInWithEmailAndPassword } from '@/supabase/utils'
import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Input from '@/components/Input'
import Error from '@/components/Error'
import Video from '@/components/Video'
import { useRouter } from 'next/navigation';
// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/custom-animations/cube-animation.css';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import Navbar from '@/components/Navbar'
import Slider from "react-slick";
import { usePathname } from 'next/navigation'
import Cart from '@/components/Cart'

export default function Home() {
  const { user, userDB, setUserProfile, setUserCart, setUserProduct, setRecetaDB, setUserDistributorPDB, setUserData, filter, setFilter, nav, setNav, modal, setModal, cart } = useUser()
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const pathname = usePathname()

  const router = useRouter()

  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1
  // };

  const signInHandler = (e) => {
    e.preventDefault()
    router.push('/Home')

  }


  const redirectHandler = (ref) => {
    router.push(ref)
  }

  const handlerFilter = (e) => {
    const data = e.target.value
    setFilter(data)
  }
  const back = () => {
    router.back()
  }
  function openNav(e) {
    e.preventDefault()
    e.stopPropagation()
    setNav(!nav)
  }

  const signOutConfirm = async () => {
    await signOut()
    setUserProfile(null)
    setUserCart({})
    setUserProduct(undefined),
    setRecetaDB(undefined),
    setUserDistributorPDB(undefined)
    setUserData(null)
    setModal('')
   return  router.push('/')
}
  console.log(user)
  console.log(userDB)

  // useEffect(() => {
  //   // createIndexedDB()
  //   introVideo == undefined ? readIndexedDB() : ''
  //   user === undefined && onAuth(setUserProfile)
  //   if (user !== undefined && user !== null) router.replace('/Cliente')
  // }, [user])

  return (




    <div className="w-screen flex flex-col min-h-screen items-end justify-between bg-white pt-[55px]"
    // style={{
    //   backgroundImage: 'url(/bg.svg)',
    //   backgroundPosition: 'center top',
    //   backgroundAttachment: 'fixed',
    //   backgroundRepeat: 'no-repeat',
    //   backgroundSize: 'cover'

    // }}
    >


      {/* <nav className="w-screen fixed top-0 border-b border-gray-200 shadow-sm flex items-center justify-between bg-[#38ABD2]  px-4 py-2 h-[55px] z-30" onClick={() => setNav(false)}>
        
       <img src="/logo-white.svg" className='h-[40px] w-[40px]' alt="" />

        {pathname == '/' && <div className='flex   lg:block'>
          <div className='flex '>
            <button type="button" className="inline-flex items-center py-2 text-[14px] text-white rounded-lg  lg:block" onClick={openNav}>
              <svg className="w-9 h-9 text-white" aria-hidden="true" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="white" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"  ></path></svg>
            </button>
          </div>
        </div>

        }
      

  


      </nav> */}


      <div className='w-screen pb-[80px]'>


        <AutoplaySlider className='relative ' cssModule={{ backgroundColor: 'red' }} play={true} interval={3000} buttons={false} bullets={false}>


          <div className='bg-[#ffffffc5] h-full w-full text-black p-5'>
            <p>Con TRUEK APP obten prestamos agiles sin mucha burocracia.</p>
            <img src="/prestar.png" alt="" />
          </div>
          <div className='bg-white h-full w-full text-black p-5'>
            <p>Con TRUEK APP obten prestamos para semanas o meses.</p>
            <img src="/prestar.png" alt="" />
          </div>
          <div className='bg-white h-full w-full text-black p-5'>
            <p>Con TRUEK APP conviertete en un inversor y gana hasta un 20% anual en tus inversiones.</p>
            <img src="/invertir.png" alt="" />
          </div>
          <div className='bg-white h-full w-full text-black p-5'>
            <p>Con TRUEK APP puedes invertir y ganar intereses en 3 meses.</p>
            <img src="/invertir.png" alt="" />
          </div>

        </AutoplaySlider>


      </div>
      <div className='w-full grid grid-cols-2 gap-5 p-5'>
        <Button type="submit" theme="Primary">Prestamos</Button>
        <Button type="submit" theme="Success">Inversiones</Button>
      </div>




      {/* <form className={`fixed bottom-[35px] space-y-3 lg:space-y-3 w-[100%] rounded-[30px]  h-auto py-8 lg:p-10 p-5`} onSubmit={signInHandler} >
        <h5 className="text-[24px] text-center text-white">Iniciar Sesión</h5>
        <div>
          <label htmlFor="email" className="block mb-2 text-[14px] text-left font-medium text-white">Email</label>
          <Input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-[14px] text-left  font-medium text-white">Contraseña</label>
          <Input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
        </div>
        <div className="flex items-start">
          <a href="#" className="ml-auto text-white text-[14px] text-gray-100 hover:underline">Olvidaste tu contraseña?</a>
        </div>
        <div className="text-[14px] text-center font-medium text-white">No tienes una cuenta? <Link href="/SignUp" className="text-gray-100 hover:underline">Registrate</Link ></div>
      </form> */}
    </div>
  )
}