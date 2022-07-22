import React from 'react';
import YouTube from 'react-youtube';
import { ImCross } from 'react-icons/im';
type Props = {
  onCloseHandler: () => void;
  ytVideoId: string;
};

const opts = {
  height: '500',
  width: '800',
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
  },
};

interface YoutubeEvent {
  target: {
    pauseVideo: () => void;
  };
}

export default function VideoComponent({ onCloseHandler, ytVideoId }: Props) {
  const onReady = (event: YoutubeEvent) => event.target.pauseVideo();
  return (
    <>
      <div aria-label='Close-Nav-Bar' className='flex justify-end w-full'>
        <button className='duration-300 hover:scale-90 hover:text-sky-700'>
          <ImCross onClick={onCloseHandler} />
        </button>
      </div>
      <div className='flex items-center justify-center w-full h-full'>
        <YouTube
          videoId={ytVideoId ?? '2g811Eo7K8U'}
          opts={opts}
          onReady={onReady}
        />
      </div>
    </>
  );
}
