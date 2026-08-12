import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

const schools = [
  {
    id: "AX01",
    name: "Trường Mầm non An Xuyên",
    type: "Mầm non",
    lat: 9.1768,
    lng: 105.15,
  },
  {
    id: "AX03",
    name: "Trường Tiểu học Nguyễn Tạo",
    type: "Tiểu học",
    lat: 9.1788,
    lng: 105.1455,
  },
  {
    id: "AX04",
    name: "Trường Tiểu học Võ Thị Sáu",
    type: "Tiểu học",
    lat: 9.1718,
    lng: 105.153,
  },
  {
    id: "AX06",
    name: "Trường THCS Nguyễn Thái Bình",
    type: "THCS",
    lat: 9.1815,
    lng: 105.157,
  },
  {
    id: "AX08",
    name: "Trường THPT Cà Mau",
    type: "THPT",
    lat: 9.178,
    lng: 105.1515,
  }
];

// const schools: [
//   {
//     id: "AX01";
//     name: "Trường Mầm non An Xuyên";
//     type: "Mầm non";
//     lat: 9.1768;
//     lng: 105.15;
//   },
//   {
//     id: "AX03";
//     name: "Trường Tiểu học Nguyễn Tạo";
//     type: "Tiểu học";
//     lat: 9.1788;
//     lng: 105.1455;
//   },
//   {
//     id: "AX04";
//     name: "Trường Tiểu học Võ Thị Sáu";
//     type: "Tiểu học";
//     lat: 9.1718;
//     lng: 105.153;
//   },
//   {
//     id: "AX06";
//     name: "Trường THCS Nguyễn Thái Bình";
//     type: "THCS";
//     lat: 9.1815;
//     lng: 105.157;
//   },
//   {
//     id: "AX08";
//     name: "Trường THPT Cà Mau";
//     type: "THPT";
//     lat: 9.178;
//     lng: 105.1515;
//   },
// ];
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
      // center={[10.0325, 105.783]}
      center={[9.2278, 105.1964]}
      zoom={13}
      scrollWheelZoom
      style={{
        width: "100%",
        height: "420px",
        borderRadius: "12px",
      }}
    >
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
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
