import InstrumentString from "./instrument-string";

export default class Instrument {
   private numberOfStrings: number
   constructor(private readonly id: string, public name: string, private strings: InstrumentString[], private readonly numberOfFrets: number) {
      this.numberOfStrings = strings.length
   }

   getStrings(): Readonly<InstrumentString[]> {
      return this.strings
   }

   getString(order: number): Readonly<InstrumentString> {
      const string = this.strings.find((instrumentString: InstrumentString) => instrumentString.order === order)

      if (!string) {
         throw new Error("A corda do instrumento selecionada não foi encontrada!")
      }

      return string
   }

   getNumberOfFrets(): Readonly<number> {
      return this.numberOfFrets
   }

   changeTuning(order: number, tuning: string): void {
      const validString = this.hasString(order)

      if (!validString) {
         throw new Error("Não foi possível alterar a afinação: Corda não encontrada.")
      }

      const string = this.getString(order)

      const newString = new InstrumentString(string.order, tuning)

      this.strings = [...this.strings.filter((string) => string.order !== order), newString]

      return
   }

   private hasString(order: number): boolean {
      return Boolean(this.getString(order))
   }

   validatePosition(order: number, fret: number) {
      const validString = this.hasString(order)

      if (!validString) throw new Error("Corda inexistente inserida.")

      if (order < 0 || order > this.numberOfStrings) throw new Error("Valor de corda inválido.")

      if (fret < 1 || fret > this.numberOfFrets) throw new Error("Número de trastes inválido inserido.")

      return
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

   /**
    * Deve possuir pelo menos uma corda.
      As ordens devem começar em 1.
      As ordens devem ser sequenciais, sem lacunas.
      Não podem existir ordens duplicadas.
      A quantidade de cordas é determinada pela coleção.
    */
}