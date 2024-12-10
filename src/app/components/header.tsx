import Image from 'next/image'
import Logo from '../assets/logo.svg'

export default function Header() {
  return (
    <>
      <header 
        className="flex justify-between max-w-[1000px] mx-auto px-12 py-5 border-b border-gray-800"
        >
        <div className='flex items-center gap-2'>
          <Image
            src= { Logo }
            width={40}
            height={40}
            alt="Logo da empresa"
            />
          <h1 className='font-bold text-gray-300'>Alessandro Barber</h1>
        </div>
        <nav className='flex'>
          <ul className="flex gap-6 items-center text-sm text-gray-400">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Atendimento</a>
            </li>
            <li>
              <a 
                href="#"
                className='text-yellow-500 font-medium'
                >
                  Fale conosco
              </a>
            </li>
          </ul>
        </nav>
        
      </header>
    </>
    
  );
}
