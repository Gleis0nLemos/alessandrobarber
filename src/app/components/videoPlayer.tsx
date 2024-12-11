
export default function VideoPlayer() {
    return (
      <div className="mt-12 pt-6 pb-12 px-1 border-t border-zinc-900">
        <h2 className="text-2xl font-semibold mb-2 pb-4">Conheça o ambiente neste vídeo <span className="text-yellow-500 font-semibold">!</span></h2>
        <video controls width="max">
          <source src='singedmorrendo.mp4' type='video/mp4'/>
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }