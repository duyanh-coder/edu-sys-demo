export interface EducationReport {
    id: string;
    title: string;
    description: string;
    category:
        | "Cơ sở giáo dục"
        | "Nhân sự"
        | "Học sinh"
        | "Cơ sở vật chất"
        | "Điều hành";

    updatedAt: string;
}

export const reports: EducationReport[] = [
    {
        id: "RP001",
        title: "Tổng hợp mạng lưới cơ sở giáo dục",
        description:
            "Thống kê số lượng cơ sở giáo dục theo cấp học và địa bàn.",
        category: "Cơ sở giáo dục",
        updatedAt: "2026-08-10",
    },
    {
        id: "RP002",
        title: "Tình hình nhân sự giáo dục",
        description:
            "Tổng hợp đội ngũ giáo viên theo bộ môn, trình độ và cơ sở.",
        category: "Nhân sự",
        updatedAt: "2026-08-10",
    },
    {
        id: "RP003",
        title: "Quy mô học sinh",
        description:
            "Thống kê học sinh theo cấp học và khối lớp.",
        category: "Học sinh",
        updatedAt: "2026-08-09",
    },
    {
        id: "RP004",
        title: "Hiện trạng cơ sở vật chất",
        description:
            "Theo dõi phòng học, phòng chức năng, thiết bị và tình trạng sử dụng.",
        category: "Cơ sở vật chất",
        updatedAt: "2026-08-08",
    },
    {
        id: "RP005",
        title: "Tổng hợp cảnh báo và kiểm tra",
        description:
            "Theo dõi các vấn đề phát sinh và tiến độ xử lý.",
        category: "Điều hành",
        updatedAt: "2026-08-11",
    },
];