import { isValidNote } from "../../../../modules/music/domain/validators/note-validator";

export default class InstrumentString {
    constructor(public readonly order: number, public readonly tuning: string) {
        this.validate()
    }

    private validate() {
        if (this.order <= 0 || !Number.isInteger(this.order)) {
            throw new Error("Ordem da corda inserida é invalida.")
        }

        if (!isValidNote(this.tuning)) throw new Error("Afinação inválida inserida.")

        return
    }

    /**
     * Regras:
        - A ordem identifica a corda.
        - A afinação representa a nota produzida pela corda solta.
        - A alteração da afinação deve ser controlada pelo Instrument.
        - A corda não deve permitir que consumidores externos alterem diretamente seu estado.
    
    Convenção adotada: a primeira corda é a mais aguda e a sexta é a mais grave no violão de seis cordas.
     */
}