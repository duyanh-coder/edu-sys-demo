import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";

import { EnvironmentOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";

// import { ninhKieuDashboard } from "@/mock/wardDashboard";
import { 
    // ninhKieuDashboard,
    anXuyenDashboard 
} from "@/mock/wardDashboard";

import "leaflet/dist/leaflet.css";

import "./style.scss";

// const createSchoolIcon = () =>
//   L.divIcon({
//     className: "school-map-marker",

//     html: `
//             <div class="school-map-marker__inner">
//                 <span></span>
//             </div>
//         `,

//     iconSize: [28, 28],

//     iconAnchor: [14, 14],
//   });

// const createSchoolIcon = (type: string) => {
//     const colors: Record<string, string> = {
//         "Mầm non": "#f59e0b",
//         "Tiểu học": "#1677ff",
//         "THCS": "#16a34a",
//         "THPT": "#7c3aed",
//     };

//     const color = colors[type] ?? "#1677ff";

//     return L.divIcon({
//         className: "school-map-marker",

//         html: `
//             <div
//                 class="school-map-marker__inner"
//                 style="--marker-color: ${color}"
//             >
//                 <span>🏫</span>
//             </div>
//         `,

//         iconSize: [38, 38],

//         iconAnchor: [19, 38],

//         popupAnchor: [0, -36],
//     });
// };

const createSchoolIcon = (type: string) => {
    const colorMap: Record<string, string> = {
        "Mầm non": "#52c41a",
        "Tiểu học": "#1677ff",
        THCS: "#fa8c16",
        THPT: "#722ed1",
        Khác: "#13c2c2",
    };

    const color =
        colorMap[type] ?? "#1677ff";

    return L.divIcon({
        className: "school-map-marker",

        html: `
            <div
                class="school-map-marker__inner"
                style="
                    background: ${color}22;
                    border-color: ${color};
                "
            >
                <span
                    style="
                        background: ${color};
                    "
                ></span>
            </div>
        `,

        iconSize: [28, 28],

        iconAnchor: [14, 14],
    });
};

export default function WardMap() {
  const navigate = useNavigate();

  return (
    <div className="ward-map">
      <MapContainer
        // center={[
        //     10.0342,
        //     105.7836,
        // ]}
        // zoom={13}
        // scrollWheelZoom={false}
        // className="ward-map__container"
        center={[9.2278, 105.1964]}
        zoom={13}
        scrollWheelZoom={false}
        className="ward-map__container"
        // center={[9.1765, 105.15]}
        // zoom={13}
        // scrollWheelZoom={false}
        // className="ward-map__container"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {anXuyenDashboard.schools.map((school) => (
          <Marker
            key={school.id}
            position={[school.lat, school.lng]}
            icon={createSchoolIcon(school.type)}
          >
            <Popup>
              <div className="school-map-popup">
                <EnvironmentOutlined />

                <strong>{school.name}</strong>

                <span>{school.type}</span>

                <button onClick={() => navigate(`/school/${school.id}`)}>
                  Xem cơ sở →
                </button>
              </div>
            </Popup>
          </Marker>
        ))}
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
