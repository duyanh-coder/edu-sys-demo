import {
    BankOutlined,
    EnvironmentOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

import {
    Card,
    Col,
    Row,
    Statistic,
    Tag,
} from "antd";

import { useNavigate } from "react-router-dom";

import BackButton from "@/components/BackButton";
import CityEducationChart from "./CityEducationChart";

import "./style.scss";

const statistics = [
    {
        title: "Cơ sở giáo dục",
        value: "1.200+",
        icon: <BankOutlined />,
    },
    {
        title: "Cán bộ, giáo viên",
        value: "30.000+",
        icon: <TeamOutlined />,
    },
    {
        title: "Học sinh",
        value: "500.000+",
        icon: <UserOutlined />,
    },
    {
        title: "Địa bàn",
        value: "100+",
        icon: <EnvironmentOutlined />,
    },
];

export default function DashboardPage() {
    const navigate = useNavigate();

    return (
        <div className="city-dashboard">

            {/* Header */}

            <div className="city-dashboard__back">
                <BackButton />
            </div>

            <div className="city-dashboard__header">

                <div>

                    <div className="page-eyebrow">
                        EDUCATION OPERATION CENTER
                    </div>

                    <h1>
                        Giáo dục Tỉnh Cà Mau
                    </h1>

                    <p>
                        Trung tâm điều hành và giám sát
                        hệ thống giáo dục công lập
                    </p>

                </div>

                <Tag
                    color="blue"
                    icon={<EnvironmentOutlined />}
                >
                    Tỉnh Cà Mau
                </Tag>

            </div>

            {/* KPI */}

            <Row
                gutter={[20, 20]}
                className="city-dashboard__kpi"
            >

                {statistics.map((item) => (
                    <Col
                        key={item.title}
                        xs={12}
                        lg={6}
                    >
                        <Card className="city-stat-card">

                            <div className="city-stat-card__icon">
                                {item.icon}
                            </div>

                            <Statistic
                                title={item.title}
                                value={item.value}
                            />

                        </Card>
                    </Col>
                ))}

            </Row>

            {/* Main */}

            <Row gutter={[20, 20]}>

                <Col xs={24} xl={16}>

                    <Card
                        title="Mạng lưới giáo dục"
                        className="panel"
                    >
                        <CityEducationChart />
                    </Card>

                </Col>

                <Col xs={24} xl={8}>

                    <Card
                        title="Truy cập nhanh"
                        className="panel"
                    >

                        <div className="city-quick-links">

                            <button
                                onClick={() =>
                                    navigate("/ward/an-xuyen")
                                }
                            >
                                <EnvironmentOutlined />

                                <div>
                                    <strong>
                                        Phường An Xuyên
                                    </strong>

                                    <span>
                                        Xem Dashboard địa bàn
                                    </span>
                                </div>
                            </button>

                            <button
                                onClick={() =>
                                    navigate("/school")
                                }
                            >
                                <BankOutlined />

                                <div>
                                    <strong>
                                        Cơ sở giáo dục
                                    </strong>

                                    <span>
                                        Danh sách trường học
                                    </span>
                                </div>
                            </button>

                            <button
                                onClick={() =>
                                    navigate("/gis")
                                }
                            >
                                <EnvironmentOutlined />

                                <div>
                                    <strong>
                                        Bản đồ GIS
                                    </strong>

                                    <span>
                                        Khám phá mạng lưới giáo dục
                                    </span>
                                </div>
                            </button>

                        </div>

                    </Card>

                </Col>

            </Row>

        </div>
    );
}