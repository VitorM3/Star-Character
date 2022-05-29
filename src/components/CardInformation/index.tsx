import { CardInformationProps } from "../../models/types/cardInformation";
import { DeathStar } from "../Images/@icons";
import { CardInformationBase, Content, Data, IconAndTitle, Informations } from "./styled";


const CardInformation = ({ name, birth_year, eye_color, gender }: CardInformationProps) => {
    return (
        <CardInformationBase>
            <IconAndTitle>
                <DeathStar />
                <h1>{name}</h1>
            </IconAndTitle>
            <Informations>
                <h1>Informações Gerais</h1>
                <Content>
                    <Data>
                        <h3 className="field">Nome:</h3>
                        <h3>{name}</h3>
                    </Data>
                    <Data>
                        <h3 className="field">Gênero:</h3>
                        <h3>{gender === 'male' ? 'Masculino' : gender === 'female' ? 'Feminino' : 'N/A'}</h3>
                    </Data>
                </Content>

                <Content>
                    <Data>
                        <h3 className="field">Ano de aniversário:</h3>
                        <h3>{birth_year == 'unknown' ? '?' : birth_year}</h3>
                    </Data>
                    <Data>
                        <h3 className="field">Cor dos olhos:</h3>
                        <h3>{eye_color}</h3>
                    </Data>
                </Content>
            </Informations>
        </CardInformationBase>
    );
}

export default CardInformation