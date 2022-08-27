import {cukier} from './cukier.enum';
import ciastoGotowe from './ciastoGotowe.interFace';
import nadzienie from './skladnikiNadzienie.interFace';
import spod from './skladnikiSpod.interface';

class Ciast implements ciastoGotowe {
    nadzienie: nadzienie
    spod: spod
    cukier: string
    constructor(maka: number, cukier: string , jaja: number, mleko: number) {

    }
}

