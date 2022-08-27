import { pracownik } from './pracownik.inteface';
import child from './children.interface'
import  { position, podstaw }  from './position.enum';




class Pracownik implements pracownik {
    fullName: string
    age: number
    position: string
    children?: child[]
    workers: pracownik[]


    constructor(fullName: string, age: number, position: string, children?: child[]) {
        this.fullName = fullName
        this.age = age
        this.position = position
        this.children = children
    }

}


const nowyPracownikTs = new Pracownik("Jan Kowalski", 35, position.pierwsze, [{ fullName : "Antek Kowaslki", age: 2}] )



