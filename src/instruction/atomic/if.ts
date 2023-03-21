import { ArgumentInstruction } from "../argument_instruction";

export class IfInstruction extends ArgumentInstruction<number> {
    public to_asm(_instruction_index: number): string {
        return `pop rax\ntest rax, rax\njz addr_${this.argument}`;
    }
    public to_wat(_instruction_index: number): string {
        throw new Error("Method not implemented.");
    }
}
