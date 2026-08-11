import ReactECharts from "echarts-for-react";

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
            radius: ["45%", "70%"],

            label: {
                formatter: "{b}\n{c} cơ sở",
            },

            data: [
                {
                    value: 8,
                    name: "Mầm non",
                },
                {
                    value: 9,
                    name: "Tiểu học",
                },
                {
                    value: 7,
                    name: "THCS",
                },
                {
                    value: 1,
                    name: "THPT",
                },
            ],
        },
    ],
};

export default function NinhKieuEducationChart() {
    return (
        <ReactECharts
            option={option}
            style={{
                width: "100%",
                height: "320px",
            }}
            opts={{
                renderer: "svg",
            }}
        />
    );
}