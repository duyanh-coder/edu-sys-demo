import {
    AlertOutlined,
    ArrowLeftOutlined,
    BankOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Col,
    Row,
    Statistic,
    Tag,
} from "antd";

import { useNavigate } from "react-router-dom";

import {
    ninhKieuDashboard,
} from "@/mock/wardDashboard";

import EducationDistributionChart
    from "./EducationDistributionChart";

import TeacherDistributionChart
    from "./TeacherDistributionChart";

import WardMap from "./WardMap";

import AlertSummary from "./AlertSummary";

import RecentActivities
    from "./RecentActivities";

import "./style.scss";

export default function WardPage() {
    const navigate = useNavigate();

    const data = ninhKieuDashboard;

    return (
        <div className="ward-dashboard">

            <div className="ward-dashboard__back">
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </Button>
            </div>

            <div className="ward-dashboard__header">

                <div>
                    <div className="page-eyebrow">
                        EDUCATION OPERATION CENTER
                    </div>

                    <h1>
                        Giáo dục Phường Ninh Kiều
                    </h1>

                    <p>
                        Trung tâm điều hành các cơ sở
                        giáo dục trên địa bàn
                    </p>
                </div>

                <Tag
                    color="blue"
                    icon={<BankOutlined />}
                >
                    Phường Ninh Kiều
                </Tag>

            </div>

            <Row
                gutter={[20, 20]}
                className="ward-kpi"
            >

                <Col xs={12} xl={6}>
                    <Card className="ward-stat-card">

                        <Statistic
                            title="Cơ sở giáo dục"
                            value={
                                data.statistics.schools
                            }
                            prefix={<BankOutlined />}
                        />

                        <button
                            onClick={() =>
                                navigate("/school")
                            }
                        >
                            Xem danh sách →
                        </button>

                    </Card>
                </Col>

                <Col xs={12} xl={6}>
                    <Card className="ward-stat-card">

                        <Statistic
                            title="Giáo viên"
                            value={
                                data.statistics.teachers
                            }
                            prefix={<TeamOutlined />}
                        />

                        <button
                            onClick={() =>
                                navigate("/teacher")
                            }
                        >
                            Xem nhân sự →
                        </button>

                    </Card>
                </Col>

                <Col xs={12} xl={6}>
                    <Card className="ward-stat-card">

                        <Statistic
                            title="Học sinh"
                            value={
                                data.statistics.students
                            }
                            prefix={<UserOutlined />}
                        />

                        <span className="ward-stat-note">
                            Theo dữ liệu Mock
                        </span>

                    </Card>
                </Col>

                <Col xs={12} xl={6}>
                    <Card className="ward-stat-card">

                        <Statistic
                            title="Mức đáp ứng"
                            value={
                                data.statistics
                                    .capacityRate
                            }
                            suffix="%"
                            prefix={<AlertOutlined />}
                        />

                        <span className="ward-stat-note">
                            Năng lực đáp ứng
                        </span>

                    </Card>
                </Col>

            </Row>

            <Row
                gutter={[20, 20]}
                className="ward-main-grid"
            >

                <Col xs={24} xl={16}>

                    <Card
                        title="Bản đồ GIS giáo dục"
                        extra={
                            <Button
                                type="link"
                                onClick={() =>
                                    navigate("/gis")
                                }
                            >
                                Mở bản đồ →
                            </Button>
                        }
                        className="panel"
                    >
                        <WardMap />
                    </Card>

                </Col>

                <Col xs={24} xl={8}>

                    <Card
                        title="Cảnh báo cần xử lý"
                        extra={
                            <Button
                                type="link"
                                onClick={() =>
                                    navigate("/alert")
                                }
                            >
                                Xem tất cả
                            </Button>
                        }
                        className="panel"
                    >
                        <AlertSummary />
                    </Card>

                </Col>

            </Row>

            <Row
                gutter={[20, 20]}
                className="ward-chart-grid"
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
                className="ward-activity-grid"
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

        </div>
    );
}