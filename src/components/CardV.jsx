'use client';

import Button from '@/components/Button'
import { useUser } from '@/context/Context.js'
import { useRouter } from 'next/navigation';

export default function Card({ i }) {

    const { user, userDB, distributorPDB, setUserDistributorPDB, setUserItem, item, setUserData, setUserSuccess, cart, setUserCart, modal, setModal } = useUser()
    const router = useRouter()



    // const addCart = (e) => {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     user && user.rol !== 'Cliente' && (userDB == null || userDB == undefined)
    //         ? setModal('Verifica')
    //         : setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: 1 } })

    // }

    // const addPlussCart = (e) => {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: cart[i.uuid].cantidad + 1 } })
    // }
    // const addLessCart = (e) => {
    //     e.preventDefault()
    //     e.stopPropagation()
    //     const obj = { ...cart }
    //     delete obj[i.uuid]
    //     console.log(obj)

    //     cart[i.uuid].cantidad - 1 == 0
    //         ? setUserCart(obj)
    //         : setUserCart({ ...cart, [i.uuid]: { ...i, cantidad: cart[i.uuid].cantidad - 1 } })
    // }
    console.log(item)
    return (
        <div class="relative w-full flex flex-col justify-center bg-white min-h-[180px] max-w-[500px] rounded-[15px] border border-gray-200 rounded-[20px] shadow mt-5 py-4" >
            
            <div class="relative h-[150px] w-full rounded-t text-center" style={{ backgroundImage: `url(${i.url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            </div>
            <div class=" p-4  flex flex-col justify-between leading-normal">
                <div class="">
                    <div class=" font-bold text-[16px] mb-2 text-gray-950">
                        {i['nombre']}
                    </div>
                </div>
                <p class="text-gray-700 text-base py-[10px]">{i.info}</p>
                <div class="">
                    <p class="text-gray-700 text-[14px]">{i['descripcion']}</p>
                </div>
            </div>
            <div className='w-full flex justify-between  items-center p-2'>
                <div class="flex items-baseline text-gray-900">
                    <span class="text-[12px]  text-red-600 font-extrabold tracking-tight"> SUS</span>
                    <span class="text-[18px]  text-red-600 font-extrabold tracking-tight">{i.costo}</span>
                    {/* <span class="text-[14px] text-gray-600 font-semibold">Bs</span> */}
                </div>
                <div className='flex justify-between align-center'>
                <Button theme='MiniPrimaryComprar' >Comprar</Button>
            </div>
            </div>
            
        </div>
    )
}
