import {
    BankOutlined,
    EnvironmentOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Statistic, Tag } from "antd";

import { useNavigate } from "react-router-dom";

import "./NinhKieuDashboard.scss";
import "./style.scss";
import "./style-map.scss";

import BackButton from "../../components/BackButton";
import NinhKieuEducationChart from "./NinhKieuEducationChart";
import NinhKieuTeacherChart from "./NinhKieuTeacherChart";
import NinhKieuMap from "./NinhKieuMap";
import RecentActivities from "./RecentActivities";
import EducationDistributionChart from "./EducationDistributionChart";
import TeacherDistributionChart from "./TeacherDistributionChart";
import { ninhKieuDashboard } from "@/mock/wardDashboard";

const statistics = [
    {
        title: "Trường công lập",
        value: "25",
        icon: <BankOutlined />,
    },
    {
        title: "CBQL & Giáo viên",
        value: "1.084",
        icon: <TeamOutlined />,
    },
    {
        title: "Học sinh & trẻ",
        value: "22.000+",
        icon: <UserOutlined />,
    },
    {
        title: "Nhóm / lớp",
        value: "590",
        icon: <BankOutlined />,
    },
];

export default function NinhKieuDashboardPage() {
    const navigate = useNavigate();
    const data = ninhKieuDashboard;
    
    return (
        <div className="ninh-kieu-dashboard">

            {/* Header */}
            <div className="dashboard-heading">

                <div>
                    <div className="dashboard-heading__back">
                        <BackButton />
                    </div>
                    <div className="dashboard-heading__eyebrow">
                        ĐỊA BÀN
                    </div>

                    <h1>
                        Phường Ninh Kiều
                    </h1>

                    <p>
                        Tổng quan tình hình giáo dục trên địa bàn
                    </p>
                </div>

                <Tag
                    icon={<EnvironmentOutlined />}
                    color="blue"
                >
                    Ninh Kiều - Cần Thơ
                </Tag>

            </div>

            {/* KPI */}
            <Row gutter={[20, 20]}>

                {statistics.map((item) => (
                    <Col
                        key={item.title}
                        xs={24}
                        sm={12}
                        xl={6}
                    >
                        <Card className="dashboard-stat-card">

                            <div className="dashboard-stat-card__icon">
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

            {/* Content */}

            <Row
                gutter={[20, 20]}
                className="dashboard-content"
            >
                <Col xs={24} xl={12}>
                <Card
                        title="Phân bố cơ sở giáo dục"
                        className="panel"
                    >
                        <NinhKieuEducationChart />
                    </Card>
                </Col>
                <Col xs={24} xl={12}>
                <Card
                        title="Phân bố giáo viên theo cấp học"
                        className="panel"
                    >
                        <NinhKieuTeacherChart />
                    </Card></Col>
            </Row>
            <Row
                gutter={[20, 20]}
                className="dashboard-content"
            >

                <Col xs={24} xl={16}>
                    <Card
                        title="Bản đồ cơ sở giáo dục"
                        className="panel"
                    >
                        <NinhKieuMap />
                    </Card>
                </Col>

                <Col xs={24} xl={8}>
                    <Card
                        title="Phân loại cơ sở"
                        className="panel"
                        style={{ height: "100%" }}
                    >
                        <div className="map-legend">

                            <div>
                                <span className="legend-dot legend-kindergarten" />
                                Mầm non
                            </div>

                            <div>
                                <span className="legend-dot legend-primary" />
                                Tiểu học
                            </div>

                            <div>
                                <span className="legend-dot legend-secondary" />
                                THCS
                            </div>

                            <div>
                                <span className="legend-dot legend-highschool" />
                                THPT
                            </div>

                        </div>
                    </Card>
                </Col>
            </Row>

            <Row
                gutter={[20, 20]}
                className="dashboard-content"
            >
                <Col xs={24} xl={12}>

                    <Card
                        title="Cơ cấu cơ sở giáo dục"
                        className="panel"
                    >
                        <EducationDistributionChart
                            data={
                                data.educationDistribution
                            }
                        />
                    </Card>

                </Col>

                <Col xs={24} xl={12}>

                    <Card
                        title="Đội ngũ giáo viên theo bộ môn"
                        className="panel"
                    >
                        <TeacherDistributionChart
                            data={
                                data.teacherDistribution
                            }
                        />
                    </Card>

                </Col>

            </Row>

            <Row
                gutter={[20, 20]}
                className="dashboard-content"
            >

                <Col xs={24}>

                    <Card
                        title="Hoạt động gần đây"
                        extra={
                            <Button
                                type="link"
                                onClick={() =>
                                    navigate("/report")
                                }
                            >
                                Báo cáo →
                            </Button>
                        }
                        className="panel"
                    >
                        <RecentActivities />
                    </Card>

                </Col>

            </Row>

        </div >
    );
}