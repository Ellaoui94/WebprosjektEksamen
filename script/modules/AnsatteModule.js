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
            bilde: "bildefil.jpg",
            telefon: "92356087"
        },
        {
        
            id: "00001",
            navn: "Erna Stoltenberg",
            alder: 30,
            stilling: "Ansatt",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "image.jpg",
            telefon: "923 56 087"
        },
        {
            id: "00002",
            navn: "Anders Andersen",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (1).jpg",
            telefon: "461 71 996"
        },
        {
            id: "00003",
            navn: "Eric Cartman",
            alder: 50,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (2).jpg",
            telefon: "591 58 627"
        },
        {
            id: "00004",
            navn: "Stan Marsh",
            alder: 48,
            stilling: "Ansatt",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (3).jpg",
            telefon: "466 51 606"
        },
        {
            id: "00005",
            navn: "Kyle Broflovski",
            alder: 38,
            stilling: "Ansatt",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (4).jpg",
            telefon: "412 29 033"
        },
        {
            id: "00006",
            navn: "Kenny McCormick",
            alder: 25,
            stilling: "Ansatt",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (5).jpg",
            telefon: "478 11 513"
        },
        {
            id: "00007",
            navn: "Bob Bob",
            alder: 21,
            stilling: "Ansatt",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (6).jpg",
            telefon: "469 55 199"
        },
        {
            id: "00008",
            navn: "Darri Darri",
            alder: 19,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Grorud", "10000"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (7).jpg",
            telefon: "590 61 621"
        },
        {
            id: "00009",
            navn: "Mario Mario",
            alder: 43,
            stilling: "Ansatt",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (8).jpg",
            telefon: "410 65 741"
        },
        {
            id: "00010",
            navn: "Luigi Mario",
            alder: 43,
            stilling: "Ansatt",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (9).jpg",
            telefon: "475 65 946"
        },
        {
            id: "00011",
            navn: "Peaches Mario",
            alder: 43,
            stilling: "Ansatt",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (10).jpg",
            telefon: "419 90 404"
        },
        {
            id: "00012",
            navn: "Sjampinjog Mario",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (11).jpg",
            telefon: "400 59 081"
        },
        {
            id: "00013",
            navn: "Timmy Jimmy",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (12).jpg",
            telefon: "469 90 516"
        },
        {
            id: "00014",
            navn: "Sidd Iceage",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (13).jpg",
            telefon: "591 38 746"
        },
        {
            id: "00015",
            navn: "Bilal Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (14).jpg",
            telefon: "465 62 350"
        },
        {
            id: "00016",
            navn: "Yonas Croissant",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (15).jpg",
            telefon: "926 58 596"
        },
        {
            id: "00017",
            navn: "Elias Pesto",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (16).jpg",
            telefon: "480 85 793"
        },
        {
            id: "00018",
            navn: "Elise Mama",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (17).jpg",
            telefon: "416 56 403"
        },
        {
            id: "00019",
            navn: "Mama Mia",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (18).jpg",
            telefon: "913 58 052"
        },
        {
            id: "00020",
            navn: "Olava Olive",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (19).jpg",
            telefon: "939 41 131"
        },
        {
            id: "00021",
            navn: "Smantha Succina",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (20).jpg",
            telefon: "946 00 378"
        },
        {
            id: "00022",
            navn: "Tiril Tommelfinger",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (21).jpg",
            telefon: "455 97 643"
        },
        {
            id: "00023",
            navn: "Karius Teethus",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Lillestrøm", "10001"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (22).jpg",
            telefon: "464 21 155"
        },
        {
            id: "00024",
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
            id: "00025",
            navn: "Mia Ea",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (24).jpg",
            telefon: "407 16 733"
        },
        {
            id: "00026",
            navn: "Noor Nordlys",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (25).jpg",
            telefon: "405 66 952"
        },
        {
            id: "00027",
            navn: "Bella Twilight",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (26).jpg",
            telefon: "477 18 487"
        },
        {
            id: "00028",
            navn: "Edward Ludvig",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (27).jpg",
            telefon: "404 78 456"
        },
        {
            id: "00029",
            navn: "Sakura Paprika",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (28).jpg",
            telefon: "593 03 324"
        },
        {
            id: "00030",
            navn: "Dona Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Fjellhamar", "10002"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (29).jpg",
            telefon: "592 88 508"
        },
        {
            id: "00031",
            navn: "Samira Selleri",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Fjellhammer", "10002"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (30).jpg",
            telefon: "417 23 065"
        },
        {
            id: "00032",
            navn: "Sonic Eggman",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (31).jpg",
            telefon: "590 50 601"
        },
        {
            id: "00033",
            navn: "Abdi Tomati",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (32).jpg",
            telefon: "419 99 872"
        },
        {
            id: "00034",
            navn: "Marius Bresso",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (33).jpg",
            telefon: "593 52 720"
        },
        {
            id: "00035",
            navn: "Ella Mozarella",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (34).jpg",
            telefon: "998 26 463"
        },
        {
            id: "00036",
            navn: "Fatima Ricotta",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (35).jpg",
            telefon: "401 79 950"
        },
        {
            id: "00037",
            navn: "Yasmin Bûche",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (36).jpg",
            telefon: "912 25 266"
        },
        {
            id: "00038",
            navn: "Rihana Bresso",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (37).jpg",
            telefon: "978 08 448"
        },
        {
            id: "00039",
            navn: "Khalifa Chaumes",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (38).jpg",
            telefon: "986 79 906"
        },
        {
            id: "00040",
            navn: "Rolando Roquefort",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (39).jpg",
            telefon: "402 27 954"
        },
        {
            id: "00041",
            navn: "Casper Ketchup",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (40).jpg",
            telefon: "593 78 636"
        },
        {
            id: "00042",
            navn: "Antonio Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (41).jpg",
            telefon: "451 28 394"
        },
        {
            id: "00043",
            navn: "Carlos Garcia",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (42).jpg",
            telefon: "596 92 454"
        },
        {
            id: "00044",
            navn: "Jenny Rambo",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (43).jpg",
            telefon: "481 03 637"
        },
        {
            id: "00045",
            navn: "Ofufuefue Onetwewe Osas Donuts",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (44).jpg",
            telefon: "992 59 644"
        },
        {
            id: "00046",
            navn: "Bella Balsamikum",
            alder: 43,
            stilling: "Leder",
            arbeidssted: ["Gyldne Pizza Majorstuen", "10003"],
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "image (45).jpg",
            telefon: "596 42 665"
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