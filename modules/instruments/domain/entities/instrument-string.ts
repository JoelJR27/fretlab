export default class InstrumentString {
    constructor(public readonly order: number, protected tuning: string) { }

    /**
     * Regras:
        - A ordem identifica a corda.
        - A afinação representa a nota produzida pela corda solta.
        - A alteração da afinação deve ser controlada pelo Instrument.
        - A corda não deve permitir que consumidores externos alterem diretamente seu estado.
    
    Convenção adotada: a primeira corda é a mais aguda e a sexta é a mais grave no violão de seis cordas.
     */
}