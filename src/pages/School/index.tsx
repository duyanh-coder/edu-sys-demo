import {
    BankOutlined,
    EnvironmentOutlined,
    SearchOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";

import {
    Card,
    Col,
    Input,
    Row,
    Select,
    Statistic,
    Table,
    Tag,
    Button,
} from "antd";

import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import { schools, type School } from "@/mock/school";

import "./style.scss";
import BackButton from "../../components/BackButton";

export default function SchoolPage() {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");
    const [type, setType] = useState<string>("all");

    const filteredSchools = useMemo(() => {
        return schools.filter((school) => {
            const matchKeyword =
                school.name
                    .toLowerCase()
                    .includes(keyword.toLowerCase());

            const matchType =
                type === "all" || school.type === type;

            return matchKeyword && matchType;
        });
    }, [keyword, type]);

    const columns = [
        {
            title: "Cơ sở giáo dục",
            key: "name",
            render: (_: unknown, record: School) => (
                <div className="school-name">
                    <div className="school-name__icon">
                        <BankOutlined />
                    </div>

                    <div>
                        <strong>{record.name}</strong>

                        <span>{record.code}</span>
                    </div>
                </div>
            ),
        },
        {
            title: "Loại hình",
            dataIndex: "type",
            key: "type",
            render: (value: School["type"]) => {
                const colorMap = {
                    "Mầm non": "green",
                    "Tiểu học": "blue",
                    THCS: "orange",
                    THPT: "purple",
                };

                return (
                    <Tag color={colorMap[value]}>
                        {value}
                    </Tag>
                );
            },
        },
        {
            title: "Hiệu trưởng",
            dataIndex: "principal",
            key: "principal",
        },
        {
            title: "Giáo viên",
            dataIndex: "teachers",
            key: "teachers",
        },
        {
            title: "Học sinh",
            dataIndex: "students",
            key: "students",
            render: (value: number) =>
                value.toLocaleString("vi-VN"),
        },
        {
            title: "Phòng học",
            dataIndex: "classrooms",
            key: "classrooms",
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (value: School["status"]) => (
                <Tag
                    color={
                        value === "Đang hoạt động"
                            ? "success"
                            : "warning"
                    }
                >
                    {value}
                </Tag>
            ),
        },
        {
            title: "",
            key: "action",
            width: 90,
            render: (_: unknown, record: School) => (
                <Button
                    type="link"
                    onClick={() =>
                        navigate(`/school/${record.id}`)
                    }
                >
                    Xem
                </Button>
            ),
        },
    ];

    return (
        <div className="school-page">

            <div className="dashboard-heading__back">
                <BackButton />
            </div>
            <div className="school-page__header">
                <div>
                    <div className="page-eyebrow">
                        QUẢN LÝ CƠ SỞ GIÁO DỤC
                    </div>

                    <h1>
                        Cơ sở giáo dục
                    </h1>

                    <p>
                        Quản lý thông tin các trường học
                        trên địa bàn phường An Xuyên.
                    </p>
                </div>

                <Tag
                    icon={<EnvironmentOutlined />}
                    color="blue"
                >
                    Phường An Xuyên
                </Tag>

            </div>

            <Row
                gutter={[20, 20]}
                className="school-kpi"
            >

                <Col xs={12} lg={6}>
                    <Card className="school-stat-card">
                        <Statistic
                            title="Trường công lập"
                            value={25}
                            prefix={<BankOutlined />}
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="school-stat-card">
                        <Statistic
                            title="Giáo viên"
                            value={1084}
                            prefix={<TeamOutlined />}
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="school-stat-card">
                        <Statistic
                            title="Học sinh & trẻ"
                            value="22.000+"
                            prefix={<UserOutlined />}
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="school-stat-card">
                        <Statistic
                            title="Nhóm / lớp"
                            value={590}
                            prefix={<BankOutlined />}
                        />
                    </Card>
                </Col>

            </Row>

            <Card className="panel school-panel">

                <div className="school-filter">

                    <Input
                        allowClear
                        prefix={<SearchOutlined />}
                        placeholder="Tìm kiếm tên trường..."
                        value={keyword}
                        onChange={(e) =>
                            setKeyword(e.target.value)
                        }
                    />

                    <Select
                        value={type}
                        onChange={setType}
                        options={[
                            {
                                value: "all",
                                label: "Tất cả cấp học",
                            },
                            {
                                value: "Mầm non",
                                label: "Mầm non",
                            },
                            {
                                value: "Tiểu học",
                                label: "Tiểu học",
                            },
                            {
                                value: "THCS",
                                label: "THCS",
                            },
                            {
                                value: "THPT",
                                label: "THPT",
                            },
                        ]}
                    />

                </div>

                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={filteredSchools}
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