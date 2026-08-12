export interface TeacherBySubject {
    subject: string;
    count: number;
}

export interface StudentByGrade {
    grade: string;
    count: number;
}

export interface SchoolFacility {
    name: string;
    facilityBase: string;
    quantity: number;
    area?: number;
    status:
        | "Tốt"
        | "Đang sử dụng"
        | "Cần nâng cấp";
}

export interface School {
    id: string;
    code: string;
    name: string;

    type:
        | "Mầm non"
        | "Tiểu học"
        | "THCS"
        | "THPT";

    address: string;
    principal: string;

    teachers: number;
    students: number;
    classrooms: number;

    status:
        | "Đang hoạt động"
        | "Đang nâng cấp";

    teacherBySubject?: TeacherBySubject[];
    studentByGrade?: StudentByGrade[];

    facilities: SchoolFacility[];

    establishedYear?: number;
    phone?: string;
    email?: string;

    location: {
        lat: number;
        lng: number;
    };
}

export const schools: School[] = [
    // =====================================================
    // 01. PHƯỜNG AN XUYÊN
    // =====================================================

    {
        id: "NK01",
        code: "CM-AX-MN-01",
        name: "Trường Mầm non An Xuyên",
        type: "Mầm non",

        address:
            "Phường An Xuyên, Tỉnh Cà Mau",

        principal:
            "Nguyễn Thị Minh Anh",

        teachers: 42,
        students: 520,
        classrooms: 18,

        status: "Đang hoạt động",

        location: {
            lat: 9.1768,
            lng: 105.1500,
        },

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 18,
                area: 864,
                status: "Tốt",
            },
            {
                name: "Phòng chức năng",
                facilityBase: "Cơ sở 1",
                quantity: 4,
                area: 180,
                status: "Đang sử dụng",
            },
            {
                name: "Sân chơi",
                facilityBase: "Cơ sở 1",
                quantity: 1,
                area: 950,
                status: "Tốt",
            },
        ],
    },

    // =====================================================
    // 02. PHƯỜNG AN XUYÊN
    // =====================================================

    {
        id: "NK02",
        code: "CM-AX-TH-01",
        name: "Trường Tiểu học An Xuyên",
        type: "Tiểu học",

        address:
            "Phường An Xuyên, Tỉnh Cà Mau",

        principal:
            "Lê Văn Thành",

        teachers: 65,
        students: 1120,
        classrooms: 28,

        status: "Đang hoạt động",

        location: {
            lat: 9.1815,
            lng: 105.1560,
        },

        teacherBySubject: [
            {
                subject: "Tiếng Việt",
                count: 18,
            },
            {
                subject: "Toán",
                count: 16,
            },
            {
                subject: "Tiếng Anh",
                count: 10,
            },
            {
                subject: "Tin học",
                count: 6,
            },
            {
                subject: "Âm nhạc",
                count: 4,
            },
        ],

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 20,
                area: 960,
                status: "Tốt",
            },
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 2",
                quantity: 8,
                area: 384,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 1",
                quantity: 2,
                area: 144,
                status: "Tốt",
            },
            {
                name: "Thư viện",
                facilityBase: "Cơ sở 1",
                quantity: 1,
                area: 120,
                status: "Tốt",
            },
        ],
    },

    // =====================================================
    // 03. PHƯỜNG LÝ VĂN LÂM
    // =====================================================

    {
        id: "NK03",
        code: "CM-LVL-TH-01",
        name: "Trường Tiểu học Lý Văn Lâm",
        type: "Tiểu học",

        address:
            "Phường Lý Văn Lâm, Tỉnh Cà Mau",

        principal:
            "Phạm Thị Ngọc",

        teachers: 58,
        students: 980,
        classrooms: 25,

        status: "Đang hoạt động",

        location: {
            lat: 9.1610,
            lng: 105.1250,
        },

        teacherBySubject: [
            {
                subject: "Tiếng Việt",
                count: 16,
            },
            {
                subject: "Toán",
                count: 14,
            },
            {
                subject: "Tiếng Anh",
                count: 9,
            },
            {
                subject: "Tin học",
                count: 5,
            },
        ],

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 25,
                area: 1200,
                status: "Tốt",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 1",
                quantity: 2,
                area: 140,
                status: "Đang sử dụng",
            },
            {
                name: "Thư viện",
                facilityBase: "Cơ sở 1",
                quantity: 1,
                area: 110,
                status: "Tốt",
            },
            {
                name: "Phòng chức năng",
                facilityBase: "Cơ sở 2",
                quantity: 3,
                area: 180,
                status: "Đang sử dụng",
            },
        ],
    },

    // =====================================================
    // 04. PHƯỜNG TÂN THÀNH
    // =====================================================

    {
        id: "NK04",
        code: "CM-TT-THCS-01",
        name: "Trường THCS Tân Thành",
        type: "THCS",

        address:
            "Phường Tân Thành, Tỉnh Cà Mau",

        principal:
            "Trần Quốc Dũng",

        teachers: 74,
        students: 1280,
        classrooms: 32,

        status: "Đang hoạt động",

        location: {
            lat: 9.1875,
            lng: 105.1050,
        },

        teacherBySubject: [
            {
                subject: "Toán",
                count: 12,
            },
            {
                subject: "Ngữ văn",
                count: 11,
            },
            {
                subject: "Tiếng Anh",
                count: 9,
            },
            {
                subject: "Khoa học tự nhiên",
                count: 12,
            },
            {
                subject: "Tin học",
                count: 5,
            },
        ],

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 20,
                area: 960,
                status: "Tốt",
            },
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 2",
                quantity: 12,
                area: 576,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 2",
                quantity: 2,
                area: 140,
                status: "Cần nâng cấp",
            },
            {
                name: "Phòng thí nghiệm",
                facilityBase: "Cơ sở 1",
                quantity: 3,
                area: 270,
                status: "Đang sử dụng",
            },
        ],
    },

    // =====================================================
    // 05. PHƯỜNG TÂN THÀNH
    // =====================================================

    {
        id: "NK05",
        code: "CM-TT-MN-01",
        name: "Trường Mầm non Tân Thành",
        type: "Mầm non",

        address:
            "Phường Tân Thành, Tỉnh Cà Mau",

        principal:
            "Nguyễn Thị Hồng",

        teachers: 36,
        students: 430,
        classrooms: 15,

        status: "Đang hoạt động",

        location: {
            lat: 9.1950,
            lng: 105.1120,
        },

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 10,
                area: 480,
                status: "Tốt",
            },
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 2",
                quantity: 5,
                area: 240,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng chức năng",
                facilityBase: "Cơ sở 1",
                quantity: 3,
                area: 150,
                status: "Tốt",
            },
            {
                name: "Sân chơi",
                facilityBase: "Cơ sở 1",
                quantity: 1,
                area: 720,
                status: "Tốt",
            },
        ],
    },

    // =====================================================
    // 06. PHƯỜNG HÒA THÀNH
    // =====================================================

    {
        id: "NK06",
        code: "CM-HT-TH-01",
        name: "Trường Tiểu học Hòa Thành",
        type: "Tiểu học",

        address:
            "Phường Hòa Thành, Tỉnh Cà Mau",

        principal:
            "Nguyễn Văn Hùng",

        teachers: 54,
        students: 910,
        classrooms: 23,

        status: "Đang hoạt động",

        location: {
            lat: 9.1450,
            lng: 105.1750,
        },

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 23,
                area: 1104,
                status: "Tốt",
            },
            {
                name: "Phòng chức năng",
                facilityBase: "Cơ sở 1",
                quantity: 5,
                area: 300,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 1",
                quantity: 2,
                area: 140,
                status: "Tốt",
            },
        ],
    },

    // =====================================================
    // 07. PHƯỜNG BẠC LIÊU
    // =====================================================

    {
        id: "NK07",
        code: "CM-BL-TH-01",
        name: "Trường Tiểu học Bạc Liêu",
        type: "Tiểu học",

        address:
            "Phường Bạc Liêu, Tỉnh Cà Mau",

        principal:
            "Đặng Minh Tuấn",

        teachers: 68,
        students: 1240,
        classrooms: 30,

        status: "Đang hoạt động",

        location: {
            lat: 9.2850,
            lng: 105.7200,
        },

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 30,
                area: 1440,
                status: "Tốt",
            },
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 2",
                quantity: 10,
                area: 480,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 2",
                quantity: 3,
                area: 210,
                status: "Tốt",
            },
            {
                name: "Thư viện",
                facilityBase: "Cơ sở 1",
                quantity: 1,
                area: 140,
                status: "Tốt",
            },
        ],
    },

    // =====================================================
    // 08. PHƯỜNG BẠC LIÊU
    // =====================================================

    {
        id: "NK08",
        code: "CM-BL-THPT-01",
        name: "Trường THPT Bạc Liêu",
        type: "THPT",

        address:
            "Phường Bạc Liêu, Tỉnh Cà Mau",

        principal:
            "Phạm Minh Tuấn",

        teachers: 92,
        students: 1650,
        classrooms: 40,

        status: "Đang hoạt động",

        location: {
            lat: 9.2870,
            lng: 105.7280,
        },

        teacherBySubject: [
            {
                subject: "Toán",
                count: 15,
            },
            {
                subject: "Ngữ văn",
                count: 14,
            },
            {
                subject: "Tiếng Anh",
                count: 12,
            },
            {
                subject: "Vật lý",
                count: 8,
            },
            {
                subject: "Hóa học",
                count: 7,
            },
            {
                subject: "Sinh học",
                count: 6,
            },
        ],

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 30,
                area: 1440,
                status: "Tốt",
            },
            {
                name: "Phòng thí nghiệm",
                facilityBase: "Cơ sở 1",
                quantity: 4,
                area: 360,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 2",
                quantity: 3,
                area: 210,
                status: "Cần nâng cấp",
            },
            {
                name: "Thư viện",
                facilityBase: "Cơ sở 1",
                quantity: 1,
                area: 180,
                status: "Tốt",
            },
        ],
    },

    // =====================================================
    // 09. PHƯỜNG VĨNH TRẠCH
    // =====================================================

    {
        id: "NK09",
        code: "CM-VT-THCS-01",
        name: "Trường THCS Vĩnh Trạch",
        type: "THCS",

        address:
            "Phường Vĩnh Trạch, Tỉnh Cà Mau",

        principal:
            "Trần Văn Dũng",

        teachers: 62,
        students: 1080,
        classrooms: 28,

        status: "Đang hoạt động",

        location: {
            lat: 9.2750,
            lng: 105.6850,
        },

        teacherBySubject: [
            {
                subject: "Toán",
                count: 11,
            },
            {
                subject: "Ngữ văn",
                count: 10,
            },
            {
                subject: "Tiếng Anh",
                count: 8,
            },
            {
                subject: "Khoa học tự nhiên",
                count: 10,
            },
        ],

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 28,
                area: 1344,
                status: "Tốt",
            },
            {
                name: "Thư viện",
                facilityBase: "Cơ sở 1",
                quantity: 1,
                area: 120,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 2",
                quantity: 2,
                area: 140,
                status: "Tốt",
            },
        ],
    },

    // =====================================================
    // 10. PHƯỜNG BẠC LIÊU ĐÔNG
    // =====================================================

    {
        id: "NK10",
        code: "CM-BLD-MN-01",
        name: "Trường Mầm non Bạc Liêu Đông",
        type: "Mầm non",

        address:
            "Phường Bạc Liêu Đông, Tỉnh Cà Mau",

        principal:
            "Trần Thị Thu Hà",

        teachers: 34,
        students: 410,
        classrooms: 14,

        status: "Đang hoạt động",

        location: {
            lat: 9.3150,
            lng: 105.7600,
        },

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 14,
                area: 672,
                status: "Tốt",
            },
            {
                name: "Phòng chức năng",
                facilityBase: "Cơ sở 1",
                quantity: 3,
                area: 180,
                status: "Đang sử dụng",
            },
            {
                name: "Sân chơi",
                facilityBase: "Cơ sở 1",
                quantity: 1,
                area: 680,
                status: "Tốt",
            },
        ],
    },

    // =====================================================
    // 11. PHƯỜNG BẠC LIÊU TÂY
    // =====================================================

    {
        id: "NK11",
        code: "CM-BLT-TH-01",
        name: "Trường Tiểu học Bạc Liêu Tây",
        type: "Tiểu học",

        address:
            "Phường Bạc Liêu Tây, Tỉnh Cà Mau",

        principal:
            "Nguyễn Văn Bình",

        teachers: 56,
        students: 940,
        classrooms: 24,

        status: "Đang hoạt động",

        location: {
            lat: 9.2450,
            lng: 105.6600,
        },

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 18,
                area: 864,
                status: "Tốt",
            },
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 2",
                quantity: 6,
                area: 288,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 1",
                quantity: 2,
                area: 140,
                status: "Đang sử dụng",
            },
        ],
    },

    // =====================================================
    // 12. PHƯỜNG GIÁ RAI
    // =====================================================

    {
        id: "NK12",
        code: "CM-GR-THCS-01",
        name: "Trường THCS Giá Rai",
        type: "THCS",

        address:
            "Phường Giá Rai, Tỉnh Cà Mau",

        principal:
            "Lê Quốc Khánh",

        teachers: 70,
        students: 1190,
        classrooms: 30,

        status: "Đang hoạt động",

        location: {
            lat: 9.2400,
            lng: 105.4200,
        },

        teacherBySubject: [
            {
                subject: "Toán",
                count: 12,
            },
            {
                subject: "Ngữ văn",
                count: 11,
            },
            {
                subject: "Tiếng Anh",
                count: 9,
            },
            {
                subject: "Khoa học tự nhiên",
                count: 11,
            },
            {
                subject: "Tin học",
                count: 5,
            },
        ],

        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 30,
                area: 1440,
                status: "Tốt",
            },
            {
                name: "Phòng thí nghiệm",
                facilityBase: "Cơ sở 1",
                quantity: 3,
                area: 270,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 2",
                quantity: 2,
                area: 140,
                status: "Cần nâng cấp",
            },
            {
                name: "Thư viện",
                facilityBase: "Cơ sở 1",
                quantity: 1,
                area: 150,
                status: "Tốt",
            },
        ],
    },
];