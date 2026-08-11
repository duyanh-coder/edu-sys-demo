import ReactECharts from "echarts-for-react";

interface Props {
    data: {
        name: string;
        value: number;
    }[];
}

export default function EducationDistributionChart({
    data,
}: Props) {
    const option = {
        tooltip: {
            trigger: "item",
        },

        legend: {
            bottom: 0,
        },

        series: [
            {
                name: "Cơ sở giáo dục",

                type: "pie",

                radius: [
                    "45%",
                    "70%",
                ],

                center: [
                    "50%",
                    "45%",
                ],

                data,

                label: {
                    show: false,
                },
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