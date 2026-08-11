import {
    AlertOutlined,
    RightOutlined,
} from "@ant-design/icons";

import { Tag } from "antd";

import { useNavigate } from "react-router-dom";

import {
    ninhKieuDashboard,
} from "@/mock/wardDashboard";

export default function AlertSummary() {
    const navigate = useNavigate();

    return (
        <div className="ward-alert-summary">

            {ninhKieuDashboard.alerts.map(
                (alert) => (
                    <button
                        key={alert.id}
                        onClick={() =>
                            navigate(
                                `/alert/${alert.id}`
                            )
                        }
                    >

                        <div className="ward-alert-summary__icon">
                            <AlertOutlined />
                        </div>

                        <div className="ward-alert-summary__content">

                            <strong>
                                {alert.title}
                            </strong>

                            <span>
                                {alert.school}
                            </span>

                            <Tag
                                color={
                                    alert.level ===
                                    "Cao"
                                        ? "volcano"
                                        : "orange"
                                }
                            >
                                {alert.level}
                            </Tag>

                        </div>

                        <RightOutlined />

                    </button>
                )
            )}

        </div>
    );
}