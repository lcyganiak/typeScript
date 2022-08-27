const names = "Jan";

const age: number = 39;

let wersja: number | string  = 1.15

function jakaWersja(parametr: string) {
    return parseInt(parametr)
}

wersja = jakaWersja('1.20')

function jakaWersja2(parametr: string): number | string {
    const parametrToNumber = parseInt(parametr)
    if(parametrToNumber > 1.15 ) {
        return parametrToNumber
    } else {
        return 'Masz przestarzałą wersję'
    }
}


wersja = jakaWersja2('1.2')

// nie poprawnie typować dane, tak nie robimy any to ZŁO!!!!!!!!!!!!!!!

let lata: any = '50'

function ileLat(parametr: any): any {
    return parseInt(parametr)
}
lata = ileLat(true)

// typowanie danych złożonych.


const cars: string[] = ["Audi", "BMW", "Opel"] // typowanie tablicy ze stringami

const children: string[] = [] // typowanie pustej tablicy, dodając informację że w tablicy będą stringi

children.push('Ania')



// interface deklaracja 

interface ciasto {
    nazwa: string,
    cena: number,
    waga: number
}

const tablicaZObjektamiCiast: ciasto[] = [
    {nazwa : "Sernik", cena: 40, waga: 2},
    {nazwa : "Szarlotka", cena: 35, waga: 4},


] // tablica z objektami w środu

tablicaZObjektamiCiast.forEach(item => console.log(item.nazwa))

// funkcja z nieobowiązkowymi parametrami
function liczyPensjeZTS(podstawa: number, premiaZaWyniki: number, premiaZaObecnosc?: number | undefined): number {
    const wartoscDomyslna = premiaZaObecnosc === undefined ? 0 : premiaZaObecnosc;
    return podstawa + wartoscDomyslna + premiaZaWyniki;
}

liczyPensjeZTS(2500, 500)

enum nazywBulek {
    flagowa = "Poznanska",
    najtansza = "Kajzerka",
    nowosc= "Grahamka",
    promocja = "wczorajsze"
}

enum wagaBulek {
    podstawowa = 0.5,
    lekka = 0.5,
}
interface bulki {
    nazwa: nazywBulek,
    cena: number,
    waga: wagaBulek,
    rodzaj?: string
}

const buleczki: bulki[] = [

    {
        nazwa: nazywBulek.flagowa,
        cena: 1,
        waga: wagaBulek.podstawowa,
        rodzaj: 'przenna'
    },
    {
        nazwa: nazywBulek.najtansza,
        cena: 0.5,
        waga: wagaBulek.lekka

    }

]
const czerowny: bulki[] = []
const zolty: bulki[] = []


function dodajDoPojemnika(): void {
    buleczki.forEach(item => {
        if(item.nazwa === nazywBulek.flagowa) {
            czerowny.push(item)
        }
        if(item.nazwa === nazywBulek.najtansza) {
            zolty.push(item)
        }
    })
}


