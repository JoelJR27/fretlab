"use client";

import { useEffect, useRef, useState } from "react";
import * as Tone from "tone";
import { Midi } from "tonal";

export function getNoteAtFret(): number {
  const stringMidi = Midi.toMidi("E2");

  if (stringMidi === null) {
    throw new Error("Nota inválida");
  }

  return stringMidi;
}

export default function Home() {
  const samplerRef = useRef<Tone.Sampler | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const sampler = new Tone.Sampler({
      urls: {
        E2: "INSGuitarNylon_StringLowE_Vel02Pick_E2_01.ogg",
      },
      baseUrl: "/samples/nylon-guitar/ogg/",
      onload: () => {
        console.log("Sample carregado!");
        setIsLoaded(true);
      },
    }).toDestination();

    samplerRef.current = sampler;

    return () => {
      sampler.dispose();
      samplerRef.current = null;
    };
  }, []);

  async function handlePlayNote() {
    if (!samplerRef.current || !isLoaded) return;

    await Tone.start();

    const midi = getNoteAtFret();
    const note = Midi.midiToNoteName(midi);

    console.log({ midi, note });

    samplerRef.current.triggerAttackRelease(note, 10);
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>FretLab - Sample Test</h1>

      <p>Nota: E2</p>

      <p>Status: {isLoaded ? "Samples carregados" : "Carregando..."}</p>

      <button disabled={!isLoaded} onClick={handlePlayNote}>
        Reproduzir E2
      </button>
    </main>
  );
}
