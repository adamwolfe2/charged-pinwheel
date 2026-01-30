import useSound from "use-sound";
import { useState, useCallback } from "react";

// In a real app, these would be real paths.
// Ideally, we'd use a context to toggle mute globally.
const SOUNDS = {
    hover: "/sounds/hover.mp3",
    click: "/sounds/click.mp3",
    success: "/sounds/success.mp3",
};

export function useInteractionSound() {
    const [playHover] = useSound(SOUNDS.hover, { volume: 0.1 }); // Subtle
    const [playClick] = useSound(SOUNDS.click, { volume: 0.5 });

    return {
        playHover: () => {
            // Safe check for browser interaction policies or missing files
            try { playHover(); } catch (e) { }
        },
        playClick: () => {
            try { playClick(); } catch (e) { }
        }
    };
}
