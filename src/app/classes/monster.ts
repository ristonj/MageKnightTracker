import { Attack } from "./attack";

export class Monster
{
    constructor(
        public name: string,
        public attacks: Attack[],
        public abilities: string[],
        public armor: number,
        public fame: number,
        public expansion: string,
        public quantity: number
    ) {}

}