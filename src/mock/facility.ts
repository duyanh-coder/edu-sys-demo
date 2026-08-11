export type FacilityStatus =
    | "Tốt"
    | "Đang sử dụng"
    | "Cần nâng cấp";

export type FacilityCategory =
    | "Phòng học"
    | "Phòng chức năng"
    | "Thiết bị"
    | "Khu thể thao";

export interface Facility {
    id: string;
    code: string;
    schoolId: string;
    schoolName: string;

    category: FacilityCategory;

    name: string;

    quantity: number;

    area?: number;

    capacity?: number;

    status: FacilityStatus;

    lastInspection?: string;
}

export const facilities: Facility[] = [
    {
        id: "CSVC001",
        code: "NK03-PH-001",
        schoolId: "NK03",
        schoolName: "Trường Tiểu học Đinh Bộ Lĩnh",
        category: "Phòng học",
        name: "Phòng học tiêu chuẩn",
        quantity: 30,
        area: 48,
        capacity: 40,
        status: "Tốt",
        lastInspection: "2026-06-15",
    },

    {
        id: "CSVC002",
        code: "NK03-PF-001",
        schoolId: "NK03",
        schoolName: "Trường Tiểu học Đinh Bộ Lĩnh",
        category: "Phòng chức năng",
        name: "Phòng Tin học",
        quantity: 2,
        area: 72,
        capacity: 40,
        status: "Đang sử dụng",
        lastInspection: "2026-05-20",
    },

    {
        id: "CSVC003",
        code: "NK03-PF-002",
        schoolId: "NK03",
        schoolName: "Trường Tiểu học Đinh Bộ Lĩnh",
        category: "Phòng chức năng",
        name: "Thư viện",
        quantity: 1,
        area: 96,
        capacity: 60,
        status: "Tốt",
        lastInspection: "2026-04-12",
    },

    {
        id: "CSVC004",
        code: "NK06-PH-001",
        schoolId: "NK06",
        schoolName: "Trường THCS An Bình",
        category: "Phòng học",
        name: "Phòng học tiêu chuẩn",
        quantity: 45,
        area: 52,
        capacity: 45,
        status: "Tốt",
        lastInspection: "2026-06-10",
    },

    {
        id: "CSVC005",
        code: "NK06-PF-001",
        schoolId: "NK06",
        schoolName: "Trường THCS An Bình",
        category: "Phòng chức năng",
        name: "Phòng thí nghiệm",
        quantity: 3,
        area: 72,
        capacity: 40,
        status: "Đang sử dụng",
        lastInspection: "2026-05-18",
    },

    {
        id: "CSVC006",
        code: "NK08-TS-001",
        schoolId: "NK08",
        schoolName: "Trường THPT Châu Văn Liêm",
        category: "Thiết bị",
        name: "Máy tính",
        quantity: 120,
        capacity: 120,
        status: "Đang sử dụng",
        lastInspection: "2026-05-25",
    },

    {
        id: "CSVC007",
        code: "NK08-TS-002",
        schoolId: "NK08",
        schoolName: "Trường THPT Châu Văn Liêm",
        category: "Thiết bị",
        name: "Máy chiếu",
        quantity: 28,
        status: "Cần nâng cấp",
        lastInspection: "2026-03-20",
    },

    {
        id: "CSVC008",
        code: "NK08-SPORT-001",
        schoolId: "NK08",
        schoolName: "Trường THPT Châu Văn Liêm",
        category: "Khu thể thao",
        name: "Sân thể thao",
        quantity: 1,
        area: 1800,
        capacity: 500,
        status: "Tốt",
        lastInspection: "2026-04-28",
    },
];