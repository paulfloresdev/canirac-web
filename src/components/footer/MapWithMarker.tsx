import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";

interface MapWithMarkerProps {
    lat: number;
    lng: number;
}

const MapWithMarker: React.FC<MapWithMarkerProps> = ({ lat, lng }) => {
    const mapContainerStyle = {
        width: "100%",
        height: "100%", // Ajusta la altura según tus necesidades
        borderRadius: "12px"
    };

    const center = {
        lat,
        lng,
    };

    const handleMarkerClick = () => {
        // Cambia la URL a la que deseas redirigir
        window.open("https://www.google.com/maps/dir//CANIRAC+Mariano+Abasolo,+esq.+Nayarit.+Plaza+Abasolo,+Segundo+Piso,+Local+6+Pueblo+Nuevo+23060+La+Paz,+B.C.S./@24.1467744,-110.329928,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x86afd36a3ba968cd:0x5a977a06e9622585!2m2!1d-110.329928!2d24.1467744?entry=ttu&g_ep=EgoyMDI0MDkxOC4xIKXMDSoASAFQAw%3D%3D", "_blank");
    };

    return (
        <div className="bg-accent-dark dark:bg-background-dark rounded-custom w-full lg:w-1/3 xl:w-1/3 h-64">
            <LoadScript googleMapsApiKey="AIzaSyATXvNlti-DQ6cQ8SPDnjFnsq16i3o8t4o">
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={16}
                    options={{
                        streetViewControl: false,
                        mapTypeControl: false
                    }}
                >
                    <MarkerF
                        position={center}
                        onClick={handleMarkerClick}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MapWithMarker;
