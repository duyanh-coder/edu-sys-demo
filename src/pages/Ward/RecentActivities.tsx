import {
    CheckCircleOutlined,
    ClockCircleOutlined,
} from "@ant-design/icons";

import {
    ninhKieuDashboard,
} from "@/mock/wardDashboard";

export default function RecentActivities() {
    return (
        <div className="ward-activities">

            {ninhKieuDashboard.activities.map(
                (activity, index) => (
                    <div
                        key={index}
                        className="ward-activity"
                    >

                        <div className="ward-activity__icon">

                            {index === 0 ? (
                                <ClockCircleOutlined />
                            ) : (
                                <CheckCircleOutlined />
                            )}

                        </div>

                        <div className="ward-activity__content">

                            <strong>
                                {activity.title}
                            </strong>

                            <span>
                                {activity.school}
                            </span>

                        </div>

                        <time>
                            {activity.time}
                        </time>

                    </div>
                )
            )}

        </div>
    );
}