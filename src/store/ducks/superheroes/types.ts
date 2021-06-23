export enum SuperheroesTypes {
    LOAD_REQUEST = 'superheros/LOAD_REQUEST',
    LOAD_SUCCESS = 'superheros/LOAD_SUCCESS',
    LOAD_FAILURE = 'superheros/LOAD_FAILURE'
}

interface Image {
    url: string
}

export interface Superheroes {
    id: string
    name: string
    image: Image
}

export interface SuperheroesState {
    readonly data: Superheroes[]
    readonly search: string
    readonly loading: boolean
    readonly error: boolean
    readonly searchDone: boolean
}
