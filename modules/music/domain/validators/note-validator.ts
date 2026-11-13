import { Note } from "tonal";

export function isValidNote(note: string): boolean {
    const parsedNote = Note.get(note);

    return !parsedNote.empty && typeof parsedNote.oct === "number";
}