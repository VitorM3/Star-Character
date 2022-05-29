/**
 * Formatar data para o padrão brasileiro
 * @param date Data como string
 * @returns Data formatada
 */
const formatDate = (date:string) => {
let newDate = new Date(date)
return newDate.toLocaleDateString('pt-BR',{timeZone:'UTC'})
}
export default formatDate