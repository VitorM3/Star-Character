
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import CardCharacter from "../../components/CardCharacter";
import { ObiWan } from "../../components/Images/@icons";
import Search from "../../components/Search";
import { ICharacter } from "../../models/interface/character";
import apiSwapi from "../../services/apis/SWAPI";
import { AllCardsCharacter, HomeBase, NotFound, SearchBar, Title } from "./styled";

const Home = () => {
    const [allCharacter, setAllCharacter] = useState<ICharacter[]>([])
    const [allCharacterFilter, setAllCharacterFilter] = useState<ICharacter[]>([])
    const navigate = useNavigate()

   useEffect(()=>{
        getAllCharacterInApiSwapi()
   },[])

    /**
     * Procurar todas os perfis cadastradas na API Swapi
     * @returns Todas os perfis cadastradas na API Swapi
     */
    const getAllCharacterInApiSwapi = async () => {
        let allCharacterData = await apiSwapi.getAllCharacter()
        if (allCharacterData == undefined) return
        setAllCharacter(allCharacterData)
        setAllCharacterFilter(allCharacterData)
        return allCharacterData
    }
    /**
     * Filtrar os perfis de acordo com o que é digitado no campo de busca
     */
    const handleFilterCharacter = (Character: string) => {
        // Transformar todos os caracteres em minusculo para facilitar a busca
        let CharacterLowerCase = Character.toLowerCase()
        // Filtrar os perfis
        let filtredCharacter = allCharacter.filter((Character) => {
            let dataCharacterFilter = Character.name.toLowerCase()
            return dataCharacterFilter.indexOf(CharacterLowerCase) !== -1
        })
        // Alterar state de perfils filtradas
        setAllCharacterFilter(filtredCharacter)
    }
    /**
     * Função para abrir a pagina de informações de uma perfil
     * @param idCharacter Id da perfil
     */
    const handleOpenInformationCharacter = (urlCharacter:string) => {
        let idCharacter = urlCharacter.split('/')[5]
        navigate(`/Character/${idCharacter}`)
    }

    return (
        <HomeBase>
            <Title><h1>Seja bem vindo, patrulheiro</h1></Title>
            <SearchBar>
                <Search onChange={(person) => handleFilterCharacter(person)} />
            </SearchBar>
            <AllCardsCharacter>
                {allCharacterFilter.length != 0
                    ?
                    allCharacterFilter.map((Character) => <CardCharacter title={Character.name} 
                    key={Character.name} 
                    onClick={()=>handleOpenInformationCharacter(Character.url)} />)
                    :
                    <NotFound>
                        <ObiWan />
                        <h2>Não conseguimos encontrar esta perfil, talvez este não seja o android que você procura.</h2>
                    </NotFound>}
            </AllCardsCharacter>
        </HomeBase>
    );
}

export default Home