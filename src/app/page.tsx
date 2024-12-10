import VideoPlayer from "./components/videoPlayer";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <div className="width-full py-10">
        <h2 className="text-base font-semibold max-w-2xl pb-8">Transforme seu visual com cortes exclusivos e personalizados. Especialistas em visagismo e realinhamento capilar para destacar seu estilo único!</h2>
        <VideoPlayer />
      </div>
    </main>
  );
}
