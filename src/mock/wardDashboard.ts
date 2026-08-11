export const ninhKieuDashboard = {
    statistics: {
        schools: 25,
        teachers: 1084,
        students: 48500,
        capacityRate: 92,
    },

    educationDistribution: [
        {
            name: "Mầm non",
            value: 5,
        },
        {
            name: "Tiểu học",
            value: 8,
        },
        {
            name: "THCS",
            value: 7,
        },
        {
            name: "THPT",
            value: 5,
        },
    ],

    teacherDistribution: [
        {
            name: "Tiếng Việt",
            value: 185,
        },
        {
            name: "Toán",
            value: 168,
        },
        {
            name: "Tiếng Anh",
            value: 142,
        },
        {
            name: "Ngữ văn",
            value: 126,
        },
        {
            name: "Khoa học",
            value: 108,
        },
        {
            name: "Tin học",
            value: 86,
        },
    ],

    alerts: [
        {
            id: "ALT001",
            title: "Thiếu giáo viên bộ môn",
            school: "Trường Tiểu học Lê Quý Đôn",
            level: "Cao",
        },
        {
            id: "ALT002",
            title: "Thiết bị phòng máy cần nâng cấp",
            school: "Trường Tiểu học Đinh Bộ Lĩnh",
            level: "Cao",
        },
        {
            id: "ALT003",
            title: "Kiểm tra khu thể thao",
            school: "Trường THCS An Bình",
            level: "Trung bình",
        },
    ],

    activities: [
        {
            time: "10 phút trước",
            title: "Cập nhật hồ sơ cơ sở giáo dục",
            school: "Trường THPT Châu Văn Liêm",
        },
        {
            time: "1 giờ trước",
            title: "Hoàn thành kiểm tra cơ sở vật chất",
            school: "Trường THCS An Bình",
        },
        {
            time: "3 giờ trước",
            title: "Cập nhật thông tin giáo viên",
            school: "Trường Tiểu học Đinh Bộ Lĩnh",
        },
        {
            time: "Hôm qua",
            title: "Tiếp nhận cảnh báo mới",
            school: "Trường Tiểu học Lê Quý Đôn",
        },
    ],

    schools: [
        {
            id: "NK01",
            name: "MN Ninh Kiều",
            type: "Mầm non",
            lat: 10.0342,
            lng: 105.7836,
        },
        {
            id: "NK03",
            name: "TH Đinh Bộ Lĩnh",
            type: "Tiểu học",
            lat: 10.0412,
            lng: 105.778,
        },
        {
            id: "NK04",
            name: "TH Lê Quý Đôn",
            type: "Tiểu học",
            lat: 10.029,
            lng: 105.791,
        },
        {
            id: "NK06",
            name: "THCS An Bình",
            type: "THCS",
            lat: 10.047,
            lng: 105.768,
        },
        {
            id: "NK08",
            name: "THPT Châu Văn Liêm",
            type: "THPT",
            lat: 10.035,
            lng: 105.79,
        },
    ],
};