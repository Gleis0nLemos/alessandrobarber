
export default function VideoPlayer() {
    return (
      <div className="pt-8">
        <h2 className="text-2xl mb-2">Conheça o ambiente neste vídeo!</h2>
        <video controls width="max">
          <source src='singedmorrendo.mp4' type='video/mp4'/>
          Your browser does not support the video tag.
        </video>
      </div>
    )
  }