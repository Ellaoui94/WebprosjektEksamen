const AnsatteModule = (function(){
// skiftleder, kokk, servitør, leder, kjøkkenmedarbeider, souschef
    const ansatte = [
        {
            id: "20001",
            navn: "Erna Stoltenberg",
            alder: 30,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (1).jpg",
            telefon: "923 56 087"
        },
        {
            id: "20002",
            navn: "Anders Andersen",
            alder: 43,
            stilling: "Skiftleder",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (2).jpg",
            telefon: "461 71 996"
        },
        {
            id: "20003",
            navn: "Eric Cartman",
            alder: 50,
            stilling: "Kokk",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (17).jpg",
            telefon: "591 58 627"
        },
        {
            id: "20004",
            navn: "Stan Marsh",
            alder: 48,
            stilling: "Kjøkkenmedarbieder",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 170,
            bilde: "image (30).jpg",
            telefon: "466 51 606"
        },
        {
            id: "20005",
            navn: "Kyle Broflovski",
            alder: 38,
            stilling: "Souschef",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 180,
            bilde: "image (45).jpg",
            telefon: "412 29 033"
        },
        {
            id: "20006",
            navn: "Kenny McCormick",
            alder: 25,
            stilling: "Serviøtr",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (36).jpg",
            telefon: "478 11 513"
        },
        {
            id: "20007",
            navn: "Bob Bob",
            alder: 21,
            stilling: "Serviøtr",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 50,
            timelønn: 150,
            bilde: "image (39).jpg",
            telefon: "469 55 199"
        },
        {
            id: "20008",
            navn: "Darri Darri",
            alder: 19,
            stilling: "Serviøtr",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (9).jpg",
            telefon: "590 61 621"
        },
        {
            id: "20009",
            navn: "Mario Mario",
            alder: 50,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (8).jpg",
            telefon: "410 65 741"
        },
        {
            id: "20010",
            navn: "Luigi Mario",
            alder: 43,
            stilling: "Skiftleder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (10).jpg",
            telefon: "475 65 946"
        },
        {
            id: "20011",                                                                        
            navn: "Peaches Mario",
            alder: 40,
            stilling: "Kokk",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (3).jpg",
            telefon: "419 90 404"
        },
        {
            id: "20012",
            navn: "Sjampinjong Mario",
            alder: 37,
            stilling: "Souschef",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 180,
            bilde: "image (4).jpg",
            telefon: "400 59 081"
        },
        {
            id: "20013",
            navn: "Timmy Jimmy",
            alder: 35,
            stilling: "Kjøkkenmedarbeider",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 170,
            bilde: "image (11).jpg",
            telefon: "469 90 516"                              
        },
        {
            id: "20014",
            navn: "Sidd Iceage",
            alder: 43,
            stilling: "Kokk",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (13).jpg",
            telefon: "591 38 746"
        },
        {
            id: "20015",
            navn: "Bilal Donuts",
            alder: 31,
            stilling: "Kjøkkenmedarbeider",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 170,
            bilde: "image (15).jpg",
            telefon: "465 62 350"
        },
        {
            id: "20016",
            navn: "Yonas Croissant",
            alder: 28,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (16).jpg",
            telefon: "926 58 596"
        },
        {
            id: "20017",
            navn: "Elias Pesto",
            alder: 25,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (18).jpg",
            telefon: "480 85 793"
        },
        {
            id: "20018",
            navn: "Elise Mama",
            alder: 24,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 50,
            timelønn: 150,
            bilde: "image (5).jpg",
            telefon: "416 56 403"
        },
        {
            id: "20019",
            navn: "Mama Mia",
            alder: 25,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (6).jpg",
            telefon: "913 58 052"
        },
        {
            id: "20020",
            navn: "Olava Olive",
            alder: 20,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 50,
            timelønn: 150,
            bilde: "image (7).jpg",
            telefon: "939 41 131"
        },
        {
            id: "20021",
            navn: "Smantha Succina",
            alder: 18,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (20).jpg",
            telefon: "946 00 378"
        },
        {
            id: "20022",
            navn: "Tiril Tommelfinger",
            alder: 23,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 50,
            timelønn: 150,
            bilde: "image (12).jpg",
            telefon: "455 97 643"
        },
        {
            id: "20023",
            navn: "Karius Teethus",
            alder: 24,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (22).jpg",
            telefon: "464 21 155"
        },
        {
            id: "20024",
            navn: "Baktus Teethus",
            alder: 43,
            stilling: "Leder", 
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (23).jpg",
            telefon: "598 54 583"
        },
        {
            id: "20025",                              
            navn: "Mia Ea",
            alder: 40,
            stilling: "Skiftleder",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (12).jpg",
            telefon: "407 16 733"
        },
        {
            id: "20026",
            navn: "Noor Nordlys",
            alder: 38,
            stilling: "Kokk",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (14).jpg",
            telefon: "405 66 952"
        },
        {
            id: "20027",
            navn: "Bella Twilight",
            alder: 35,
            stilling: "Souschef",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 180,
            bilde: "image (19).jpg",
            telefon: "477 18 487"
        },
        {
            id: "20028",
            navn: "Edward Ludvig",
            alder: 30,
            stilling: "Kjøkkenmedarbeider",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 170,
            bilde: "image (26).jpg",
            telefon: "404 78 456"
        },
        {
            id: "20029",
            navn: "Sakura Paprika",
            alder: 25,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (21).jpg",
            telefon: "593 03 324"
        },
        {
            id: "20030",
            navn: "Dona Donuts",
            alder: 22,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 50,
            timelønn: 150,
            bilde: "image (24).jpg",
            telefon: "592 88 508"
        },
        {
            id: "20031",
            navn: "Samira Selleri",
            alder: 26,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Fjellhammer", "10002"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (25).jpg",
            telefon: "417 23 065"
        },
        {
            id: "20032",
            navn: "Sonic Eggman",
            alder: 55,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (28).jpg",
            telefon: "590 50 601"
        },
        {
            id: "20033",
            navn: "Abdi Tomati",
            alder: 43,
            stilling: "Skiftleder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (32).jpg",
            telefon: "419 99 872"
        },                                                       
        {
            id: "20034",
            navn: "Marius Bresso",
            alder: 40,
            stilling: "Kokk",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (33).jpg",
            telefon: "593 52 720"
        },
        {
            id: "20035",
            navn: "Ella Mozarella",
            alder: 37,
            stilling: "Souschef",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 180,
            bilde: "image (29).jpg",
            telefon: "998 26 463"
        },
        {
            id: "20036",
            navn: "Fatima Ricotta",
            alder: 41,
            stilling: "Kokk",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image (31).jpg",
            telefon: "401 79 950"
        },
        {
            id: "20037",
            navn: "Yasmin Bûche",
            alder: 43,
            stilling: "Souschef",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 180,
            bilde: "image (35).jpg",
            telefon: "912 25 266"
        },
        {
            id: "20038",
            navn: "Rihana Bresso",
            alder: 30,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "image (37).jpg",
            telefon: "978 08 448"
        },
        {
            id: "20039",
            navn: "Khalifa Chaumes",
            alder: 27,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 150,
            bilde: "50.jpg",
            telefon: "986 79 906"
        },
        {
            id: "20040",
            navn: "Rolando Roquefort",
            alder: 25,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 50,
            timelønn: 150,
            bilde: "image46.jpg",
            telefon: "402 27 954"
        },
        {
            id: "20041",
            navn: "Casper Ketchup",
            alder: 22,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image47.jpg",
            telefon: "593 78 636"
        },
        {
            id: "20042",
            navn: "Antonio Donuts",
            alder: 20,
            stilling: "Servitør",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 50,
            timelønn: 250,
            bilde: "image48.jpg",
            telefon: "451 28 394"
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