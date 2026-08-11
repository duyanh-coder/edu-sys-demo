import {
    AlertOutlined,
    ArrowLeftOutlined,
    CheckCircleOutlined,
    ClockCircleOutlined,
    ExclamationCircleOutlined,
    SearchOutlined,
} from "@ant-design/icons";

import {
    Button,
    Card,
    Col,
    Input,
    Row,
    Select,
    Statistic,
    Table,
    Tag,
} from "antd";

import { useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";

import {
    alerts,
    type EducationAlert,
} from "@/mock/alert";

import "./style.scss";

export default function AlertPage() {
    const navigate = useNavigate();

    const [keyword, setKeyword] =
        useState("");

    const [level, setLevel] =
        useState("all");

    const [status, setStatus] =
        useState("all");

    const filteredAlerts = useMemo(() => {
        return alerts.filter((item) => {
            const keywordMatch =
                item.title
                    .toLowerCase()
                    .includes(
                        keyword.toLowerCase()
                    ) ||
                item.schoolName
                    .toLowerCase()
                    .includes(
                        keyword.toLowerCase()
                    );

            const levelMatch =
                level === "all" ||
                item.level === level;

            const statusMatch =
                status === "all" ||
                item.status === status;

            return (
                keywordMatch &&
                levelMatch &&
                statusMatch
            );
        });
    }, [keyword, level, status]);

    const columns = [
        {
            title: "Cảnh báo",
            key: "alert",

            render: (
                _: unknown,
                record: EducationAlert
            ) => (
                <div className="alert-name">

                    <div className="alert-name__icon">
                        <AlertOutlined />
                    </div>

                    <div>
                        <strong>
                            {record.title}
                        </strong>

                        <span>
                            {record.code}
                        </span>
                    </div>

                </div>
            ),
        },

        {
            title: "Cơ sở",
            dataIndex: "schoolName",
            key: "schoolName",
        },

        {
            title: "Phân loại",
            dataIndex: "category",
            key: "category",

            render: (value: string) => (
                <Tag color="blue">
                    {value}
                </Tag>
            ),
        },

        {
            title: "Mức độ",
            dataIndex: "level",
            key: "level",

            render: (
                value: EducationAlert["level"]
            ) => {
                const colors = {
                    "Khẩn cấp": "red",
                    Cao: "volcano",
                    "Trung bình": "orange",
                    Thấp: "blue",
                };

                return (
                    <Tag color={colors[value]}>
                        {value}
                    </Tag>
                );
            },
        },

        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",

            render: (
                value: EducationAlert["status"]
            ) => (
                <Tag
                    color={
                        value ===
                        "Đã xử lý"
                            ? "success"
                            : value ===
                              "Đang xử lý"
                            ? "processing"
                            : "warning"
                    }
                >
                    {value}
                </Tag>
            ),
        },

        {
            title: "Ngày tạo",
            dataIndex: "createdAt",
            key: "createdAt",
        },

        {
            title: "",
            key: "action",

            width: 80,

            render: (
                _: unknown,
                record: EducationAlert
            ) => (
                <Button
                    type="link"
                    onClick={() =>
                        navigate(
                            `/alert/${record.id}`
                        )
                    }
                >
                    Xem
                </Button>
            ),
        },
    ];

    return (
        <div className="alert-page">

            {/* Back */}

            <div className="alert-page__back">

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

            </div>

            {/* Header */}

            <div className="alert-page__header">

                <div>

                    <div className="page-eyebrow">
                        GIÁM SÁT & ĐIỀU HÀNH
                    </div>

                    <h1>
                        Cảnh báo & Kiểm tra
                    </h1>

                    <p>
                        Theo dõi các vấn đề cần
                        xử lý tại các cơ sở
                        giáo dục.
                    </p>

                </div>

            </div>

            {/* KPI */}

            <Row
                gutter={[20, 20]}
                className="alert-kpi"
            >

                <Col xs={12} lg={6}>
                    <Card className="alert-stat-card">

                        <Statistic
                            title="Tổng cảnh báo"
                            value={alerts.length}
                            prefix={
                                <AlertOutlined />
                            }
                        />

                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="alert-stat-card">

                        <Statistic
                            title="Chưa xử lý"
                            value={
                                alerts.filter(
                                    (item) =>
                                        item.status ===
                                        "Chưa xử lý"
                                ).length
                            }
                            prefix={
                                <ExclamationCircleOutlined />
                            }
                        />

                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="alert-stat-card">

                        <Statistic
                            title="Đang xử lý"
                            value={
                                alerts.filter(
                                    (item) =>
                                        item.status ===
                                        "Đang xử lý"
                                ).length
                            }
                            prefix={
                                <ClockCircleOutlined />
                            }
                        />

                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="alert-stat-card">

                        <Statistic
                            title="Đã xử lý"
                            value={
                                alerts.filter(
                                    (item) =>
                                        item.status ===
                                        "Đã xử lý"
                                ).length
                            }
                            prefix={
                                <CheckCircleOutlined />
                            }
                        />

                    </Card>
                </Col>

            </Row>

            {/* Table */}

            <Card
                title="Danh sách cảnh báo"
                className="panel alert-panel"
            >

                <div className="alert-filter">

                    <Input
                        allowClear
                        prefix={
                            <SearchOutlined />
                        }
                        placeholder="Tìm cảnh báo, cơ sở..."
                        value={keyword}
                        onChange={(e) =>
                            setKeyword(
                                e.target.value
                            )
                        }
                    />

                    <Select
                        value={level}
                        onChange={setLevel}
                        options={[
                            {
                                value: "all",
                                label:
                                    "Tất cả mức độ",
                            },
                            {
                                value:
                                    "Khẩn cấp",
                                label:
                                    "Khẩn cấp",
                            },
                            {
                                value: "Cao",
                                label: "Cao",
                            },
                            {
                                value:
                                    "Trung bình",
                                label:
                                    "Trung bình",
                            },
                            {
                                value: "Thấp",
                                label: "Thấp",
                            },
                        ]}
                    />

                    <Select
                        value={status}
                        onChange={setStatus}
                        options={[
                            {
                                value: "all",
                                label:
                                    "Tất cả trạng thái",
                            },
                            {
                                value:
                                    "Chưa xử lý",
                                label:
                                    "Chưa xử lý",
                            },
                            {
                                value:
                                    "Đang xử lý",
                                label:
                                    "Đang xử lý",
                            },
                            {
                                value:
                                    "Đã xử lý",
                                label:
                                    "Đã xử lý",
                            },
                        ]}
                    />

                </div>

                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={
                        filteredAlerts
                    }
                    pagination={{
                        pageSize: 8,
                        showSizeChanger: false,
                    }}
                    scroll={{
                        x: 1100,
                    }}
                />

            </Card>

        </div>
    );
}