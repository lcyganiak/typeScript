import child from './children.interface';

export interface pracownik {
    fullName: string,
    age: number,
    workers?: pracownik[],
    position: string,
    children?: child[],

}
export interface xd {
    name: string
}


