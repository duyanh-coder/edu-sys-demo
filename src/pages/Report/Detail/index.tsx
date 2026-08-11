import {
    ArrowLeftOutlined,
    BarChartOutlined,
    DownloadOutlined,
    FileTextOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Col,
    Row,
    Statistic,
    Tag,
} from "antd";

import ReactECharts from "echarts-for-react";

import {
    useNavigate,
    useParams,
} from "react-router-dom";

import { reports } from "@/mock/report";

import "./style.scss";

export default function ReportDetailPage() {
    const navigate = useNavigate();

    const { id } = useParams();

    const report = reports.find(
        (item) => item.id === id
    );

    if (!report) {
        return (
            <div className="report-detail">

                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() =>
                        navigate(-1)
                    }
                >
                    Quay lại
                </Button>

                <Card className="panel">
                    Không tìm thấy báo cáo.
                </Card>

            </div>
        );
    }

    const option = {
        tooltip: {
            trigger: "axis",
        },

        legend: {
            bottom: 0,
        },

        grid: {
            left: 45,
            right: 25,
            top: 30,
            bottom: 55,
        },

        xAxis: {
            type: "category",

            data: [
                "Mầm non",
                "Tiểu học",
                "THCS",
                "THPT",
            ],
        },

        yAxis: {
            type: "value",
        },

        series: [
            {
                name: "Cơ sở",
                type: "bar",

                data: [
                    5,
                    8,
                    7,
                    5,
                ],
            },
        ],
    };

    const studentOption = {
        tooltip: {
            trigger: "item",
        },

        series: [
            {
                name: "Học sinh",
                type: "pie",

                radius: [
                    "45%",
                    "70%",
                ],

                data: [
                    {
                        value: 18000,
                        name: "Tiểu học",
                    },
                    {
                        value: 14500,
                        name: "THCS",
                    },
                    {
                        value: 9800,
                        name: "THPT",
                    },
                    {
                        value: 6200,
                        name: "Mầm non",
                    },
                ],
            },
        ],
    };

    return (
        <div className="report-detail">

            <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate(-1)}
            >
                Quay lại
            </Button>

            <div className="report-detail__header">

                <div className="report-detail__title">

                    <div className="report-detail__icon">
                        <FileTextOutlined />
                    </div>

                    <div>

                        <div className="page-eyebrow">
                            BÁO CÁO
                        </div>

                        <h1>
                            {report.title}
                        </h1>

                        <div className="report-detail__meta">

                            <Tag color="blue">
                                {report.category}
                            </Tag>

                            <span>
                                Cập nhật:
                                {" "}
                                {report.updatedAt}
                            </span>

                        </div>

                    </div>

                </div>

                <Button
                    icon={<DownloadOutlined />}
                >
                    Xuất báo cáo
                </Button>

            </div>

            <Row
                gutter={[20, 20]}
                className="report-detail__kpi"
            >

                <Col xs={12} lg={6}>
                    <Card className="report-detail-stat">
                        <Statistic
                            title="Cơ sở giáo dục"
                            value={25}
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="report-detail-stat">
                        <Statistic
                            title="Giáo viên"
                            value={1084}
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="report-detail-stat">
                        <Statistic
                            title="Học sinh"
                            value={48500}
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="report-detail-stat">
                        <Statistic
                            title="Tỷ lệ đáp ứng"
                            value={92}
                            suffix="%"
                        />
                    </Card>
                </Col>

            </Row>

            <Row gutter={[20, 20]}>

                <Col xs={24} xl={14}>

                    <Card
                        title="Phân bố cơ sở giáo dục"
                        className="panel"
                    >

                        <ReactECharts
                            option={option}
                            style={{
                                height: 380,
                                width: "100%",
                            }}
                            opts={{
                                renderer: "svg",
                            }}
                        />

                    </Card>

                </Col>

                <Col xs={24} xl={10}>

                    <Card
                        title="Quy mô học sinh"
                        className="panel"
                    >

                        <ReactECharts
                            option={
                                studentOption
                            }
                            style={{
                                height: 380,
                                width: "100%",
                            }}
                            opts={{
                                renderer: "svg",
                            }}
                        />

                    </Card>

                </Col>

            </Row>

            <Row
                gutter={[20, 20]}
                className="report-detail__content"
            >

                <Col xs={24}>

                    <Card
                        title="Nhận định"
                        className="panel"
                    >

                        <div className="report-insight">

                            <BarChartOutlined />

                            <div>

                                <strong>
                                    Tổng quan
                                </strong>

                                <p>
                                    Dữ liệu minh họa cho
                                    thấy hệ thống có thể
                                    tổng hợp thông tin
                                    từ các cơ sở giáo dục
                                    thành các chỉ số phục vụ
                                    công tác điều hành.
                                </p>

                            </div>

                        </div>

                    </Card>

                </Col>

            </Row>

        </div>
    );
}