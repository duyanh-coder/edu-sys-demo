export type AlertLevel =
    | "Khẩn cấp"
    | "Cao"
    | "Trung bình"
    | "Thấp";

export type AlertStatus =
    | "Chưa xử lý"
    | "Đang xử lý"
    | "Đã xử lý";

export interface EducationAlert {
    id: string;
    code: string;

    title: string;
    description: string;

    schoolId: string;
    schoolName: string;

    category:
        | "Cơ sở vật chất"
        | "Nhân sự"
        | "An toàn"
        | "Vận hành";

    level: AlertLevel;
    status: AlertStatus;

    createdAt: string;
    deadline?: string;

    assignee?: string;
}

export const alerts: EducationAlert[] = [
    {
        id: "ALT001",
        code: "NK-CSVC-001",

        title: "Một số thiết bị phòng máy cần nâng cấp",

        description:
            "Một số máy tính tại phòng Tin học đã xuống cấp và cần được kiểm tra, thay thế.",

        schoolId: "NK03",
        schoolName:
            "Trường Tiểu học Đinh Bộ Lĩnh",

        category: "Cơ sở vật chất",

        level: "Cao",
        status: "Đang xử lý",

        createdAt: "2026-08-08",

        deadline: "2026-08-20",

        assignee: "Phòng Giáo dục",
    },

    {
        id: "ALT002",
        code: "NK-CSVC-002",

        title: "Máy chiếu cần kiểm tra",

        description:
            "Một số máy chiếu tại trường có dấu hiệu hoạt động không ổn định.",

        schoolId: "NK08",
        schoolName:
            "Trường THPT Châu Văn Liêm",

        category: "Cơ sở vật chất",

        level: "Trung bình",
        status: "Chưa xử lý",

        createdAt: "2026-08-09",

        deadline: "2026-08-25",

        assignee: "Ban Giám hiệu",
    },

    {
        id: "ALT003",
        code: "NK-AT-001",

        title: "Yêu cầu kiểm tra an toàn khu thể thao",

        description:
            "Cần thực hiện kiểm tra định kỳ khu vực sân thể thao và các thiết bị phục vụ học sinh.",

        schoolId: "NK06",
        schoolName:
            "Trường THCS An Bình",

        category: "An toàn",

        level: "Cao",
        status: "Chưa xử lý",

        createdAt: "2026-08-10",

        deadline: "2026-08-18",

        assignee: "Phòng Giáo dục",
    },

    {
        id: "ALT004",
        code: "NK-NST-001",

        title: "Thiếu giáo viên bộ môn",

        description:
            "Cần rà soát nhu cầu giáo viên môn Tiếng Anh cho năm học mới.",

        schoolId: "NK04",
        schoolName:
            "Trường Tiểu học Lê Quý Đôn",

        category: "Nhân sự",

        level: "Trung bình",
        status: "Đang xử lý",

        createdAt: "2026-08-07",

        deadline: "2026-08-30",

        assignee: "Tổ chức cán bộ",
    },

    {
        id: "ALT005",
        code: "NK-VH-001",

        title: "Cập nhật hồ sơ cơ sở giáo dục",

        description:
            "Một số thông tin hồ sơ cơ sở giáo dục chưa được cập nhật đầy đủ.",

        schoolId: "NK01",
        schoolName:
            "Trường Mầm non An Xuyên",

        category: "Vận hành",

        level: "Thấp",
        status: "Đã xử lý",

        createdAt: "2026-08-05",

        assignee: "Ban Giám hiệu",
    },
];