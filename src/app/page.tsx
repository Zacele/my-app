import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex h-[400px]">
      <div className="flex h-full w-1/2 bg-[rgb(247,239,234)]">
  
        <div className='flex h-full w-full justify-center align-middle max-w-[500px] mx-auto'>
          <Image
              alt="Image-placeholer-alt"
              objectFit='contain'
              width={800}
              height={400}
              src="https://plantsarepurple.de/cdn/shop/files/PaP_Homepage_CustomerFeedback.jpg?v=1703264780&width=1000" 
            />
        </div>
  
      </div>
      <div className="flex flex-col h-full w-1/2 p-12 bg-[rgb(247,239,234)] justify-center">
        <h1 className='text-amber-950 text-3xl py-2'>Danke fur euer Vertrauen!</h1>
        <span className='text-amber-950 text-xs py-2'>****** 4,5 von 5 Sterten</span>
        <p className='text-amber-950 text-sm py-2'>Eure Zufferden macht uns stolz und gluckilick und inspiriert uns, unseren Weg mit nacchassafsf, asfiasjfijasifjsf,</p>
        <button className='text-amber-950  p-2 border border-amber-950 mt-4 w-1/2'>Weitere Kundenstimmen</button>
      </div>
    </main>
  );
}
