class Book {
    constructor(tytul, autor, rok) {
        this.tytul = tytul;
        this.autor = autor;
        this.rok = rok;
    }
    informacje() {
        return "Tytuł: " + this.tytul + " Autor: " + this.autor + "Rok wydania: " + this.rok;
    }
}

var wiedzmin = new Book("wiedzmin", "jakisautor", "jakisrok");

console.log(wiedzmin.informacje());

class student {
    constructor(){
        this.imie = "Jakub";
        this.nazwisko = "Stępniak";
        this.nralbumu ="67270";
        this.oceny = [3,4,5];
    }
    srednia() {
        (this.oceny[0]+this.oceny[1]+this.oceny[2])/3
    }
}