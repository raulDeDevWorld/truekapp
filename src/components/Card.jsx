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
        <div class="relative w-full bg-white min-h-[180px] max-w-[500px] rounded-[15px] border border-gray-200 rounded-[20px] shadow mt-5 pb-4" style={{ display: 'grid', gridTemplateColumns: 'auto 150px' }}>
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
            <div class="relative h-[150px] w-[150px] rounded-t text-center" style={{ backgroundImage: `url(${i.url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
            </div>
            <div className='w-full flex justify-between  items-center p-2'>
                <div class="flex items-baseline text-gray-900">
                    <span class="text-[12px]  text-red-600 font-extrabold tracking-tight"> SUS</span>
                    <span class="text-[18px]  text-red-600 font-extrabold tracking-tight">{i.costo}</span>
                    {/* <span class="text-[14px] text-gray-600 font-semibold">Bs</span> */}
                </div>
            </div>
            <div className='flex justify-between align-center'>
                <Button theme='MiniPrimaryComprar' >Comprar</Button>
            </div>
        </div>
    )
}








// <div class="relative w-full min-h-[180px] max-w-[500px] rounded-[15px] border border-gray-200 rounded-[20px] shadow overflow-hidden mt-5" style={{display: 'grid', gridTemplateColumns:'auto 150px'}}>
//             <div class=" p-4  flex flex-col justify-between leading-normal">
//                 <div class="mb-8">
//                     <div class=" font-bold text-[18px] mb-2 text-gray-950">
//                         {nombre1}
//                     </div>
//                     <div class=" font-bold text-[18px] mb-2 text-gray-950">
//                         {nombre2}
//                     </div>
//                     <div class=" font-bold text-[18px] mb-2 text-gray-950">
//                         {nombre3}
//                     </div>
//                     <p class="text-gray-700 text-base">{empresa}</p>
//                 </div>
//                 <div class="mb-8">
//                     <p class="text-gray-700 text-base">{descripcion}</p>
//                 </div>
// <div class="flex items-baseline text-gray-900 dark:text-white">
//     <span class="text-[14px] text-red-600 font-semibold">BOB</span>
//     <span class="text-[18px]  text-red-600 font-extrabold tracking-tight">{costo}</span>
// </div>
//             </div>
//             <div className="absolute bottom-3 right-3" >
//                 <Button theme='Primary'>Añadir</Button>
//             </div>
//             <div class="h-[180px] w-[180px] rounded-t text-center" style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>
//         </div>





{/* <div className="flex items-center justify-between p-5">
                <span className="text-[20px] font-bold text-gray-900 dark:text-white">{nombre}</span>
                <div class="flex items-baseline text-red-500">
                    <span class="text-[14px] font-semibold">BOB</span>
                    <span class="text-[20px] font-extrabold tracking-tight">{costo}</span>
                </div>
            </div>

            <div class="h-[40vh] w-[40vh] rounded-t text-center " style={{ backgroundImage: `url(${url})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}></div>

            <div className='grid grid-cols-2 gap-2 p-2'>
                <Button theme='MiniPrimary' styled='miniButtonSecondaryGreen' >Ver +</Button>
                <Button theme='MiniSuccess' >Comprar</Button>
            </div>    
            <div className='h-[50px] bg-[#0064FA] text-[16px] text-white flex justify-center items-center'>{empresa}</div> */}













        //     <div class="relative w-full bg-white min-h-[180px] max-w-[500px] rounded-[15px] rounded-[20px] shadow overflow-hidden mt-5">
        //     <img src={url} class="max-h-[40vh] w-[40vh]" alt="" />
        //     <div className="flex items-center justify-between px-5">
        //         <div >
        //             <div class=" font-bold text-[18px] mb-2 text-gray-950">
        //                 {nombre1}
        //             </div>
        //             <div class=" font-bold text-[18px] mb-2 text-gray-600">
        //                 {nombre2}
        //             </div>
        //             <div class=" font-bold text-[18px] mb-2 text-gray-600">
        //                 {nombre3}
        //             </div>
        //             <p class="text-gray-700 text-base">{empresa}</p>
        //             <div class="mb-8">
        //                 <p class="text-gray-700 text-[16px]">{descripcion}</p>
        //             </div>
        //         </div>
        //     </div>
        //     {cart && cart[i.uuid] && cart[i.uuid].cantidad !== undefined && cart[i.uuid].cantidad !== 0 && <p className='text-[16px] text-right px-5'>Cantidad: {cart[i.uuid].cantidad} </p>}
        //     <div className='grid grid-cols-2 gap-2 px-6 py-3'>
        //         <div class=" text-gray-900 dark:text-white">
        //             <span class="text-[20px] text-red-600 font-semibold">BOB</span>
        //             <span class="text-[30px]  text-red-600 font-extrabold tracking-tight">{costo}</span>
        //         </div>
                // {cart && cart[i.uuid] && cart[i.uuid].cantidad !== undefined && cart[i.uuid].cantidad !== 0
                //     ? <div className='flex'>
                //         <Button theme='MiniSecondary' click={() => addPlussCart(i)}>+</Button>
                //         <Button theme='MiniPrimary' click={() => addLessCart(i)}>-</Button>
                //     </div>
                //     : <Button theme='MiniPrimary' click={() => addCart(i)}>Comprar</Button>
                // }
        //     </div>
        // </div>