import { Note } from "tonal";

console.log(isValidNote("E4"))

function isValidNote(note: string): boolean {
    const isNoteEmpyt = Note.get(note).empty
    const hasOctave = (Note.get(note).oct)

    return Boolean(!isNoteEmpyt && hasOctave)
}