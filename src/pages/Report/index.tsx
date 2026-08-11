import {
    ArrowLeftOutlined,
    BarChartOutlined,
    DownloadOutlined,
    FileTextOutlined,
    PieChartOutlined,
    TeamOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Col,
    Row,
    Select,
    Statistic,
    Table,
    Tag,
} from "antd";

import { useNavigate } from "react-router-dom";

import {
    reports,
    type EducationReport,
} from "@/mock/report";

import "./style.scss";

export default function ReportPage() {
    const navigate = useNavigate();

    const columns = [
        {
            title: "Báo cáo",
            key: "report",

            render: (
                _: unknown,
                record: EducationReport
            ) => (
                <div className="report-name">
                    <div className="report-name__icon">
                        <FileTextOutlined />
                    </div>

                    <div>
                        <strong>
                            {record.title}
                        </strong>

                        <span>
                            {record.description}
                        </span>
                    </div>
                </div>
            ),
        },

        {
            title: "Phân loại",
            dataIndex: "category",

            render: (
                value: EducationReport["category"]
            ) => (
                <Tag color="blue">
                    {value}
                </Tag>
            ),
        },

        {
            title: "Cập nhật",
            dataIndex: "updatedAt",
        },

        {
            title: "",
            key: "action",

            width: 160,

            render: (
                _: unknown,
                record: EducationReport
            ) => (
                <Button
                    type="link"
                    icon={<BarChartOutlined />}
                    onClick={() =>
                        navigate(
                            `/report/${record.id}`
                        )
                    }
                >
                    Xem báo cáo
                </Button>
            ),
        },
    ];

    return (
        <div className="report-page">

            <div className="report-page__back">
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </Button>
            </div>

            <div className="report-page__header">

                <div>

                    <div className="page-eyebrow">
                        BÁO CÁO & PHÂN TÍCH
                    </div>

                    <h1>
                        Báo cáo giáo dục
                    </h1>

                    <p>
                        Tổng hợp dữ liệu phục vụ
                        công tác theo dõi và điều hành.
                    </p>

                </div>

                <Button
                    icon={<DownloadOutlined />}
                >
                    Xuất báo cáo
                </Button>

            </div>

            <Row
                gutter={[20, 20]}
                className="report-kpi"
            >

                <Col xs={12} lg={6}>
                    <Card className="report-stat-card">
                        <Statistic
                            title="Báo cáo"
                            value={reports.length}
                            prefix={
                                <FileTextOutlined />
                            }
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="report-stat-card">
                        <Statistic
                            title="Cơ sở giáo dục"
                            value={25}
                            prefix={
                                <PieChartOutlined />
                            }
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="report-stat-card">
                        <Statistic
                            title="Giáo viên"
                            value={1084}
                            prefix={
                                <TeamOutlined />
                            }
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="report-stat-card">
                        <Statistic
                            title="Cảnh báo"
                            value={5}
                            prefix={
                                <BarChartOutlined />
                            }
                        />
                    </Card>
                </Col>

            </Row>

            <Card
                title="Danh mục báo cáo"
                className="panel report-panel"
            >

                <div className="report-filter">

                    <Select
                        defaultValue="all"
                        options={[
                            {
                                value: "all",
                                label:
                                    "Tất cả báo cáo",
                            },
                            {
                                value:
                                    "Cơ sở giáo dục",
                                label:
                                    "Cơ sở giáo dục",
                            },
                            {
                                value: "Nhân sự",
                                label: "Nhân sự",
                            },
                            {
                                value: "Học sinh",
                                label:
                                    "Học sinh",
                            },
                            {
                                value:
                                    "Cơ sở vật chất",
                                label:
                                    "Cơ sở vật chất",
                            },
                            {
                                value:
                                    "Điều hành",
                                label:
                                    "Điều hành",
                            },
                        ]}
                    />

                </div>

                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={reports}
                    pagination={false}
                />

            </Card>

        </div>
    );
}