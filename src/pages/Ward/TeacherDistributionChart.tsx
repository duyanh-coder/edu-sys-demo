import ReactECharts from "echarts-for-react";

interface Props {
    data: {
        name: string;
        value: number;
    }[];
}

export default function TeacherDistributionChart({
    data,
}: Props) {
    const option = {
        tooltip: {
            trigger: "axis",
        },

        grid: {
            left: 45,
            right: 25,
            top: 20,
            bottom: 45,
        },

        xAxis: {
            type: "category",
            data: data.map(
                (item) => item.name
            ),

            axisLabel: {
                interval: 0,
                rotate: 20,
            },
        },

        yAxis: {
            type: "value",
        },

        series: [
            {
                name: "Giáo viên",
                type: "bar",
                data: data.map(
                    (item) => item.value
                ),

                barWidth: "45%",
            },
        ],
    };

    return (
        <ReactECharts
            option={option}
            style={{
                width: "100%",
                height: 320,
            }}
            opts={{
                renderer: "svg",
            }}
        />
    );
}