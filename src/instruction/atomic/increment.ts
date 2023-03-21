import { Instruction } from "../instruction";

export class IncrementInstruction extends Instruction {
    public to_asm(_instruction_index: number): string {
        return "push 1\npop rbx\npop rax\nadd rax, rbx\npush rax";
    }
    public to_wat(_instruction_index: number): string {
        throw new Error("Method not implemented.");
    }
}
