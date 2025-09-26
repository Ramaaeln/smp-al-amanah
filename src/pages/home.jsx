import Background from '../assets/home/BG-SCHOOL.jpg'

export default function HomePage() {
  return( 
    <div className="absolute w-full top-0 h-[600px] overflow-hidden"> 
      <img 
        src={Background} 
        alt="Latar Belakang Sekolah Al-Amanah" 
        className="w-full h-[624px] bg-top object-cover rounded-b-xl" 
      />
      
      <div className="absolute inset-0 flex flex-col justify-center z-10 items-center text-white text-center">
         <h1 className="text-5xl font-bold">SELAMAT DATANG</h1>
         <h1 className="text-5xl font-extrabold mt-2">DI SMP AL-AMANAH</h1>
      </div>
      <div className='absolute inset-0 flex bg-green-900 opacity-40 rounded-b-xl'></div>
    </div>
  )
}