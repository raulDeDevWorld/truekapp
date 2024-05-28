
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


export default function Home() {
  const { user, introVideo, setIntroVideo, userDB, setUserProfile, setUserSuccess, success, setUserData, postsIMG, setUserPostsIMG } = useUser()

  const router = useRouter()



  const signInHandler = (e) => {
    e.preventDefault()
    router.push('/Home')

  }

  // useEffect(() => {
  //   // createIndexedDB()
  //   introVideo == undefined ? readIndexedDB() : ''
  //   user === undefined && onAuth(setUserProfile)
  //   if (user !== undefined && user !== null) router.replace('/Cliente')
  // }, [user])

  return (
    <div className="w-screen flex min-h-screen items-end justify-between "
      style={{
        backgroundImage: 'url(/bg.svg)',
        backgroundPosition: 'center top',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'

      }}
    >
      <form className={`fixed left-0 bottom-[35px] space-y-3 lg:space-y-3 w-full rounded-[30px]  h-auto py-8 lg:p-10 p-5`} onSubmit={signInHandler} >
        <h5 className="text-[24px] text-center text-white">Registrate</h5>
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
        <Button type="submit" theme="Transparent">Registrate</Button>
        <div className="text-[14px] text-center font-medium text-white">Ya tienes una cuenta? <Link href="/" className="text-gray-100 hover:underline">Inicia Sesión</Link ></div>
        <Button type="submit" theme="Google">Continuar con Google</Button>
      </form>
    </div>
  )
}