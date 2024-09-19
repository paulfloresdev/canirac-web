// VideoPlayer.tsx
import React from 'react';

interface VideoPlayerProps {
    src: string;
    controls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, controls = true, autoPlay = false, loop = false, muted = false }) => {
    return (
        <div className="flex justify-center items-center pointer-events-none">
            <video
                src={src}
                controls={controls}
                autoPlay={autoPlay}
                loop={loop}
                muted={muted}
                className="h-auto w-full object-cover pointer-events-auto"
            />
        </div>

    );
};

export default VideoPlayer;
