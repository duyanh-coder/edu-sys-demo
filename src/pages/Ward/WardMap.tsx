import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
} from "react-leaflet";

import L from "leaflet";

import {
    EnvironmentOutlined,
} from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

import {
    ninhKieuDashboard,
} from "@/mock/wardDashboard";

import "leaflet/dist/leaflet.css";

import "./style.scss";

const createSchoolIcon = () =>
    L.divIcon({
        className: "school-map-marker",

        html: `
            <div class="school-map-marker__inner">
                <span></span>
            </div>
        `,

        iconSize: [28, 28],

        iconAnchor: [14, 14],
    });

export default function WardMap() {
    const navigate = useNavigate();

    return (
        <div className="ward-map">

            <MapContainer
                center={[
                    10.0342,
                    105.7836,
                ]}
                zoom={13}
                scrollWheelZoom={false}
                className="ward-map__container"
            >

                <TileLayer
                    attribution="&copy; OpenStreetMap contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {ninhKieuDashboard.schools.map(
                    (school) => (
                        <Marker
                            key={school.id}
                            position={[
                                school.lat,
                                school.lng,
                            ]}
                            icon={
                                createSchoolIcon()
                            }
                        >
                            <Popup>

                                <div className="school-map-popup">

                                    <EnvironmentOutlined />

                                    <strong>
                                        {school.name}
                                    </strong>

                                    <span>
                                        {school.type}
                                    </span>

                                    <button
                                        onClick={() =>
                                            navigate(
                                                `/school/${school.id}`
                                            )
                                        }
                                    >
                                        Xem cơ sở →
                                    </button>

                                </div>

                            </Popup>
                        </Marker>
                    )
                )}

            </MapContainer>

            <div className="ward-map__legend">

                <span>
                    <i />
                    Cơ sở giáo dục
                </span>

            </div>

        </div>
    );
}