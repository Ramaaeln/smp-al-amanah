import Background from "../assets/home/BG-SCHOOL.jpg";

export default function HomePage() {
  return (
    <div
      className="
    2xl:h-[624px]
    xl:h-[600px] 
    md:h-[500px] 
    absolute w-full top-10  overflow-hidden"
    >
      <img
        src={Background}
        alt="Latar Belakang Sekolah Al-Amanah"
        className="w-full  
        2xl:h-[924px]
        xl:h-[600px] 
        md:h-[500px]
        object-cover 
        object-[20%_30%] rounded-b-xl"
      />

      <div className="absolute inset-0 flex flex-col justify-center z-10 items-center text-white text-center">
        <h1 className="text-5xl 
        sm:text-yellow-500 
        md:text-red-500 
        xl:text-blue-900 
        2xl:text-black 
        
        font-bold">
          SELAMAT DATANG
        </h1>
        <h1 className="text-5xl font-extrabold mt-2">DI SMP AL-AMANAH</h1>
      </div>
      <div
        className="   
                2xl:h-[924px]
                xl:h-[600px]  
                md:h-[500px] 
                absolute inset-0 flex layer-home opacity-50 rounded-b-xl"
      ></div>
    </div>
  );
}
