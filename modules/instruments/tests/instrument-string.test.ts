import { describe, expect, test } from "vitest"
import InstrumentString from "../domain/entities/instrument-string"

describe("InstrumentString", () => {
    const validTune = "E2"
    test("should not create a new InstrumentString with negative order", () => {
        expect(() => new InstrumentString(-1, validTune)).toThrow("Ordem da corda inserida é invalida.")
    })

    test("should not create a new InstrumentString when order is NaN", () => {
        expect(() => new InstrumentString(NaN, validTune))
    })

    test("should not create a new InstrumentString when order is Infinity", () => {
        expect(() => new InstrumentString(Infinity, validTune))
    })

    test("should not create a new InstrumentString when order is a decimal", () => {
        expect(() => new InstrumentString(3.4, validTune))
    })

    test("should not create a string when the tune don't have an octave", () => {
        expect(() => new InstrumentString(4, "D")).toThrow("Afinação inválida inserida.")
    })

    test('should not create a string with an invalid tune', () => { 
        expect(()=> new InstrumentString(4, "Z"))
     })
})