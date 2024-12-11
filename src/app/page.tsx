import Booking from "./components/booking";
import Gallery from "./components/gallery";
import Localization from "./components/localization";
import Services from "./components/services";
import VideoPlayer from "./components/videoPlayer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="width-full py-10 max-w-[1000px]">
        <h2 className="text-sm text-gray-400 font-semibold max-w-xl p-4 rounded-lg border border-zinc-900">Transforme seu visual com <span className="text-blue-500 hover:text-blue-600 font-extrabold">cortes exclusivos </span>e <span className="text-blue-500 hover:text-blue-600 font-extrabold">personalizados </span>. Especialistas em visagismo e realinhamento capilar para destacar seu <span className="text-blue-500 hover:text-blue-600 font-extrabold">estilo único</span>!</h2>
        <VideoPlayer />
        <Localization />
        <Gallery />
        <Services />
        <Booking />
      </div>
    </main>
  );
}
