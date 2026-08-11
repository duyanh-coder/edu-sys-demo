import ReactECharts from "echarts-for-react";

interface StudentChartProps {
    data?: {
        grade: string;
        count: number;
    }[];
}

export default function StudentChart({
    data = [],
}: StudentChartProps) {
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
            data: data.map((item) => item.grade),
        },

        yAxis: {
            type: "value",
        },

        series: [
            {
                name: "Học sinh",
                type: "line",

                smooth: true,

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