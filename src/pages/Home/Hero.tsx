import { Button } from "antd";
import { useNavigate } from "react-router-dom";

import "./Hero.scss";

// import heroImage from "@/assets/images/hero/cantho-hero.jpg";
import heroImage from "@/assets/images/hero/camau-hero.jpg";

export default function Hero() {
    const navigate = useNavigate();

    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroImage})`,
            }}
        >
            <div className="hero-overlay" />

            <div className="hero-content">

                <span className="hero-tag">
                    EDUCATION OPERATION CENTER
                </span>

                <h1>
                    Hệ thống Điều hành
                    <br />
                    Giáo dục Công lập
                </h1>

                <p>
                    Tỉnh Cà Mau
                </p>

                <div className="hero-action">

                    <Button
                        type="primary"
                        size="large"
                        onClick={() => navigate("/dashboard")}
                    >
                        Khám phá hệ thống
                    </Button>

                    <Button
                        size="large"
                        onClick={() => navigate("/gis")}
                    >
                        Bản đồ trực quan (GIS)
                    </Button>

                </div>
            </div>
        </section>
    );
}