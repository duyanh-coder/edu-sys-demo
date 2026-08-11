import {
    ArrowLeftOutlined,
    EnvironmentOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

import {
    Card,
    Col,
    Progress,
    Row,
    Statistic,
    Tag,
    Button,
} from "antd";

import { useNavigate, useParams } from "react-router-dom";

import { teachers } from "@/mock/teacher";

import "./style.scss";

export default function TeacherDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();

    const teacher = teachers.find(
        (item) => item.id === id
    );

    if (!teacher) {
        return (
            <div className="teacher-detail">
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </Button>

                <Card className="panel">
                    Không tìm thấy giáo viên.
                </Card>
            </div>
        );
    }

    return (
        <div className="teacher-detail">

            <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate(-1)}
            >
                Quay lại
            </Button>

            <div className="teacher-detail__header">

                <div className="teacher-detail__avatar">
                    <UserOutlined />
                </div>

                <div>
                    <div className="page-eyebrow">
                        HỒ SƠ NHÂN SỰ
                    </div>

                    <h1>{teacher.name}</h1>

                    <div className="teacher-detail__meta">
                        <Tag color="blue">
                            {teacher.subject}
                        </Tag>

                        <Tag color="success">
                            {teacher.status}
                        </Tag>

                        <span>
                            {teacher.code}
                        </span>
                    </div>
                </div>

            </div>

            <Row gutter={[20, 20]}>

                <Col xs={24} lg={6}>
                    <Card className="teacher-detail-stat">
                        <Statistic
                            title="Kinh nghiệm"
                            value={teacher.experience}
                            suffix="năm"
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={6}>
                    <Card className="teacher-detail-stat">
                        <Statistic
                            title="Trình độ"
                            value={teacher.degree}
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={6}>
                    <Card className="teacher-detail-stat">
                        <Statistic
                            title="Bộ môn"
                            value={teacher.subject}
                        />
                    </Card>
                </Col>

                <Col xs={24} lg={6}>
                    <Card className="teacher-detail-stat">
                        <Statistic
                            title="Đánh giá năng lực"
                            value={92}
                            suffix="%"
                            prefix={<TeamOutlined />}
                        />
                    </Card>
                </Col>

            </Row>

            <Row
                gutter={[20, 20]}
                className="teacher-detail__content"
            >

                <Col xs={24} lg={14}>

                    <Card
                        title="Thông tin nhân sự"
                        className="panel"
                    >
                        <div className="teacher-info">

                            <div>
                                <span>Họ và tên</span>
                                <strong>{teacher.name}</strong>
                            </div>

                            <div>
                                <span>Giới tính</span>
                                <strong>{teacher.gender}</strong>
                            </div>

                            <div>
                                <span>Chức vụ</span>
                                <strong>{teacher.position}</strong>
                            </div>

                            <div>
                                <span>Trình độ</span>
                                <strong>{teacher.degree}</strong>
                            </div>

                            <div>
                                <span>Cơ sở công tác</span>
                                <strong>{teacher.schoolName}</strong>
                            </div>

                        </div>
                    </Card>

                </Col>

                <Col xs={24} lg={10}>

                    <Card
                        title="Năng lực chuyên môn"
                        className="panel"
                    >

                        <div className="skill-item">
                            <span>
                                Chuyên môn
                            </span>

                            <Progress
                                percent={94}
                            />
                        </div>

                        <div className="skill-item">
                            <span>
                                Công nghệ thông tin
                            </span>

                            <Progress
                                percent={88}
                            />
                        </div>

                        <div className="skill-item">
                            <span>
                                Phương pháp giảng dạy
                            </span>

                            <Progress
                                percent={92}
                            />
                        </div>

                        <div className="skill-item">
                            <span>
                                Ngoại ngữ
                            </span>

                            <Progress
                                percent={82}
                            />
                        </div>

                    </Card>

                </Col>

            </Row>

            <Row
                gutter={[20, 20]}
                className="teacher-detail__content"
            >

                <Col xs={24}>

                    <Card
                        title="Đơn vị công tác"
                        className="panel"
                    >

                        <div className="teacher-school">

                            <EnvironmentOutlined />

                            <div>
                                <strong>
                                    {teacher.schoolName}
                                </strong>

                                <span>
                                    Phường Ninh Kiều,
                                    Thành phố Cần Thơ
                                </span>
                            </div>

                        </div>

                    </Card>

                </Col>

            </Row>

        </div>
    );
}