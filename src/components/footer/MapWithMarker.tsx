import React, { useCallback } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";

interface MapWithMarkerProps {
    lat: number;
    lng: number;
}

const MapWithMarker: React.FC<MapWithMarkerProps> = ({ lat, lng }) => {
    const mapContainerStyle = {
        width: "100%",
        height: "100%", // Ajusta la altura según tus necesidades
        borderRadius: "12px",
        position: "relative" as "relative", // Necesario para posicionar el spinner
    };

    const center = {
        lat,
        lng,
    };

    const { isLoaded } = useJsApiLoader({
        id: "google-map-script",
        googleMapsApiKey: "AIzaSyATXvNlti-DQ6cQ8SPDnjFnsq16i3o8t4o", // Reemplaza con tu API Key de Google Maps
    });

    const onLoad = useCallback(() => {
        // No es necesario manejar map o bounds en esta función
    }, []);

    const onUnmount = useCallback(() => {
        // Al eliminar el mapa, no es necesario realizar ninguna acción adicional
    }, []);

    const handleMarkerClick = () => {
        window.open(
            "https://www.google.com/maps/dir//CANIRAC+Mariano+Abasolo,+esq.+Nayarit.+Plaza+Abasolo,+Segundo+Piso,+Local+6+Pueblo+Nuevo+23060+La+Paz,+B.C.S./@24.1467744,-110.329928,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86afd36a3ba968cd:0x5a977a06e9622585!2m2!1d-110.329928!2d24.1467744?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D",
            "_blank"
        );
    };

    return isLoaded ? (
        <div className="bg-accent-dark dark:bg-background-dark rounded-custom w-full h-full">
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={16} // Establecer el zoom de manera explícita
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={{
                    streetViewControl: false,
                    mapTypeControl: false,
                    zoomControl: true, // Control de zoom activado
                }}
            >
                <MarkerF position={center} onClick={handleMarkerClick} />
            </GoogleMap>
        </div>
    ) : (
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Placeholder o spinner */}
            <div className="loader">Cargando mapa...</div>
        </div>
    );
};

export default MapWithMarker;
