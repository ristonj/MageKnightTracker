import { Monster } from './monster';

export class MonsterPile
{
    constructor(
        public name: string,
        public monsters: Monster[]
    ) {}
}