import ApiBase from "./apiBase"
import { toast } from 'react-toastify'
import { ICharacter } from "../../models/interface/character"
import { IMovie } from "../../models/interface/movie"

class Swapi extends ApiBase {
    /**
     * Conexão com a API SWAPI
     * @param host URL da API
     */
    constructor(host: string) {
        super(host)
    }

    /**
     * Pegar todas os perfis cadastradas
     * @returns todas os perfis cadastradas
     */
    async getAllCharacter():Promise<ICharacter[] | undefined> {
        try {
            const allCharacter = await this.api.get('/people/')
            return allCharacter.data.results
        } catch (error: any) {
            toast.error('Ocorreu um erro na conexão com a API SWAPI')
        }
    }
    /**
     * Pegar apenas uma perfil cadastrada, através de seu ID
     * @param idCharacter Id do respectivo personagem
     * @returns Apenas uma perfil cadastrada
     */
    async getCharacterById(idCharacter:string):Promise<ICharacter | undefined>{
        try {
            const selectedCharacter = await this.api.get(`/people/${idCharacter}`)
            return selectedCharacter.data
        } catch (error) {
            toast.error('Ocorreu um erro na conexão com a API SWAPI')
        }
    }
    /**
     * Pegar apenas um filme cadastrado, através de seu ID
     * @param idMovie ID do respectivo filme
     * @returns Apenas um filme cadastrado
     */
    async getMovieById(idMovie:string):Promise<IMovie | undefined>{
        try {
            const selectedMovie = await this.api.get(`/films/${idMovie}`)
            return selectedMovie.data
        } catch (error) {
            toast.error('Ocorreu um erro na conexão com a API SWAPI')
        }
    }

}
/**
 * Instância de conexão com a API SWAPI 
 */
const apiSwapi = new Swapi('https://swapi.dev/api')

export default apiSwapi