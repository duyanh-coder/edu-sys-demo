import ReactECharts from "echarts-for-react";

interface TeacherChartProps {
    data?: {
        subject: string;
        count: number;
    }[];
}

export default function TeacherChart({
    data = [],
}: TeacherChartProps) {
    const option = {
        tooltip: {
            trigger: "axis",
        },

        grid: {
            left: 45,
            right: 20,
            top: 20,
            bottom: 40,
        },

        xAxis: {
            type: "category",
            data: data.map((item) => item.subject),
        },

        yAxis: {
            type: "value",
        },

        series: [
            {
                name: "Giáo viên",
                type: "bar",

                barWidth: "45%",

                data: data.map((item) => item.count),
            },
        ],
    };

    return (
        <ReactECharts
            option={option}
            style={{
                width: "100%",
                height: "300px",
            }}
            opts={{
                renderer: "svg",
            }}
        />
    );
}