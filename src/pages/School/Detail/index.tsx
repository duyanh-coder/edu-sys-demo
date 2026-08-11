import {
    ArrowLeftOutlined,
    BankOutlined,
    EnvironmentOutlined,
    HomeOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Col,
    Progress,
    Row,
    Statistic,
    Table,
    Tag,
} from "antd";

import { useNavigate, useParams } from "react-router-dom";

import { schools } from "@/mock/school";

import "./style.scss";
import TeacherChart from "./TeacherChart";
import StudentChart from "./StudentChart";

export default function SchoolDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const school = schools.find(
        (item) => item.id === id
    );

    if (!school) {
        return (
            <div className="school-detail">
                <Button
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </Button>

                <Card className="panel school-not-found">
                    <h2>Không tìm thấy cơ sở giáo dục</h2>

                    <p>
                        Thông tin cơ sở giáo dục không tồn tại
                        hoặc đã được thay đổi.
                    </p>
                </Card>
            </div>
        );
    }

    const utilization = Math.round(
        (school.students / (school.classrooms * 40)) * 100
    );

    return (
        <div className="school-detail">

            {/* =========================
                Header
            ========================= */}

            <div className="school-detail__back">
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </Button>
            </div>

            <div className="school-detail__header">

                <div className="school-detail__title">

                    <div className="school-detail__icon">
                        <BankOutlined />
                    </div>

                    <div>

                        <div className="page-eyebrow">
                            CƠ SỞ GIÁO DỤC
                        </div>

                        <h1>
                            {school.name}
                        </h1>

                        <div className="school-detail__meta">

                            <Tag
                                color={
                                    school.type === "Mầm non"
                                        ? "green"
                                        : school.type === "Tiểu học"
                                            ? "blue"
                                            : school.type === "THCS"
                                                ? "orange"
                                                : "purple"
                                }
                            >
                                {school.type}
                            </Tag>

                            <span>
                                {school.code}
                            </span>

                            <Tag color="success">
                                {school.status}
                            </Tag>

                        </div>

                    </div>

                </div>

                <div className="school-detail__location">

                    <EnvironmentOutlined />

                    <span>
                        {school.address}
                    </span>

                </div>

            </div>

            {/* =========================
                KPI
            ========================= */}

            <Row
                gutter={[20, 20]}
                className="school-detail__kpi"
            >

                <Col xs={12} lg={6}>
                    <Card className="school-detail-stat">

                        <Statistic
                            title="Giáo viên"
                            value={school.teachers}
                            prefix={<TeamOutlined />}
                        />

                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="school-detail-stat">

                        <Statistic
                            title="Học sinh"
                            value={school.students}
                            prefix={<UserOutlined />}
                            formatter={(value) =>
                                Number(value).toLocaleString("vi-VN")
                            }
                        />

                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="school-detail-stat">

                        <Statistic
                            title="Phòng học"
                            value={school.classrooms}
                            prefix={<HomeOutlined />}
                        />

                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="school-detail-stat">

                        <Statistic
                            title="Sức chứa ước tính"
                            value={school.classrooms * 40}
                            prefix={<UserOutlined />}
                            suffix="HS"
                            formatter={(value) =>
                                Number(value).toLocaleString("vi-VN")
                            }
                        />

                    </Card>
                </Col>

            </Row>

            {/* =========================
                Main Content
            ========================= */}

            <Row
                gutter={[20, 20]}
                className="school-detail__content"
            >

                <Col xs={24} xl={16}>

                    <Card
                        title="Thông tin tổng quát"
                        className="panel"
                    >

                        <div className="school-info">

                            <div className="school-info__row">
                                <span>
                                    Tên cơ sở
                                </span>

                                <strong>
                                    {school.name}
                                </strong>
                            </div>

                            <div className="school-info__row">
                                <span>
                                    Mã cơ sở
                                </span>

                                <strong>
                                    {school.code}
                                </strong>
                            </div>

                            <div className="school-info__row">
                                <span>
                                    Cấp học
                                </span>

                                <strong>
                                    {school.type}
                                </strong>
                            </div>

                            <div className="school-info__row">
                                <span>
                                    Người đứng đầu
                                </span>

                                <strong>
                                    {school.principal}
                                </strong>
                            </div>

                            <div className="school-info__row">
                                <span>
                                    Địa chỉ
                                </span>

                                <strong>
                                    {school.address}
                                </strong>
                            </div>

                        </div>

                    </Card>

                </Col>

                <Col xs={24} xl={8}>

                    <Card
                        title="Sức chứa cơ sở vật chất"
                        className="panel"
                    >

                        <div className="capacity">

                            <div className="capacity__value">
                                {utilization}%
                            </div>

                            <Progress
                                percent={utilization}
                                showInfo={false}
                            />

                            <div className="capacity__description">
                                Mức sử dụng phòng học
                            </div>

                            <div className="capacity__summary">

                                <div>
                                    <strong>
                                        {school.students.toLocaleString(
                                            "vi-VN"
                                        )}
                                    </strong>

                                    <span>
                                        Học sinh
                                    </span>
                                </div>

                                <div>
                                    <strong>
                                        {school.classrooms}
                                    </strong>

                                    <span>
                                        Phòng học
                                    </span>
                                </div>

                            </div>

                        </div>

                    </Card>

                </Col>

            </Row>
            <Row
                gutter={[20, 20]}
                className="school-detail__content"
            >
                <Col xs={24} xl={12}>
                    <Card
                        title="Giáo viên theo bộ môn"
                        className="panel"
                    >
                        <TeacherChart
                            data={school.teacherBySubject}
                        />
                    </Card>
                </Col>

                <Col xs={24} xl={12}>
                    <Card
                        title="Học sinh theo khối"
                        className="panel"
                    >
                        <StudentChart
                            data={school.studentByGrade}
                        />
                    </Card>
                </Col>
            </Row>
            <Row
                gutter={[20, 20]}
                className="school-detail__content"
            >
                <Col xs={24}>

                    <Card
                        title="Danh mục cơ sở vật chất"
                        className="panel"
                    >

                        <Table
                            rowKey="name"
                            pagination={false}
                            dataSource={school.facilities}
                            columns={[
                                {
                                    title: "Hạng mục",
                                    dataIndex: "name",
                                },
                                {
                                    title: "Số lượng",
                                    dataIndex: "quantity",
                                },
                                {
                                    title: "Diện tích",
                                    dataIndex: "area",
                                    render: (value) =>
                                        value
                                            ? `${value.toLocaleString(
                                                "vi-VN"
                                            )} m²`
                                            : "-",
                                },
                                {
                                    title: "Tình trạng",
                                    dataIndex: "status",
                                    render: (value) => (
                                        <Tag
                                            color={
                                                value === "Tốt"
                                                    ? "success"
                                                    : value ===
                                                        "Cần nâng cấp"
                                                        ? "warning"
                                                        : "blue"
                                            }
                                        >
                                            {value}
                                        </Tag>
                                    ),
                                },
                            ]}
                        />

                    </Card>

                </Col>
            </Row>

            {/* =========================
                Facilities
            ========================= */}

            <Row
                gutter={[20, 20]}
                className="school-detail__content"
            >

                <Col xs={24}>

                    <Card
                        title="Cơ sở vật chất"
                        className="panel"
                    >

                        <Row gutter={[16, 16]}>

                            <Col xs={12} sm={6}>
                                <div className="facility-item">
                                    <strong>
                                        {school.classrooms}
                                    </strong>

                                    <span>
                                        Phòng học
                                    </span>
                                </div>
                            </Col>

                            <Col xs={12} sm={6}>
                                <div className="facility-item">
                                    <strong>
                                        04
                                    </strong>

                                    <span>
                                        Phòng chức năng
                                    </span>
                                </div>
                            </Col>

                            <Col xs={12} sm={6}>
                                <div className="facility-item">
                                    <strong>
                                        02
                                    </strong>

                                    <span>
                                        Phòng máy tính
                                    </span>
                                </div>
                            </Col>

                            <Col xs={12} sm={6}>
                                <div className="facility-item">
                                    <strong>
                                        01
                                    </strong>

                                    <span>
                                        Thư viện
                                    </span>
                                </div>
                            </Col>

                        </Row>

                    </Card>

                </Col>

            </Row>

        </div>
    );
}