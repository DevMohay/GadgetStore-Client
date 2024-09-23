import React from 'react'
import apple from '../../assets/brandlogo/apple.jpg'
import samsung from '../../assets/brandlogo/samsung.jpg'
import xiaomi from '../../assets/brandlogo/xiaomi.jpg'
import realme from '../../assets/brandlogo/realme.jpg'
import vivo from '../../assets/brandlogo/vivo.jpg'
import oppo from '../../assets/brandlogo/oppo.jpg'
import tecno from '../../assets/brandlogo/tecno.jpg'
import infinix from '../../assets/brandlogo/infinix.jpg'

function Brands() {
  return (
    <>
    <section className='mainbg px-10 '>
      

      <div className='flex gap-4 h-8  w-full justify-center'>
        <img src={apple} alt="" className='rounded-sm'/>
        <img src={samsung} alt="" className='rounded-sm'/>
        <img src={xiaomi} alt="" className='rounded-sm'/>
        <img src={realme} alt="" className='rounded-sm'/>
        <img src={vivo} alt="" className='rounded-sm'/>
        <img src={oppo} alt="" className='rounded-sm'/>
        <img src={tecno} alt="" className='rounded-sm'/>
        <img src={infinix} alt="" className='rounded-sm'/>
      </div>


    </section>
    </>
  )
}

export default Brands