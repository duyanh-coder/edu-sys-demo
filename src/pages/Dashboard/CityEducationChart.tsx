import ReactECharts from "echarts-for-react";

const option = {
    tooltip: {
        trigger: "axis",
    },

    legend: {
        bottom: 0,
    },

    grid: {
        left: 45,
        right: 25,
        top: 30,
        bottom: 55,
    },

    xAxis: {
        type: "category",

        data: [
            "Mầm non",
            "Tiểu học",
            "THCS",
            "THPT",
            "GDTX",
        ],
    },

    yAxis: {
        type: "value",
    },

    series: [
        {
            name: "Cơ sở",
            type: "bar",

            data: [
                320,
                360,
                300,
                140,
                80,
            ],
        },
    ],
};

export default function CityEducationChart() {
    return (
        <ReactECharts
            option={option}
            style={{
                width: "100%",
                height: "360px",
            }}
            opts={{
                renderer: "svg",
            }}
        />
    );
}