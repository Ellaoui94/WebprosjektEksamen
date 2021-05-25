const AnsatteModule = (function(){

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
            // Denne skal ikke brukes i det ferdige produktet
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