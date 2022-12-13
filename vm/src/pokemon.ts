
export interface Pokedex {
    pokemon: Pokemon[];
}

export interface Pokemon {
    id:             number;
    num:            string;
    name:           string;
    img:            string;
    type:           Type[];
    height:         string;
    weight:         string;
    candy:          string;
    candyCount?:    number;
    egg:            Egg;
    spawnChance:    number;
    avgSpawns:      number;
    spawnTime:      string;
    multipliers:    number[] | null;
    weaknesses:     Type[];
    nextEvolution?: Evolution[];
    prevEvolution?: Evolution[];
}
export type Input_STRING = string
export type Input_NUMBER = number
export type Input_OBJECT = object
export type Input_ANY = any
export type input_HEX = any
export type Return_NUM = number
export type Return_STRING = string
export type Return_OBJECT = object
export type Return_VOID = void
export type Return_HEX = string
export type VectorX = number
export type VectorY = number
export type VectorZ = number
class storage {
export enum Egg {
    NotInEggs = "Not in Eggs",
    OmanyteCandy = "Omanyte Candy",
    The10KM = "10 km",
    The2KM = "2 km",
    The5KM = "5 km",
}

export interface Evolution {
    num:  string;
    name: string;
}

export enum Type {
    Bug = "Bug",
    Dark = "Dark",
    Dragon = "Dragon",
    Electric = "Electric",
    Fairy = "Fairy",
    Fighting = "Fighting",
    Fire = "Fire",
    Flying = "Flying",
    Ghost = "Ghost",
    Grass = "Grass",
    Ground = "Ground",
    Ice = "Ice",
    Normal = "Normal",
    Poison = "Poison",
    Psychic = "Psychic",
    Rock = "Rock",
    Steel = "Steel",
    Water = "Water",
}
