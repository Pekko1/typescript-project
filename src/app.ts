interface IStartup{
    nome:string
    settoreDiFocus:string
    descrizione:string
    prodottiServiziOfferti:string[]

    riceviIncentivo(incentivo:IIncentivo):void
}

interface IIncentivo{
    codiceIdentificativo:string
    descrizione:string
    valoreIncentivo:number
    criteriEleggibilita:string
    
    assegnaAStartup(startup: IStartup): void;
}

interface ICittadino{
    nome:string
    cognome:string
    eta:number
    interessiSportivi:string[]

    partecipaAttività(startup: IStartup): void
}

// metodo lungo di implementazione
class Startup implements IStartup{
    nome: string
    settoreDiFocus: string
    descrizione: string
    prodottiServiziOfferti: string[]
    
    constructor(nome:string, settoreDiFocus:string, descrizione:string, prodottiServiziOfferti:string[]){
        this.nome=nome
        this.settoreDiFocus= settoreDiFocus
        this.descrizione=descrizione
        this.prodottiServiziOfferti=prodottiServiziOfferti
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        console.log(`La startup ${this.nome} ha ricevuto l'incentivo: ${incentivo.descrizione} del valore di ${incentivo.valoreIncentivo}€.`)
    }
}

// metodo abbreviato
class Incentivo implements IIncentivo{
    
    constructor(
        public codiceIdentificativo:string,
        public descrizione:string,
        public valoreIncentivo:number,
        public criteriEleggibilita:string,
    ){}

    assegnaAStartup(startup: IStartup): void {
        startup.riceviIncentivo(this)
    }
}

class Cittadino implements ICittadino{
    constructor(
        public nome:string,
        public cognome:string,
        public eta:number,
        public interessiSportivi:string[],
    ){}

    partecipaAttività(startup: IStartup): void{
        console.log(`${this.nome} ${this.cognome} partecipa alle attività della startup ${startup.nome} che offre: ${startup.prodottiServiziOfferti.join(', ')}.`);
    }
}

const startup1 = new Startup(
    "Sporting Tech",
    "tecnologie wearable",
    "Startup innovativa nel campo delle tecnologie indossabili per lo sport.",
    ["smartwatch sportivi", "sensori di movimento"]
)

const startup2 = new Startup(
    "Strong",
    "Fitness app",
    "App per il monitoraggio dell'attività fisica",
    ["app di allenamento", "app di monitoraggio"]
)

const incentivo1 = new Incentivo(
    "INCENTIVO1",
    "Incentivo per tecnologie sportive",
    1000,
    "tecnologie wearable sportive"
)

const incentivo2 = new Incentivo(
    "INCENTIVO22",
    "Incentivo per lo sviluppo",
    5000,
    "App per il fitness"
)

const cittadino1 = new Cittadino(
    "Mario",
    "Rossi",
    50,
    ["corsa", "palestra"]
)

const cittadino2 = new Cittadino(
    "Luca",
    "Verdi",
    30,
    ["palestra", "ginnastica"]
)

incentivo1.assegnaAStartup(startup1)
incentivo2.assegnaAStartup(startup2)

cittadino1.partecipaAttività(startup1)
cittadino2.partecipaAttività(startup2)