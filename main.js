const name = "Jan";

const objekt = { 
    id: 1,

}

// objekt = {} // to jest bład 

objekt.id = 5

function liczyPejnsje(podstawa, premiaZaWyniki, premiaZaObecnosc) {
    return podstawa + premiaZaObecnosc + premiaZaWyniki;
}

liczyPejnsje(2500, 500, 0)


class Pracownika {
    constructor(fullName, age ,position, children) {
        this.fullName = fullName
        this.age = age
        this.position = position
        this.children = children

    }

    set addChildren(newchild) {
        this.children.push(newchild)
    }
    get showChldren () {
        this.children.forEach(element => {
            console.log(element.fullName)
        });
    }
}    

const nowyPracownik = new Pracownika("Jan Kowalski", 35, "handlowie", { fullName : "Antek Kowaslki", age: 2} )

nowyPracownik.addChildren({})