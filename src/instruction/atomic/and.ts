import { Instruction } from "../instruction";

export class BitwiseAndInstruction extends Instruction {
    public to_asm(_instruction_index: number): string {
        return "pop rbx\npop rax\nand rbx, rax\npush rbx";
    }
    public to_wat(_instruction_index: number): string {
        throw new Error("Method not implemented.");
    }
}
