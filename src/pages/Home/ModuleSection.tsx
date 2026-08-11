import {
    AlertOutlined,
    BarChartOutlined,
    BankOutlined,
    EnvironmentOutlined,
    TeamOutlined,
    ToolOutlined,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";

const modules = [
    {
        title: "Cơ sở giáo dục",
        description:
            "Quản lý và theo dõi các cơ sở giáo dục trên địa bàn",
        value: "25",
        unit: "trường công lập",
        icon: <BankOutlined />,
        path: "/school",
        color: "school",
    },
    {
        title: "Nhân sự",
        description:
            "Theo dõi đội ngũ giáo viên và cán bộ quản lý",
        value: "4.320",
        unit: "giáo viên",
        icon: <TeamOutlined />,
        path: "/teacher",
        color: "teacher",
    },
    {
        title: "Cơ sở vật chất",
        description:
            "Quản lý phòng học, thiết bị và năng lực sử dụng",
        value: "3.120",
        unit: "phòng học",
        icon: <ToolOutlined />,
        path: "/facility",
        color: "facility",
    },
    {
        title: "Bản đồ GIS",
        description:
            "Trực quan hóa hệ thống giáo dục trên bản đồ",
        value: "128",
        unit: "điểm trường",
        icon: <EnvironmentOutlined />,
        path: "/gis",
        color: "gis",
    },
    {
        title: "Cảnh báo",
        description:
            "Theo dõi các vấn đề cần được quan tâm và xử lý",
        value: "12",
        unit: "cảnh báo",
        icon: <AlertOutlined />,
        path: "/alert",
        color: "alert",
    },
    {
        title: "Báo cáo",
        description:
            "Tổng hợp và phân tích dữ liệu phục vụ điều hành",
        value: "24",
        unit: "báo cáo",
        icon: <BarChartOutlined />,
        path: "/report",
        color: "report",
    },
];

export default function ModuleSection() {
    const navigate = useNavigate();

    return (
        <section className="module-section">
            <div className="home-container">

                <div className="section-heading">
                    <span className="section-heading__eyebrow">
                        HỆ THỐNG
                    </span>

                    <h2>
                        Các chức năng điều hành
                    </h2>

                    <p>
                        Truy cập nhanh các lĩnh vực quản lý và điều hành
                        giáo dục trên địa bàn thành phố.
                    </p>
                </div>

                <Row gutter={[20, 20]}>
                    {modules.map((item) => (
                        <Col
                            key={item.title}
                            xs={24}
                            sm={12}
                            lg={8}
                            xl={8}
                        >
                            <Card
                                className={`function-card function-card--${item.color}`}
                                hoverable
                                onClick={() => navigate(item.path)}
                            >
                                <div className="module-card__icon">
                                    {item.icon}
                                </div>

                                <div className="module-card__content">

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                    <div className="module-card__footer">

                                        <div>
                                            <strong>
                                                {item.value}
                                            </strong>

                                            <span>
                                                {item.unit}
                                            </span>
                                        </div>

                                        <span className="module-card__link">
                                            Xem chi tiết →
                                        </span>

                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

            </div>
        </section>
    );
}