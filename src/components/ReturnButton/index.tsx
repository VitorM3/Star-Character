import { useNavigate } from "react-router-dom";
import { ArrowBack } from "../Images/@icons";
import { ReturnButtonBase } from "./styled";

const ReturnButton = () => {
    const navigate = useNavigate()
    return (
        <ReturnButtonBase onClick={()=>navigate(-1)}><ArrowBack/></ReturnButtonBase>
    );
}

export default ReturnButton