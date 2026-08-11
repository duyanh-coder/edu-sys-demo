import {
    ArrowLeftOutlined,
    BankOutlined,
    BuildOutlined,
    EnvironmentOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Col,
    Progress,
    Row,
    Statistic,
    Tag,
} from "antd";

import { useNavigate, useParams } from "react-router-dom";

import {
    facilities,
} from "@/mock/facility";

import "./style.scss";

export default function FacilityDetailPage() {
    const navigate = useNavigate();

    const { id } = useParams();

    const facility = facilities.find(
        (item) => item.id === id
    );

    if (!facility) {
        return (
            <div className="facility-detail">

                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </Button>

                <Card className="panel">
                    Không tìm thấy thông tin
                    cơ sở vật chất.
                </Card>

            </div>
        );
    }

    const capacity = facility.capacity ?? 0;

    const utilization =
        capacity > 0
            ? Math.min(
                  100,
                  Math.round(
                      (capacity * 0.82) /
                          capacity *
                          100
                  )
              )
            : 0;

    return (
        <div className="facility-detail">

            {/* Back */}

            <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate(-1)}
            >
                Quay lại
            </Button>

            {/* Header */}

            <div className="facility-detail__header">

                <div className="facility-detail__icon">
                    <BuildOutlined />
                </div>

                <div>

                    <div className="page-eyebrow">
                        CHI TIẾT CƠ SỞ VẬT CHẤT
                    </div>

                    <h1>
                        {facility.name}
                    </h1>

                    <div className="facility-detail__meta">

                        <Tag color="blue">
                            {facility.category}
                        </Tag>

                        <Tag
                            color={
                                facility.status ===
                                "Tốt"
                                    ? "success"
                                    : facility.status ===
                                      "Cần nâng cấp"
                                    ? "warning"
                                    : "processing"
                            }
                        >
                            {facility.status}
                        </Tag>

                        <span>
                            {facility.code}
                        </span>

                    </div>

                </div>

            </div>

            {/* KPI */}

            <Row
                gutter={[20, 20]}
                className="facility-detail__kpi"
            >

                <Col xs={12} lg={6}>

                    <Card className="facility-detail-stat">

                        <Statistic
                            title="Số lượng"
                            value={
                                facility.quantity
                            }
                        />

                    </Card>

                </Col>

                <Col xs={12} lg={6}>

                    <Card className="facility-detail-stat">

                        <Statistic
                            title="Diện tích"
                            value={
                                facility.area ?? 0
                            }
                            suffix="m²"
                        />

                    </Card>

                </Col>

                <Col xs={12} lg={6}>

                    <Card className="facility-detail-stat">

                        <Statistic
                            title="Sức chứa"
                            value={
                                facility.capacity ??
                                0
                            }
                            suffix="người"
                        />

                    </Card>

                </Col>

                <Col xs={12} lg={6}>

                    <Card className="facility-detail-stat">

                        <Statistic
                            title="Tình trạng"
                            value={
                                facility.status
                            }
                        />

                    </Card>

                </Col>

            </Row>

            {/* Content */}

            <Row
                gutter={[20, 20]}
                className="facility-detail__content"
            >

                <Col xs={24} xl={15}>

                    <Card
                        title="Thông tin hạng mục"
                        className="panel"
                    >

                        <div className="facility-info">

                            <div>
                                <span>
                                    Tên hạng mục
                                </span>

                                <strong>
                                    {facility.name}
                                </strong>
                            </div>

                            <div>
                                <span>
                                    Mã tài sản
                                </span>

                                <strong>
                                    {facility.code}
                                </strong>
                            </div>

                            <div>
                                <span>
                                    Nhóm
                                </span>

                                <strong>
                                    {facility.category}
                                </strong>
                            </div>

                            <div>
                                <span>
                                    Cơ sở giáo dục
                                </span>

                                <strong>
                                    {facility.schoolName}
                                </strong>
                            </div>

                            <div>
                                <span>
                                    Kiểm tra gần nhất
                                </span>

                                <strong>
                                    {facility.lastInspection ??
                                        "-"}
                                </strong>
                            </div>

                        </div>

                    </Card>

                </Col>

                <Col xs={24} xl={9}>

                    <Card
                        title="Mức sử dụng"
                        className="panel"
                    >

                        <div className="facility-capacity">

                            <div className="facility-capacity__value">
                                {utilization}%
                            </div>

                            <Progress
                                percent={
                                    utilization
                                }
                                showInfo={false}
                            />

                            <span>
                                Mức khai thác
                                hiện tại
                            </span>

                        </div>

                    </Card>

                </Col>

            </Row>

            {/* School */}

            <Row
                gutter={[20, 20]}
                className="facility-detail__content"
            >

                <Col xs={24}>

                    <Card
                        title="Cơ sở quản lý"
                        className="panel"
                    >

                        <div className="facility-school">

                            <div className="facility-school__icon">
                                <BankOutlined />
                            </div>

                            <div>
                                <strong>
                                    {facility.schoolName}
                                </strong>

                                <span>
                                    <EnvironmentOutlined />
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