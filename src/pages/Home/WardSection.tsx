import {
    ArrowRightOutlined,
    EnvironmentOutlined,
    BankOutlined,
    TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Tag } from "antd";
import { useNavigate } from "react-router-dom";

export default function WardSection() {
    const navigate = useNavigate();

    return (
        <section className="ward-section">
            <div className="home-container">

                <div className="section-heading">
                    <span className="section-heading__eyebrow">
                        ĐỊA BÀN TRỌNG ĐIỂM
                    </span>

                    <h2>
                        Điều hành giáo dục theo địa bàn
                    </h2>

                    <p>
                        Theo dõi tổng quan tình hình giáo dục và đi sâu
                        đến từng địa bàn trên toàn thành phố.
                    </p>
                </div>

                <Row gutter={[24, 24]}>

                    <Col xs={24} lg={16}>

                        <Card
                            className="ward-main-card"
                            styles={{
                                body: {
                                    padding: 0,
                                },
                            }}
                        >

                            <div className="ward-main-card__image">
                                <div className="ward-main-card__overlay" />

                                <div className="ward-main-card__content">

                                    <Tag color="blue">
                                        ĐỊA BÀN ĐANG THEO DÕI
                                    </Tag>

                                    <h3>
                                        Phường Ninh Kiều
                                    </h3>

                                    <div className="ward-main-card__location">
                                        <EnvironmentOutlined />
                                        Trung tâm Thành phố Cần Thơ
                                    </div>

                                    <Button
                                        type="primary"
                                        size="large"
                                        icon={<ArrowRightOutlined />}
                                        iconPosition="end"
                                        onClick={() =>
                                            navigate("/ward/ninh-kieu")
                                        }
                                    >
                                        Xem Dashboard
                                    </Button>

                                </div>
                            </div>

                        </Card>

                    </Col>

                    <Col xs={24} lg={8}>

                        <div className="ward-stats">

                            <Card className="ward-stat-card">
                                <div className="ward-stat-card__icon">
                                    <BankOutlined />
                                </div>

                                <div>
                                    <strong>12</strong>
                                    <span>Cơ sở giáo dục</span>
                                </div>
                            </Card>

                            <Card className="ward-stat-card">
                                <div className="ward-stat-card__icon">
                                    <TeamOutlined />
                                </div>

                                <div>
                                    <strong>420</strong>
                                    <span>Giáo viên</span>
                                </div>
                            </Card>

                            <Card className="ward-stat-card">
                                <div className="ward-stat-card__icon">
                                    <UserOutlined />
                                </div>

                                <div>
                                    <strong>8.642</strong>
                                    <span>Học sinh</span>
                                </div>
                            </Card>

                        </div>

                    </Col>

                </Row>

            </div>
        </section>
    );
}