export class CriarDependenteCommand {
    constructor(
        public readonly nome: string,
        public readonly responsavelId: number
    ) { }
}