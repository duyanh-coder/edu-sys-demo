import {
    AlertOutlined,
    ArrowLeftOutlined,
    BankOutlined,
    CalendarOutlined,
    EnvironmentOutlined,
    UserOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Col,
    Row,
    Tag,
} from "antd";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import {
    alerts,
} from "@/mock/alert";

import "./style.scss";

export default function AlertDetailPage() {
    const navigate = useNavigate();

    const { id } = useParams();

    const alert = alerts.find(
        (item) => item.id === id
    );

    if (!alert) {
        return (
            <div className="alert-detail">

                <Button
                    type="text"
                    icon={
                        <ArrowLeftOutlined />
                    }
                    onClick={() =>
                        navigate(-1)
                    }
                >
                    Quay lại
                </Button>

                <Card className="panel">
                    Không tìm thấy cảnh báo.
                </Card>

            </div>
        );
    }

    const levelColor = {
        "Khẩn cấp": "red",
        Cao: "volcano",
        "Trung bình": "orange",
        Thấp: "blue",
    };

    return (
        <div className="alert-detail">

            {/* Back */}

            <Button
                type="text"
                icon={
                    <ArrowLeftOutlined />
                }
                onClick={() =>
                    navigate(-1)
                }
            >
                Quay lại
            </Button>

            {/* Header */}

            <div className="alert-detail__header">

                <div className="alert-detail__icon">
                    <AlertOutlined />
                </div>

                <div>

                    <div className="page-eyebrow">
                        CHI TIẾT CẢNH BÁO
                    </div>

                    <h1>
                        {alert.title}
                    </h1>

                    <div className="alert-detail__meta">

                        <Tag
                            color={
                                levelColor[
                                    alert.level
                                ]
                            }
                        >
                            {alert.level}
                        </Tag>

                        <Tag color="blue">
                            {alert.category}
                        </Tag>

                        <Tag
                            color={
                                alert.status ===
                                "Đã xử lý"
                                    ? "success"
                                    : alert.status ===
                                      "Đang xử lý"
                                    ? "processing"
                                    : "warning"
                            }
                        >
                            {alert.status}
                        </Tag>

                        <span>
                            {alert.code}
                        </span>

                    </div>

                </div>

            </div>

            {/* Main */}

            <Row
                gutter={[20, 20]}
            >

                <Col xs={24} xl={16}>

                    <Card
                        title="Nội dung cảnh báo"
                        className="panel"
                    >

                        <div className="alert-description">

                            <div className="alert-description__message">
                                {alert.description}
                            </div>

                            <div className="alert-info">

                                <div>
                                    <CalendarOutlined />

                                    <span>
                                        Ngày tạo
                                    </span>

                                    <strong>
                                        {
                                            alert.createdAt
                                        }
                                    </strong>
                                </div>

                                <div>
                                    <CalendarOutlined />

                                    <span>
                                        Hạn xử lý
                                    </span>

                                    <strong>
                                        {
                                            alert.deadline ??
                                            "-"
                                        }
                                    </strong>
                                </div>

                                <div>
                                    <UserOutlined />

                                    <span>
                                        Người phụ trách
                                    </span>

                                    <strong>
                                        {
                                            alert.assignee ??
                                            "-"
                                        }
                                    </strong>
                                </div>

                            </div>

                        </div>

                    </Card>

                </Col>

                <Col xs={24} xl={8}>

                    <Card
                        title="Cơ sở liên quan"
                        className="panel"
                    >

                        <div className="alert-school">

                            <div className="alert-school__icon">
                                <BankOutlined />
                            </div>

                            <div>
                                <strong>
                                    {
                                        alert.schoolName
                                    }
                                </strong>

                                <span>
                                    <EnvironmentOutlined />
                                    Phường An Xuyên,
                                    Tỉnh Cần Thơ
                                </span>
                            </div>

                        </div>

                    </Card>

                </Col>

            </Row>

            {/* Process */}

            <Row
                gutter={[20, 20]}
                className="alert-detail__content"
            >

                <Col xs={24}>

                    <Card
                        title="Tiến độ xử lý"
                        className="panel"
                    >

                        <div className="alert-process">

                            <div
                                className={
                                    "alert-process__step active"
                                }
                            >
                                <span>1</span>

                                <div>
                                    <strong>
                                        Phát hiện
                                    </strong>

                                    <small>
                                        Hệ thống ghi nhận
                                        vấn đề
                                    </small>
                                </div>
                            </div>

                            <div
                                className={
                                    alert.status !==
                                    "Chưa xử lý"
                                        ? "alert-process__step active"
                                        : "alert-process__step"
                                }
                            >
                                <span>2</span>

                                <div>
                                    <strong>
                                        Tiếp nhận
                                    </strong>

                                    <small>
                                        Đơn vị phụ trách
                                        tiếp nhận
                                    </small>
                                </div>
                            </div>

                            <div
                                className={
                                    alert.status ===
                                    "Đã xử lý"
                                        ? "alert-process__step active"
                                        : "alert-process__step"
                                }
                            >
                                <span>3</span>

                                <div>
                                    <strong>
                                        Hoàn tất
                                    </strong>

                                    <small>
                                        Xác nhận kết quả
                                    </small>
                                </div>
                            </div>

                        </div>

                    </Card>

                </Col>

            </Row>

        </div>
    );
}