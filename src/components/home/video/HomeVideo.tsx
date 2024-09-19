import React, { useState, useEffect } from 'react';
import VideoPlayer from './VideoPlayer'; // Asegúrate de ajustar la ruta según tu estructura de archivos
import { useFetchShow } from '../../../hooks/useFetch';
import { useLanguage } from '../../../context/LanguageContext';
import { ScaleLoader } from 'react-spinners';
import useDarkMode from '../../../hooks/useDarkMode';

const HomeVideo: React.FC = () => {
    const { language } = useLanguage();
    const { data, isLoading, error } = useFetchShow('labels', 2, language);
    const [videoUrl, setVideoUrl] = useState<string>('');
    const isDarkMode = useDarkMode();

    useEffect(() => {
        if (data && data.data) {
            setVideoUrl(data.data.text);  // Asume que data.data.text es la URL del video
        }
    }, [data]);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-48">
                {isDarkMode ? <ScaleLoader color="#3C3C41" /> : <ScaleLoader color="#F1F1F3" />}
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-48">
                {isDarkMode ? <ScaleLoader color="#3C3C41" /> : <ScaleLoader color="#F1F1F3" />}
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="absolute inset-0 bg-background-dark z-30 opacity-25 pointer-events-none"></div>
            {videoUrl ? (
                <VideoPlayer
                    src={videoUrl}
                    controls={false}
                    autoPlay={true}
                    loop
                    muted
                />
            ) : (
                <div className="flex items-center justify-center h-48">
                    {isDarkMode ? <ScaleLoader color="#3C3C41" /> : <ScaleLoader color="#F1F1F3" />}
                </div>
            )}
        </div>
    );
};

export default HomeVideo;
