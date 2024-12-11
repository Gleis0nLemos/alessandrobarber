import Loc from '../assets/loc.svg'
import Image from 'next/image'

export default function Localization() {
  return (
    <>
      <div className="pt-6 border-t border-zinc-900 px-1 pb-12">
        <h2 className="text-2xl font-semibold mb-2">Localização</h2>
        <div className="flex items-center gap-2">
          <Image
            src={Loc}
            width={15}
            height={15}
            alt="Logo da empresa"
          />
          <p className='text-sm font-medium text-gray-400'>                
            <a href="https://maps.app.goo.gl/gAqQWCyDXWBD8joo6">R. Baturité, 1845 - Mangueiral, Horizonte - CE, 62880-602</a>
          </p>
        </div>
      </div>
    </>
  )
}