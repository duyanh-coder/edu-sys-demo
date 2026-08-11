import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

const schools = [
    {
        id: 1,
        name: "Trường Tiểu học Đinh Bộ Lĩnh",
        type: "Tiểu học",
        lat: 10.0342,
        lng: 105.7836,
    },
    {
        id: 2,
        name: "Trường THCS An Bình",
        type: "THCS",
        lat: 10.0258,
        lng: 105.7615,
    },
    {
        id: 3,
        name: "Trường THPT Châu Văn Liêm",
        type: "THPT",
        lat: 10.0308,
        lng: 105.7848,
    },
    {
        id: 4,
        name: "Trường Mầm non Ninh Kiều",
        type: "Mầm non",
        lat: 10.0365,
        lng: 105.7782,
    },
];

const createIcon = (color: string) =>
    L.divIcon({
        className: "school-marker",
        html: `
            <div
                style="
                    width: 18px;
                    height: 18px;
                    border-radius: 50%;
                    background: ${color};
                    border: 3px solid white;
                    box-shadow: 0 2px 8px rgba(0,0,0,.3);
                "
            ></div>
        `,
        iconSize: [18, 18],
        iconAnchor: [9, 9],
    });

const getIcon = (type: string) => {
    switch (type) {
        case "Mầm non":
            return createIcon("#52C41A");

        case "Tiểu học":
            return createIcon("#1677FF");

        case "THCS":
            return createIcon("#FA8C16");

        case "THPT":
            return createIcon("#722ED1");

        default:
            return createIcon("#1677FF");
    }
};

export default function NinhKieuMap() {
    return (
        <MapContainer
            center={[10.0325, 105.783]}
            zoom={13}
            scrollWheelZoom
            style={{
                width: "100%",
                height: "420px",
                borderRadius: "12px",
            }}
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {schools.map((school) => (
                <Marker
                    key={school.id}
                    position={[school.lat, school.lng]}
                    icon={getIcon(school.type)}
                >
                    <Popup>
                        <strong>{school.name}</strong>

                        <br />

                        <span>{school.type}</span>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}