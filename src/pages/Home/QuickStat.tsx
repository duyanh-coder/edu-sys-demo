import { Card, Col, Row } from "antd";

const data = [
    {
        title: "Trường công lập",
        value: "25",
    },
    {
        title: "Giáo viên & CBQL",
        value: "1.084",
    },
    {
        title: "Học sinh & trẻ",
        value: "22.000+",
    },
    {
        title: "Nhóm / lớp",
        value: "590",
    },
];

export default function QuickStat() {
    return (
        <section className="quick-stat">

            <div className="home-container">

                <Row gutter={[20, 20]}>

                    {data.map((item) => (
                        <Col
                            key={item.title}
                            xs={24}
                            sm={12}
                            lg={6}
                        >
                            <Card className="quick-stat-card">

                                <div className="quick-stat-card__value">
                                    {item.value}
                                </div>

                                <div className="quick-stat-card__title">
                                    {item.title}
                                </div>

                            </Card>
                        </Col>
                    ))}

                </Row>

            </div>

        </section>
    );
}