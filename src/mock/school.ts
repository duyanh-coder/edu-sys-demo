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
}

export const schools: School[] = [
    {
        id: "NK01",
        code: "NK-MN-01",
        name: "Trường Mầm non Ninh Kiều",
        type: "Mầm non",
        address: "Phường Ninh Kiều, TP. Cần Thơ",
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
        address: "Phường Ninh Kiều, TP. Cần Thơ",
        principal: "Trần Thị Thu Hà",
        teachers: 38,
        students: 460,
        classrooms: 16,
        status: "Đang hoạt động",
    },
    {
        id: "NK03",
        code: "NK-TH-01",
        name: "Trường Tiểu học Đinh Bộ Lĩnh",
        type: "Tiểu học",
        address: "Phường Ninh Kiều, TP. Cần Thơ",
        principal: "Lê Văn Thành",
        teachers: 72,
        students: 1_280,
        classrooms: 30,
        status: "Đang hoạt động",
    },
    {
        id: "NK04",
        code: "NK-TH-02",
        name: "Trường Tiểu học Lê Quý Đôn",
        type: "Tiểu học",
        address: "Phường Ninh Kiều, TP. Cần Thơ",
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
        address: "Phường Ninh Kiều, TP. Cần Thơ",
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
        address: "Phường Ninh Kiều, TP. Cần Thơ",
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
        address: "Phường Ninh Kiều, TP. Cần Thơ",
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
        address: "Phường Ninh Kiều, TP. Cần Thơ",
        principal: "Phạm Minh Tuấn",
        teachers: 96,
        students: 1_680,
        classrooms: 42,
        status: "Đang hoạt động",
    },
];