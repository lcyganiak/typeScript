// 
// typ any może być czymkolwiek
// typ unknown może być czymkolwiek, ale musimy sprawdzić wew. funkcji czy jest czymś konkternie
// typ never jest abstrakcją czymś nie istniejącym, np. byciem jednoczenie męzem i kawalerem.

// użycie any
function add(a: any, b: number): number {
    return a + b
}

add(null, 5)

// użycie unknown


function add2(a: unknown, b: number): number {
    if(typeof a === 'number') {
        return a + b;
    } else {
        return b
    }
}

add(null, 5)


 

