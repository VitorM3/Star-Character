import { useLayoutEffect, useState } from "react";
import CardInformation from "../../components/CardInformation";
import ReturnButton from "../../components/ReturnButton";
import { ICharacter } from "../../models/interface/character";
import apiSwapi from "../../services/apis/SWAPI";
import { CardsMovies, Header, Information, InformationCharacterBase } from "./styled";
import { useParams } from "react-router-dom";
import CardMovies from "../../components/CardMovies";
import { IMovie } from "../../models/interface/movie";

const InformationCharacter = () => {
    const [selectedCharacter, setSelectedCharacter] = useState<ICharacter>()
    const [movies, setMovies] = useState<IMovie[]>([])
    const { id } = useParams()

    useLayoutEffect(() => {
        return () => {
            getOneCharacterInApiSwapi().then((character) => {
                if (character === undefined) return
                setMovies([])
                getAllMoviesInTheCharacter(character?.films)
            })
        }
    }, [])


    /**
     * Pegar apenas um personagem através do ID passado por parametro na URL
     * @returns apenas um personagem
     */
    const getOneCharacterInApiSwapi = async () => {
        if (id === undefined) return
        let character = await apiSwapi.getCharacterById(id)
        if (character === undefined) return
        setSelectedCharacter(character)
        return character
    }
    /**
     * Pegar todos os filmes que o respectivo personagem participou
     * @param allMovies Todas as URLs dos respectivos filmes
     */
    const getAllMoviesInTheCharacter = async (allMovies: string[]) => {
        // Pegar todos os filmes que o personagem participou
        allMovies.forEach((movieURL) => {
            let movieId = movieURL.split('/')[5]
            // Pegar o respectivo filme 
            apiSwapi.getMovieById(movieId).then((movie) => {
                if (movie === undefined) return
                setMovies(prevState => [...prevState, movie!])
            })

        })
    }

    return (
        <InformationCharacterBase>
            <Header><ReturnButton /></Header>

            <Information>
                {selectedCharacter !== undefined ?
                    <CardInformation
                        name={selectedCharacter!.name}
                        birth_year={selectedCharacter!.birth_year}
                        eye_color={selectedCharacter!.eye_color}
                        gender={selectedCharacter!.gender}
                        key={selectedCharacter!.name} />
                    : null
                }

                <h2>Filmes</h2>
                <CardsMovies>
                    {movies.map((movie) => {
                        return <CardMovies
                            title={movie.title}
                            date={movie.release_date}
                            movieId={movie.episode_id}
                            key={movie.episode_id} />
                    })}
                </CardsMovies>

            </Information>

        </InformationCharacterBase>
    );
}

export default InformationCharacter