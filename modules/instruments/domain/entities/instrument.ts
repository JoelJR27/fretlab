import InstrumentString from "./instrument-string";

export default class Instrument {
    constructor(private readonly id: string, public name: string, private readonly strings: InstrumentString[], private readonly numberOfFrets: number) {

    }

    /**
     * Responsabilidades:
        - Manter a configuração do instrumento válida.
        - Consultar uma corda pela sua ordem.
        - Consultar a afinação atual de uma corda.
        - Alterar a afinação de uma corda.
        - Validar se uma posição existe no instrumento.
        - Proteger o estado interno contra alterações externas indevidas.
     */

    /**
     * Regras do Instrument:
        1. Um instrumento possui uma quantidade definida de cordas.
        2. Um instrumento possui uma quantidade definida de casas.
        3. Cada corda possui uma ordem identificadora.
        4. Não podem existir cordas com ordens duplicadas.
        5. Todas as cordas precisam possuir afinações válidas.
        6. A configuração precisa ser validada durante a criação do instrumento.
        7. A afinação pode ser alterada depois da criação.
        8. Alterar a afinação não altera a identidade do instrumento.
        9. O array de cordas não pode ser exposto de maneira mutável.
        10. Alterações precisam validar os dados antes de modificar o estado.
     */

    /**
     * Regras das posições
        1. A casa 0 representa a corda solta.
        2. A casa 1 representa o primeiro semitom acima da corda solta.
        3. Cada casa adiciona um semitom.
        4. A casa solicitada precisa existir no instrumento.
        5. Uma corda inexistente não pode ser utilizada em uma operação.
        6. Uma casa acima do limite do instrumento deve impedir a operação.
     */

    /**
     * Regras do MusicalCalculator
        1. Não deve conhecer detalhes internos do instrumento.
        2. Deve consultar informações por métodos públicos do Instrument.
        3. Deve utilizar Tonal.js para os cálculos e conversões musicais.
        4. Deve calcular as notas considerando a afinação atual da corda.
        5. Não deve armazenar todas as notas do braço.
        6. Deve preservar a posição física que originou o resultado.
        7. Não precisa calcular frequência nessa primeira operação. 
        */
}