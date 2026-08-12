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
    facilityBase?: string;
    quantity: number;
    area?: number;
    status: "Tốt" | "Đang sử dụng" | "Cần nâng cấp";
}

export interface School {
    id: string;
    code: string;
    name: string;
    type: "Mầm non" | "Tiểu học" | "THCS" | "THPT";
    address: string;
    principal: string;
    teachers: number;
    students: number;
    classrooms: number;
    status: "Đang hoạt động" | "Đang nâng cấp";

    teacherBySubject?: TeacherBySubject[];
    studentByGrade?: StudentByGrade[];
    facilities?: SchoolFacility[];

    establishedYear?: number;
    phone?: string;
    email?: string;

    location?: {
        lat: number;
        lng: number;
    };
}

export const schools: School[] = [
    {
        id: "NK01",
        code: "NK-MN-01",
        name: "Trường Mầm non An Xuyên",
        type: "Mầm non",
        address: "Phường An Xuyên, Tỉnh Cà Mau",
        principal: "Nguyễn Thị Minh Anh",
        teachers: 42,
        students: 520,
        classrooms: 18,
        status: "Đang hoạt động",
    },
    {
        id: "NK02",
        code: "NK-MN-02",
        name: "Trường Mầm non Hoa Sen",
        type: "Mầm non",
        address: "Phường An Xuyên, Tỉnh Cà Mau",
        principal: "Trần Thị Thu Hà",
        teachers: 38,
        students: 460,
        classrooms: 16,
        status: "Đang hoạt động",

        establishedYear: 2010,

        phone: "0292 3xxx xxx",

        email: "dinhbolinh@cantho.edu.vn",

        location: {
            lat: 10.0342,
            lng: 105.7836,
        },

        teacherBySubject: [
            {
                subject: "Tiếng Việt",
                count: 18,
            },
            {
                subject: "Toán",
                count: 15,
            },
            {
                subject: "Tiếng Anh",
                count: 10,
            },
            {
                subject: "Tin học",
                count: 5,
            },
            {
                subject: "Âm nhạc",
                count: 4,
            },
            {
                subject: "Mỹ thuật",
                count: 4,
            },
        ],

        studentByGrade: [
            {
                grade: "Khối 1",
                count: 250,
            },
            {
                grade: "Khối 2",
                count: 245,
            },
            {
                grade: "Khối 3",
                count: 260,
            },
            {
                grade: "Khối 4",
                count: 270,
            },
            {
                grade: "Khối 5",
                count: 255,
            },
        ],

        // facilities: [
        //     {
        //         name: "Phòng học",
        //         quantity: 30,
        //         area: 48,
        //         status: "Tốt",
        //     },
        //     {
        //         name: "Phòng máy tính",
        //         quantity: 2,
        //         area: 72,
        //         status: "Đang sử dụng",
        //     },
        //     {
        //         name: "Phòng ngoại ngữ",
        //         quantity: 2,
        //         area: 60,
        //         status: "Tốt",
        //     },
        //     {
        //         name: "Thư viện",
        //         quantity: 1,
        //         area: 96,
        //         status: "Tốt",
        //     },
        //     {
        //         name: "Phòng y tế",
        //         quantity: 1,
        //         area: 32,
        //         status: "Đang sử dụng",
        //     },
        //     {
        //         name: "Sân thể thao",
        //         quantity: 1,
        //         area: 1200,
        //         status: "Tốt",
        //     },
        // ],
        facilities: [
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 1",
                quantity: 24,
                area: 1680,
                status: "Tốt",
            },
            {
                name: "Phòng Tin học",
                facilityBase: "Cơ sở 1",
                quantity: 2,
                area: 140,
                status: "Tốt",
            },
            {
                name: "Phòng học",
                facilityBase: "Cơ sở 2",
                quantity: 18,
                area: 1260,
                status: "Tốt",
            },
            {
                name: "Phòng chức năng",
                facilityBase: "Cơ sở 2",
                quantity: 6,
                area: 420,
                status: "Cần nâng cấp",
            },
        ],
    },
    {
        id: "NK03",
        code: "NK-TH-01",
        name: "Trường Tiểu học Đinh Bộ Lĩnh",
        type: "Tiểu học",
        address: "Phường An Xuyên, Tỉnh Cà Mau",
        principal: "Lê Văn Thành",

        teachers: 72,
        students: 1280,
        classrooms: 30,

        status: "Đang hoạt động",

        establishedYear: 2010,

        phone: "0292 3xxx xxx",

        email: "dinhbolinh@cantho.edu.vn",

        location: {
            lat: 10.0342,
            lng: 105.7836,
        },

        teacherBySubject: [
            {
                subject: "Tiếng Việt",
                count: 18,
            },
            {
                subject: "Toán",
                count: 15,
            },
            {
                subject: "Tiếng Anh",
                count: 10,
            },
            {
                subject: "Tin học",
                count: 5,
            },
            {
                subject: "Âm nhạc",
                count: 4,
            },
            {
                subject: "Mỹ thuật",
                count: 4,
            },
        ],

        studentByGrade: [
            {
                grade: "Khối 1",
                count: 250,
            },
            {
                grade: "Khối 2",
                count: 245,
            },
            {
                grade: "Khối 3",
                count: 260,
            },
            {
                grade: "Khối 4",
                count: 270,
            },
            {
                grade: "Khối 5",
                count: 255,
            },
        ],

        facilities: [
            {
                name: "Phòng học",
                quantity: 30,
                area: 48,
                status: "Tốt",
            },
            {
                name: "Phòng máy tính",
                quantity: 2,
                area: 72,
                status: "Đang sử dụng",
            },
            {
                name: "Phòng ngoại ngữ",
                quantity: 2,
                area: 60,
                status: "Tốt",
            },
            {
                name: "Thư viện",
                quantity: 1,
                area: 96,
                status: "Tốt",
            },
            {
                name: "Phòng y tế",
                quantity: 1,
                area: 32,
                status: "Đang sử dụng",
            },
            {
                name: "Sân thể thao",
                quantity: 1,
                area: 1200,
                status: "Tốt",
            },
        ],
    },
    {
        id: "NK04",
        code: "NK-TH-02",
        name: "Trường Tiểu học Lê Quý Đôn",
        type: "Tiểu học",
        address: "Phường An Xuyên, Tỉnh Cà Mau",
        principal: "Phạm Thị Ngọc",
        teachers: 68,
        students: 1_150,
        classrooms: 28,
        status: "Đang hoạt động",
    },
    {
        id: "NK05",
        code: "NK-TH-03",
        name: "Trường Tiểu học Võ Thị Sáu",
        type: "Tiểu học",
        address: "Phường An Xuyên, Tỉnh Cà Mau",
        principal: "Nguyễn Văn Hùng",
        teachers: 61,
        students: 1_020,
        classrooms: 26,
        status: "Đang hoạt động",
    },
    {
        id: "NK06",
        code: "NK-THCS-01",
        name: "Trường THCS An Bình",
        type: "THCS",
        address: "Phường An Xuyên, Tỉnh Cà Mau",
        principal: "Trần Quốc Dũng",
        teachers: 82,
        students: 1_420,
        classrooms: 45,
        status: "Đang hoạt động",
    },
    {
        id: "NK07",
        code: "NK-THCS-02",
        name: "Trường THCS Lê Bình",
        type: "THCS",
        address: "Phường An Xuyên, Tỉnh Cà Mau",
        principal: "Nguyễn Thị Hồng",
        teachers: 75,
        students: 1_300,
        classrooms: 32,
        status: "Đang hoạt động",
    },
    {
        id: "NK08",
        code: "NK-THPT-01",
        name: "Trường THPT Châu Văn Liêm",
        type: "THPT",
        address: "Phường An Xuyên, Tỉnh Cà Mau",
        principal: "Phạm Minh Tuấn",
        teachers: 96,
        students: 1_680,
        classrooms: 42,
        status: "Đang hoạt động",
    },
];

