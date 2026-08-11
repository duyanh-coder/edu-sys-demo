import ReactECharts from "echarts-for-react";

const option = {
    tooltip: {
        trigger: "axis",
    },

    grid: {
        left: 45,
        right: 20,
        top: 30,
        bottom: 35,
    },

    xAxis: {
        type: "category",

        data: [
            "Mầm non",
            "Tiểu học",
            "THCS",
            "THPT",
        ],
    },

    yAxis: {
        type: "value",
    },

    series: [
        {
            name: "Giáo viên",
            type: "bar",

            barWidth: "45%",

            data: [
                230,
                390,
                360,
                104,
            ],
        },
    ],
};

export default function NinhKieuTeacherChart() {
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