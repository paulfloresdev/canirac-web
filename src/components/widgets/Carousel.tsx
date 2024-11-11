import React, { ReactNode, useState, useEffect } from 'react';

interface CarouselProps {
    children: ReactNode[]; // Array de elementos hijo que son las diapositivas
    interval?: number; // Intervalo opcional para el autoplay, en milisegundos
}

const Carousel: React.FC<CarouselProps> = ({ children, interval = 10000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Función para ir a una diapositiva específica
    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Autoplay
    useEffect(() => {
        const autoplay = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                // Si llegamos al final de las diapositivas, regresamos al inicio (loop)
                return prevIndex === children.length - 1 ? 0 : prevIndex + 1;
            });
        }, interval);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(autoplay);
    }, [children.length, interval]);

    return (
        <div className="carousel-container relative overflow-hidden w-full max-w-full">
            {/* Slides */}
            <div
                className="carousel-slides flex transition-transform duration-1000"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {children.map((child, index) => (
                    <div key={index} className="carousel-slide flex-shrink-0 w-full h-full">
                        {child}
                    </div>
                ))}
            </div>

            {/* Indicadores (dots) */}
            <div className="carousel-dots absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {children.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-5 h-3 rounded-full ${currentIndex === index ? 'bg-primary' : 'bg-border dark:bg-border-dark'}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
