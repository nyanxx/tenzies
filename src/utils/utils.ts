import { nanoid } from "nanoid";

export type DieProperty = {
    value: number,
    isHeld: boolean
    id: string
}

export function getDieProperties(): DieProperty[] {
    return Array.from({ length: 10 }).map((): DieProperty => {
        return {
            value: Math.ceil(Math.random() * 6),
            isHeld: false,
            id: nanoid(),
        };
    });
}
