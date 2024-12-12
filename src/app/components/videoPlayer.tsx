'use client';

import Image from 'next/image';
import { useRef, useState } from 'react';
import btnAudion from '../assets/audio.svg';
import mute from '../assets/mute.svg';
import btnPause from '../assets/pause.svg';
import btn from '../assets/playerButton.svg';

const VideoPlayer = () => {
  const videoRef = useRef({
    currentTime: 0,
    duration: 0,
    paused: true,
    ended: false,
    muted: false,
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;

    setProgress(percent);
  };

  const toggleMute = () => {
    videoRef.current.muted = !videoRef.current.muted;
  };

  return (
    <div className="flex flex-col mt-12 w-full rounded-lg overflow-hidden shadow-lg">
      <h2 className="text-2xl font-semibold mb-2 pb-4">Veja nosso ambiente <span className="text-yellow-500 font-semibold">!</span></h2>
      <video
        ref={videoRef}
        className="w-full bg-black"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      >
        <source src="singedmorrendo.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      <div className="relative w-full h-1 bg-gray-600">
        <div
          className="absolute top-0 left-0 h-full bg-yellow-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="bg-zinc-950 border border-zinc-900 shadow-md w-full flex items-center justify-between p-2">
        <button
          className="text-white text-sm px-2 py-1 rounded-md"
          onClick={togglePlayPause}
        >
          {isPlaying ? <Image className='w-7 h-7' src={btnPause} alt="pause" /> : 
            <Image className='w-7 h-7' src={btn} alt="player"/>
          }
        </button>
        <button
          className="text-white text-sm px-2 py-1 rounded-md"
          onClick={toggleMute}
        >
          {videoRef.current.muted ? (
            <Image className='to-white w-6 h-6' src={mute} alt="mute" />
          ) : (
            <Image className='to-white w-6 h-6' src={btnAudion} alt="audio" />
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
