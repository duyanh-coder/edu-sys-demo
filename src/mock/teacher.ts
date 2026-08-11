export type TeacherStatus =
    | "Đang công tác"
    | "Nghỉ phép"
    | "Biệt phái";

export interface Teacher {
    id: string;
    code: string;
    name: string;
    gender: "Nam" | "Nữ";
    schoolId: string;
    schoolName: string;
    subject: string;
    position: string;
    degree: string;
    experience: number;
    status: TeacherStatus;
}

export const teachers: Teacher[] = [
    {
        id: "GV001",
        code: "GV-NK-001",
        name: "Nguyễn Thị Minh Anh",
        gender: "Nữ",
        schoolId: "NK03",
        schoolName: "Trường Tiểu học Đinh Bộ Lĩnh",
        subject: "Tiếng Việt",
        position: "Giáo viên",
        degree: "Đại học",
        experience: 12,
        status: "Đang công tác",
    },
    {
        id: "GV002",
        code: "GV-NK-002",
        name: "Trần Văn Hùng",
        gender: "Nam",
        schoolId: "NK03",
        schoolName: "Trường Tiểu học Đinh Bộ Lĩnh",
        subject: "Toán",
        position: "Tổ trưởng chuyên môn",
        degree: "Thạc sĩ",
        experience: 15,
        status: "Đang công tác",
    },
    {
        id: "GV003",
        code: "GV-NK-003",
        name: "Lê Thị Thu Hà",
        gender: "Nữ",
        schoolId: "NK04",
        schoolName: "Trường Tiểu học Lê Quý Đôn",
        subject: "Tiếng Anh",
        position: "Giáo viên",
        degree: "Đại học",
        experience: 8,
        status: "Đang công tác",
    },
    {
        id: "GV004",
        code: "GV-NK-004",
        name: "Phạm Quốc Tuấn",
        gender: "Nam",
        schoolId: "NK06",
        schoolName: "Trường THCS An Bình",
        subject: "Vật lý",
        position: "Giáo viên",
        degree: "Thạc sĩ",
        experience: 10,
        status: "Đang công tác",
    },
    {
        id: "GV005",
        code: "GV-NK-005",
        name: "Nguyễn Thị Hồng",
        gender: "Nữ",
        schoolId: "NK06",
        schoolName: "Trường THCS An Bình",
        subject: "Ngữ văn",
        position: "Giáo viên",
        degree: "Đại học",
        experience: 7,
        status: "Đang công tác",
    },
    {
        id: "GV006",
        code: "GV-NK-006",
        name: "Võ Minh Đức",
        gender: "Nam",
        schoolId: "NK08",
        schoolName: "Trường THPT Châu Văn Liêm",
        subject: "Toán",
        position: "Phó Hiệu trưởng",
        degree: "Thạc sĩ",
        experience: 18,
        status: "Đang công tác",
    },
];