const AnsatteModule = (function(){
// skiftleder, kokk, servitør, leder, kjøkkenmedarbeider, souschef
    const ansatte = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "00000",
            navn: "PLACE HOLDER",
            alder: 30,
            stilling: "Ansatt",
            arbeidssted: "RESTAURANTNAVN",
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
        
            id: "00001",
            navn: "Erna Stoltenberg",
            alder: 30,
            stilling: "Ansatt",
            arbeidssted: "Grorud",
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00002",
            navn: "Anders Andersen",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Grorud",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00003",
            navn: "Eric Cartman",
            alder: 50,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Grorud",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00004",
            navn: "Stan Marsh",
            alder: 48,
            stilling: "Ansatt",
            arbeidssted: "Gyldne Pizza Grorud",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00005",
            navn: "Kyle Broflovski",
            alder: 38,
            stilling: "Ansatt",
            arbeidssted: "Gyldne Pizza Lillestrøm",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00006",
            navn: "Kenny McCormick",
            alder: 43,
            stilling: "Ansatt",
            arbeidssted: "Gyldne Pizza Lillestrøm",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00007",
            navn: "Bob Bob",
            alder: 43,
            stilling: "Ansatt",
            arbeidssted: "Gyldne Pizza Lillestrøm",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00008",
            navn: "Darri Darri",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Lillestrøm",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00009",
            navn: "Mario Mario",
            alder: 43,
            stilling: "Ansatt",
            arbeidssted: "Gyldne Pizza Fjellhamar",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00010",
            navn: "Luigi Mario",
            alder: 43,
            stilling: "Ansatt",
            arbeidssted: "Gyldne Pizza Fjellhamar",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00011",
            navn: "Peaches Mario",
            alder: 43,
            stilling: "Ansatt",
            arbeidssted: "Gyldne Pizza Fjellhamar",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00012",
            navn: "Sjampinjog Mario",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Fjellhamar",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00013",
            navn: "Timmy Jimmy",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00014",
            navn: "Sidd Iceage",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00015",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00016",
            navn: "Yonas Croissant",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00017",
            navn: "Elias Pesto",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00018",
            navn: "Elise Mama",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00019",
            navn: "Mama Mia",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00020",
            navn: "Olava Olive",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00021",
            navn: "Smantha Succina",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00022",
            navn: "Tiril Tommelfinger",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00023",
            navn: "Karius Teethus",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00024",
            navn: "Baktus Teethus",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00025",
            navn: "Mia Ea",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00026",
            navn: "Noor Nordlys",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00027",
            navn: "Bella Twilight",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00028",
            navn: "Edward Ludvig",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00029",
            navn: "Sakura Paprika",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00030",
            navn: "Dona Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00031",
            navn: "Samira Selleri",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00032",
            navn: "Sonic Eggman",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00033",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00034",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00035",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00036",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00037",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00038",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00039",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00040",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00041",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00042",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00043",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00044",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00045",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00046",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Majorstuen",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        }
    ];

    const getAllAnsatte = () => ansatte;

    const getByArbeidssted = ( arbeidssted ) => ansatte.filter( ansatt => 
        ansatt.arbeidssted.toLowerCase() === arbeidssted.toLowerCase() );

        const getByNavn = ( navn ) => ansatte.filter( ansatt => 
            ansatt.navn.toLowerCase() === navn.toLowerCase() );
        
        
    

    return {getAllAnsatte,
            getByArbeidssted,
            getByNavn
        };

}());

export default AnsatteModule;