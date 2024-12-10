import Image from 'next/image'
import Logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="flex justify-between max-w-[800px] mx-auto">
      <div>
        <Image
        src= { Logo }
        width={20}
        height={20}
        alt="Picture of the author"
      />
      </div>
      <h1>Alessandro Barber</h1>
      <nav>
        <ul className="flex gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Atendimento</a>
          </li>
          <li>
            <a href="#">Fale conosco</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
