import { ArrowLeftOutlined, EnvironmentOutlined } from "@ant-design/icons";

import { Button, Card, Col, Row, Tag } from "antd";

import { useNavigate } from "react-router-dom";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import "./style.scss";

// const wards = [
//     {
//         id: "an-xuyen",
//         name: "Phường An Xuyên",
//         schools: 25,
//         lat: 10.0342,
//         lng: 105.7836,
//     },
//     {
//         id: "cai-rang",
//         name: "Phường Cái Răng",
//         schools: 18,
//         lat: 10.0062,
//         lng: 105.7708,
//     },
//     {
//         id: "binh-thuy",
//         name: "Phường Bình Thủy",
//         schools: 20,
//         lat: 10.0628,
//         lng: 105.7469,
//     },
//     {
//         id: "o-mon",
//         name: "Phường Ô Môn",
//         schools: 16,
//         lat: 10.1165,
//         lng: 105.6216,
//     },
// ];

const wards = [
  {
    id: "an-xuyen",
    name: "Phường An Xuyên",
    schools: 24,
    lat: 9.2278,
    lng: 105.1964,
  },
  {
    id: "ly-van-lam",
    name: "Phường Lý Văn Lâm",
    schools: 18,
    lat: 9.1558,
    lng: 105.1665,
  },
  {
    id: "tan-thanh",
    name: "Phường Tân Thành",
    schools: 20,
    lat: 9.1805,
    lng: 105.1765,
  },
  {
    id: "hoa-thanh",
    name: "Phường Hòa Thành",
    schools: 16,
    lat: 9.2025,
    lng: 105.1325,
  },
];
const createWardIcon = () =>
  L.divIcon({
    className: "ward-marker",

    html: `
            <div class="ward-marker__inner">
                <span></span>
            </div>
        `,

    iconSize: [28, 28],

    iconAnchor: [14, 14],
  });

export default function GISPage() {
  const navigate = useNavigate();

  return (
    <div className="gis-page">
      <div className="gis-page__back">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
        >
          Quay lại
        </Button>
      </div>

      <div className="gis-page__header">
        <div>
          <div className="page-eyebrow">GIS EDUCATION MAP</div>

          <h1>Bản đồ Cơ sở giáo dục Tỉnh Cà Mau</h1>

          <p>Trực quan hóa mạng lưới cơ sở giáo dục theo địa bàn.</p>
        </div>

        <Tag color="blue" icon={<EnvironmentOutlined />}>
          Cần Thơ
        </Tag>
      </div>

      <Row gutter={[20, 20]}>
        <Col xs={24} xl={18}>
          <Card title="Bản đồ mạng lưới giáo dục" className="panel">
            <MapContainer
              // center={[
              //     10.0342,
              //     105.7836,
              // ]}
            //   center={[9.2278, 105.1964]}
            center={[9.1762, 105.1508]}
              zoom={13}
              scrollWheelZoom
              className="city-map"
            >
              <TileLayer
                // attribution='&copy; OpenStreetMap contributors'
                // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; Cusc"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {wards.map((ward) => (
                <Marker
                  key={ward.id}
                  position={[ward.lat, ward.lng]}
                  icon={createWardIcon()}
                >
                  <Popup>
                    <div className="map-popup">
                      <strong>{ward.name}</strong>

                      <span>{ward.schools} cơ sở giáo dục</span>

                      {ward.id === "an-xuyen" && (
                        <Button
                          type="link"
                          onClick={() => navigate("/ward/an-xuyen")}
                        >
                          Xem Dashboard →
                        </Button>
                      )}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </Card>
        </Col>

        <Col xs={24} xl={6}>
          <Card title="Địa bàn" className="panel">
            <div className="gis-ward-list">
              {wards.map((ward) => (
                <button
                  key={ward.id}
                  onClick={() => {
                    if (ward.id === "an-xuyen") {
                      navigate("/ward/an-xuyen");
                    }
                  }}
                >
                  <EnvironmentOutlined />

                  <div>
                    <strong>{ward.name}</strong>

                    <span>{ward.schools} cơ sở</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
