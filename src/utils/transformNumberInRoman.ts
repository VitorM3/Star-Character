/**
 * Tranformar números em romanos
 * @param number Número
 * @returns Número em romanos
 */
const transformNumberInRoman = (number: number) => {
    const numeralsRoman = [' ','I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
        'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII',
        'XIX', 'XX']
    // Retornar numero em romano
    return numeralsRoman[number]
}

export default transformNumberInRoman