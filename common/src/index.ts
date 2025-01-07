import { z } from "zod";
export const signupInput = z.object({
    username: z.string(),
    password: z.string()
})
console.log("hi there");

export type SignupParams = z.infer<typeof signupInput>;

export function isOdd(num: number): boolean {
    if (num % 2 === 0) {
        return false;
    } else {
        return true;
    }
}

export function firstEl(arr: string[]): string {
    return arr[0];
}