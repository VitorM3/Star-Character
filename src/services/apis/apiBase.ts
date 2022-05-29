import axios,{AxiosInstance} from 'axios'

class ApiBase{
    /**
     * Instância de conexão da biblioteca Axios para realizar requisições HTTP
     */
    protected api: AxiosInstance
    /**
     * Classe base para conexão com a API
     * @param host Host da respectiva API
     */
    constructor(host:string){
        this.api = axios.create({baseURL:host})
    }
}

export default ApiBase