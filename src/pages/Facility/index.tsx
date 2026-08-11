import {
    ArrowLeftOutlined,
    BankOutlined,
    BuildOutlined,
    SearchOutlined,
    ToolOutlined,
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
    facilities,
    type Facility,
} from "@/mock/facility";

import "./style.scss";

export default function FacilityPage() {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");

    const [category, setCategory] =
        useState<string>("all");

    const [status, setStatus] =
        useState<string>("all");

    const filteredFacilities = useMemo(() => {
        return facilities.filter((item) => {
            const keywordMatch =
                item.name
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                item.schoolName
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                item.code
                    .toLowerCase()
                    .includes(keyword.toLowerCase());

            const categoryMatch =
                category === "all" ||
                item.category === category;

            const statusMatch =
                status === "all" ||
                item.status === status;

            return (
                keywordMatch &&
                categoryMatch &&
                statusMatch
            );
        });
    }, [keyword, category, status]);

    const columns = [
        {
            title: "Hạng mục",
            key: "facility",
            render: (
                _: unknown,
                record: Facility
            ) => (
                <div className="facility-name">

                    <div className="facility-name__icon">
                        <BuildOutlined />
                    </div>

                    <div>
                        <strong>
                            {record.name}
                        </strong>

                        <span>
                            {record.code}
                        </span>
                    </div>

                </div>
            ),
        },

        {
            title: "Cơ sở giáo dục",
            dataIndex: "schoolName",
            key: "schoolName",
        },

        {
            title: "Nhóm",
            dataIndex: "category",
            key: "category",
            render: (
                value: Facility["category"]
            ) => (
                <Tag color="blue">
                    {value}
                </Tag>
            ),
        },

        {
            title: "Số lượng",
            dataIndex: "quantity",
            key: "quantity",
        },

        {
            title: "Diện tích",
            dataIndex: "area",
            key: "area",
            render: (value?: number) =>
                value
                    ? `${value.toLocaleString(
                          "vi-VN"
                      )} m²`
                    : "-",
        },

        {
            title: "Sức chứa",
            dataIndex: "capacity",
            key: "capacity",
            render: (value?: number) =>
                value
                    ? `${value.toLocaleString(
                          "vi-VN"
                      )}`
                    : "-",
        },

        {
            title: "Tình trạng",
            dataIndex: "status",
            key: "status",
            render: (
                value: Facility["status"]
            ) => (
                <Tag
                    color={
                        value === "Tốt"
                            ? "success"
                            : value ===
                              "Cần nâng cấp"
                            ? "warning"
                            : "processing"
                    }
                >
                    {value}
                </Tag>
            ),
        },

        {
            title: "",
            key: "action",
            width: 80,
            render: (
                _: unknown,
                record: Facility
            ) => (
                <Button
                    type="link"
                    onClick={() =>
                        navigate(
                            `/facility/${record.id}`
                        )
                    }
                >
                    Xem
                </Button>
            ),
        },
    ];

    return (
        <div className="facility-page">

            {/* Back */}

            <div className="facility-page__back">

                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </Button>

            </div>

            {/* Header */}

            <div className="facility-page__header">

                <div>

                    <div className="page-eyebrow">
                        QUẢN LÝ CƠ SỞ VẬT CHẤT
                    </div>

                    <h1>
                        Cơ sở vật chất
                    </h1>

                    <p>
                        Theo dõi phòng học, phòng chức năng,
                        thiết bị và năng lực phục vụ
                        của các cơ sở giáo dục.
                    </p>

                </div>

            </div>

            {/* KPI */}

            <Row
                gutter={[20, 20]}
                className="facility-kpi"
            >

                <Col xs={12} lg={6}>

                    <Card className="facility-stat-card">

                        <Statistic
                            title="Tổng hạng mục"
                            value={286}
                            prefix={
                                <BuildOutlined />
                            }
                        />

                    </Card>

                </Col>

                <Col xs={12} lg={6}>

                    <Card className="facility-stat-card">

                        <Statistic
                            title="Đang sử dụng"
                            value={248}
                            prefix={
                                <BankOutlined />
                            }
                        />

                    </Card>

                </Col>

                <Col xs={12} lg={6}>

                    <Card className="facility-stat-card">

                        <Statistic
                            title="Cần nâng cấp"
                            value={18}
                            prefix={
                                <ToolOutlined />
                            }
                        />

                    </Card>

                </Col>

                <Col xs={12} lg={6}>

                    <Card className="facility-stat-card">

                        <Statistic
                            title="Cơ sở theo dõi"
                            value={25}
                            prefix={
                                <BankOutlined />
                            }
                        />

                    </Card>

                </Col>

            </Row>

            {/* Table */}

            <Card
                title="Danh mục cơ sở vật chất"
                className="panel facility-panel"
            >

                <div className="facility-filter">

                    <Input
                        allowClear
                        prefix={
                            <SearchOutlined />
                        }
                        placeholder="Tìm hạng mục, trường..."
                        value={keyword}
                        onChange={(e) =>
                            setKeyword(
                                e.target.value
                            )
                        }
                    />

                    <Select
                        value={category}
                        onChange={setCategory}
                        options={[
                            {
                                value: "all",
                                label:
                                    "Tất cả nhóm",
                            },
                            {
                                value: "Phòng học",
                                label:
                                    "Phòng học",
                            },
                            {
                                value:
                                    "Phòng chức năng",
                                label:
                                    "Phòng chức năng",
                            },
                            {
                                value: "Thiết bị",
                                label:
                                    "Thiết bị",
                            },
                            {
                                value:
                                    "Khu thể thao",
                                label:
                                    "Khu thể thao",
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
                                    "Tất cả tình trạng",
                            },
                            {
                                value: "Tốt",
                                label: "Tốt",
                            },
                            {
                                value:
                                    "Đang sử dụng",
                                label:
                                    "Đang sử dụng",
                            },
                            {
                                value:
                                    "Cần nâng cấp",
                                label:
                                    "Cần nâng cấp",
                            },
                        ]}
                    />

                </div>

                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={
                        filteredFacilities
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