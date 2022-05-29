import { CardCharacterProps } from "../../models/types/cardCharacter";
import { DeathStar } from "../Images/@icons";
import { CardCharacterBase, IconDeffault, Title } from "./styled";

const CardCharacter = ({title,onClick}:CardCharacterProps) => {
    return (
        <CardCharacterBase onClick={onClick}>
            <IconDeffault><DeathStar /></IconDeffault>
            <Title><h1>{title}</h1></Title>
        </CardCharacterBase>
    );
}

export default CardCharacter