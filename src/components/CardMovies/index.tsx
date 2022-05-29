import { CardMoviesProps } from "../../models/types/cardMovies";
import formatDate from "../../utils/formatDate";
import transformNumberInRoman from "../../utils/transformNumberInRoman";
import { CardMoviesBase, Content, NumberMovie } from "./styled";

const CardMovies = ({title,date,movieId}:CardMoviesProps) => {
    return (
        <CardMoviesBase>
            <NumberMovie>{transformNumberInRoman(movieId)}</NumberMovie>
            <Content>
            <h3>{title}</h3>
            <h3 className="year">{formatDate(date)}</h3>
            </Content>
        </CardMoviesBase>
    );
}

export default CardMovies