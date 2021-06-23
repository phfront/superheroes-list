export enum SuperheroTypes {
  LOAD_HERO_REQUEST = "superhero/LOAD_HERO_REQUEST",
  LOAD_HERO_SUCCESS = "superhero/LOAD_HERO_SUCCESS",
  LOAD_HERO_FAILURE = "superhero/LOAD_HERO_FAILURE",
  CLEAR_HERO = "superhero/CLEAR_HERO",
}

export interface Superhero {
  id: string;
  name: string;
  response: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
  biography: {
    "full-name": string;
    "alter-egos": string;
    aliases: string[];
    "place-of-birth": string;
    "first-appearance": string;
    publisher: string;
    alignment: string;
  };
  appearance: {
    gender: string;
    race: string;
    height: string;
    weight: string;
    "eye-color": string;
    "hair-color": string;
  };
  work: { occupation: string; base: string };
  connections: { "group-affiliation": string; relatives: string };
  image: {
    url: string;
  };
}

export interface SuperheroState {
  readonly data: Superhero | null;
  readonly loading: boolean;
  readonly error: boolean;
}
