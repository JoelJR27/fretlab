import { randomUUID } from "crypto"
import Instrument from "../entities/instrument"
import InstrumentString from "../entities/instrument-string"

const defaultTuningStrings = [
    new InstrumentString(0, "E4"),
    new InstrumentString(2, "B3"),
    new InstrumentString(3, "G3"),
    new InstrumentString(4, "D3"),
    new InstrumentString(5, "A2"),
    new InstrumentString(6, "E2"),
]

export const nineTeenFretsGuitar = new Instrument(randomUUID(), "19 frets guitar", defaultTuningStrings, 19)

export const twentFretsGuitar = new Instrument(randomUUID(), "20 frets guitar", defaultTuningStrings, 20)

export const twentyFourFretsGuitar = new Instrument(randomUUID(), "24 frets guitar", defaultTuningStrings, 24)