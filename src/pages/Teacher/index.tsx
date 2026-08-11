import {
    ArrowLeftOutlined,
    SearchOutlined,
    TeamOutlined,
    UserOutlined,
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

import { teachers, type Teacher } from "@/mock/teacher";

import "./style.scss";

export default function TeacherPage() {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState("");
    const [school, setSchool] = useState("all");
    const [subject, setSubject] = useState("all");

    const filteredTeachers = useMemo(() => {
        return teachers.filter((teacher) => {
            const keywordMatch =
                teacher.name
                    .toLowerCase()
                    .includes(keyword.toLowerCase()) ||
                teacher.code
                    .toLowerCase()
                    .includes(keyword.toLowerCase());

            const schoolMatch =
                school === "all" ||
                teacher.schoolId === school;

            const subjectMatch =
                subject === "all" ||
                teacher.subject === subject;

            return (
                keywordMatch &&
                schoolMatch &&
                subjectMatch
            );
        });
    }, [keyword, school, subject]);

    const columns = [
        {
            title: "Giáo viên",
            key: "teacher",
            render: (_: unknown, record: Teacher) => (
                <div className="teacher-name">
                    <div className="teacher-name__avatar">
                        <UserOutlined />
                    </div>

                    <div>
                        <strong>{record.name}</strong>
                        <span>{record.code}</span>
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
            title: "Bộ môn",
            dataIndex: "subject",
            key: "subject",
            render: (value: string) => (
                <Tag color="blue">{value}</Tag>
            ),
        },
        {
            title: "Chức vụ",
            dataIndex: "position",
            key: "position",
        },
        {
            title: "Trình độ",
            dataIndex: "degree",
            key: "degree",
        },
        {
            title: "Kinh nghiệm",
            dataIndex: "experience",
            key: "experience",
            render: (value: number) => `${value} năm`,
        },
        {
            title: "Trạng thái",
            dataIndex: "status",
            key: "status",
            render: (value: Teacher["status"]) => (
                <Tag
                    color={
                        value === "Đang công tác"
                            ? "success"
                            : value === "Nghỉ phép"
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
            render: (_: unknown, record: Teacher) => (
                <Button
                    type="link"
                    onClick={() =>
                        navigate(
                            `/teacher/${record.id}`
                        )
                    }
                >
                    Xem
                </Button>
            ),
        },
    ];

    return (
        <div className="teacher-page">

            <div className="teacher-page__back">
                <Button
                    type="text"
                    icon={<ArrowLeftOutlined />}
                    onClick={() => navigate(-1)}
                >
                    Quay lại
                </Button>
            </div>

            <div className="teacher-page__header">
                <div>
                    <div className="page-eyebrow">
                        QUẢN LÝ NHÂN SỰ
                    </div>

                    <h1>Nhân sự giáo dục</h1>

                    <p>
                        Theo dõi đội ngũ cán bộ, giáo viên
                        theo cơ sở và bộ môn.
                    </p>
                </div>
            </div>

            <Row
                gutter={[20, 20]}
                className="teacher-kpi"
            >
                <Col xs={12} lg={6}>
                    <Card className="teacher-stat-card">
                        <Statistic
                            title="Tổng giáo viên"
                            value={1084}
                            prefix={<TeamOutlined />}
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="teacher-stat-card">
                        <Statistic
                            title="Đang công tác"
                            value={1048}
                            prefix={<UserOutlined />}
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="teacher-stat-card">
                        <Statistic
                            title="Thạc sĩ trở lên"
                            value={286}
                            prefix={<TeamOutlined />}
                        />
                    </Card>
                </Col>

                <Col xs={12} lg={6}>
                    <Card className="teacher-stat-card">
                        <Statistic
                            title="Bộ môn"
                            value={12}
                            prefix={<TeamOutlined />}
                        />
                    </Card>
                </Col>
            </Row>

            <Card
                title="Danh sách giáo viên"
                className="panel teacher-panel"
            >
                <div className="teacher-filter">

                    <Input
                        allowClear
                        prefix={<SearchOutlined />}
                        placeholder="Tìm tên hoặc mã giáo viên..."
                        value={keyword}
                        onChange={(e) =>
                            setKeyword(e.target.value)
                        }
                    />

                    <Select
                        value={school}
                        onChange={setSchool}
                        options={[
                            {
                                value: "all",
                                label: "Tất cả cơ sở",
                            },
                            ...Array.from(
                                new Map(
                                    teachers.map((teacher) => [
                                        teacher.schoolId,
                                        teacher.schoolName,
                                    ])
                                )
                            ).map(
                                ([value, label]) => ({
                                    value,
                                    label,
                                })
                            ),
                        ]}
                    />

                    <Select
                        value={subject}
                        onChange={setSubject}
                        options={[
                            {
                                value: "all",
                                label: "Tất cả bộ môn",
                            },
                            ...Array.from(
                                new Set(
                                    teachers.map(
                                        (teacher) =>
                                            teacher.subject
                                    )
                                )
                            ).map((value) => ({
                                value,
                                label: value,
                            })),
                        ]}
                    />

                </div>

                <Table
                    rowKey="id"
                    columns={columns}
                    dataSource={filteredTeachers}
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