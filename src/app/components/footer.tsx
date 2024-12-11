import Image from 'next/image'
import Logo from '../assets/logo.svg'
import Zap from '../assets/zap.svg'
import Insta from '../assets/insta.svg'
export default function Header() {
  return (
    <>
      <footer
        className="bg-zinc-950 pt-10"
      >
        <div className='flex justify-between max-w-[1000px] mx-auto px-1 py-5 border-b border-gray-700 pb-8'>
          <div className='max-w-[400px]'>
            <div className='flex items-center gap-2 pb-3'>
              <Image
                src={Logo}
                width={40}
                height={40}
                alt="Logo da empresa"
              />
              <h1 className='font-bold text-gray-300'>Alessandro Barber</h1>
            </div>
            <p className='text-sm font-medium text-gray-400'>Transforme seu visual com cortes exclusivos e personalizados. Especialistas em visagismo e realinhamento capilar para destacar seu estilo único!</p>
          </div>
          <div className='flex gap-12'>
            <div>
              <p className='text-sm font-semibold text-gray-200 pb-1'>Localização</p>
              <div className='max-w-[200px]'>
                <a href="https://maps.app.goo.gl/gAqQWCyDXWBD8joo6" className='text-sm font-medium text-purple-400'>R. Baturité, 1845 - Mangueiral, Horizonte - CE, 62880-602</a>
              </div>
            </div>
            <div>
              <p className='text-sm font-semibold text-yellow-500 pl-2'>Fale Conosco</p>
              <div className='flex items-center mb-1'>
                <Image
                  src={Zap}
                  width={28}
                  height={28}
                  alt="Icone do WhatsApp"
                  className='mr-1'
                />
                <a href="https://wa.me/85991667081" className='text-sm font-medium text-gray-400 hover:underline underline-offset-4'>WhatsApp</a>
              </div>
              <div className='flex items-center gap-2 ml-2'>
                <Image
                  src={Insta}
                  width={15}
                  height={15}
                  alt="Icone do WhatsApp"
                />
                <a href="https://www.instagram.com/alessandrobarber_/" className='text-sm font-medium text-gray-400 hover:underline underline-offset-4'>Instagram</a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <p className='text-sm font-medium text-gray-700 py-3'>© 2024 Service provider All rights reserved</p>
        </div>
      </footer>
    </>
  );
}
