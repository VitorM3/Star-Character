import { useRef } from "react";
import { SearchProps } from "../../models/types/search";
import { SearchIcon } from "../Images/@icons";
import { InputSearch, SearchBase } from "./styled";


const Search = ({onChange}:SearchProps) => {
    const inputSearch = useRef<HTMLInputElement>(null)

    /**
     * Verificar clique do usuário no campo de busca, para aplicar um foco para o Input de texto
     */
    const handleClickInSearch = () => {
        inputSearch.current?.focus()
    }

    return (
        <SearchBase onClick={()=> handleClickInSearch()}>
            <SearchIcon/>
            <InputSearch ref={inputSearch} placeholder={'Quem você está procurando?'} 
            onChange={(event)=> onChange(event.target.value)}/>
        </SearchBase>
    );
}

export default Search