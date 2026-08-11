import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
    text?: string;
}

export default function BackButton({
    text = "Quay lại",
}: BackButtonProps) {
    const navigate = useNavigate();

    return (
        <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate(-1)}
        >
            {text}
        </Button>
    );
}