const MatOgDrikkeModule = (function(){

    const matOgDrikke = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "001",
            navn: "Focaccia",
            kategori: "Mat",
            type: "Forret",
            bilde: "bildefil.png",
            ingredienser: [
                "Pesto rosso",
                "pesto genovese",
                "aioli"
            ],
            allergener: [
                "Egg",
                "hvete",
                "melk"
            ],
           // kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "002",
            navn: "Carpaccio di manzo",
            kategori: "Mat",
            type: "Forret",
            bilde: "bildefil.png",
            ingredienser: [
                "Tynne, rå skiver av okse indrefilet",
                "parmiggiano reggiano",
                "pinnekjerner"
            ],
            allergener: [
                "Melk",
                "pinneskjerner"
            ],
            //kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "003",
            navn: "Mozarella di burrata",
            kategori: "Mat",
            type: "Forret",
            bilde: "filnavn.png",
            ingredienser: [
                "Bløt og kremet mozarella",
                "Chrrytomater",
                "Ruccola",
                "Grillet landbrød"
            ],
            allergener: [
                "Egg",
                "Mel",
                "Melk"
            ],
            //kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "004",
            navn: "Al prosciutto cotto",
            kategori: "Mat",
            type: "Rød Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Tomat",
                "Mozarella",
                "Sopp",
                "Italiensk skinke",
                "Paprika"
            ],
            allergener: [
                "Hvete",
                "Melk"
            ],
            //kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "005",
            navn: "Alla diavola",
            kategori: "Mat",
            type: "Rød Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Tomat",
                "Mozarella",
                "Italiensk sterk salami",
                "Pecorino",
                "Oregano"
            ],
            allergener: [
                "Hvete",
                "Melk",
                "Sennep"
            ],
            //kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "006",
            navn: "Capriciosa",
            kategori: "Mat",
            type: "Rød Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Tomat",
                "Mozarella",
                "Sopp",
                "Italiens skinke",
                "Artisjokk",
                "Oliven"
            ],
            allergener: [
                "Hvete",
                "Melk",
                "sennep",
                "Selleri"
            ],
           // kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "007",
            navn: "Prosciutto di parma",
            kategori: "Mat",
            type: "Rød Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Tomat",
                "Mozarella",
                "Parmaskinke",
                "Pinneskjerner",
                "ruccola",
                "Parmesan"
            ],
            allergener: [
                "Hvete",
                "Melk",
                "Pinnekjerner"
            ],
           // kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "008",
            navn: "Calzone al prosciutto cotto",
            kategori: "Mat",
            type: "Rød Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Tomat",
                "Mozarella",
                "Oregano",
                "Italiens skinke"
            ],
            allergener: [
                "Hvete",
                "Melk"
            ],
           // kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "009",
            navn: "Margherita",
            kategori: "Mat",
            type: "Rød Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Tomat",
                "Mozarella",
                "Parmesan",
                "Basilikum"
            ],
            allergener: [
                "Hvete",
                "Melk"
            ],
            //kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "010",
            navn: "4 formaggi",
            kategori: "Mat",
            type: "Hvit Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Mozarella",
                "Pecorino",
                "Parmesan",
                "Gorgonzola"
            ],
            allergener: [
                "Hvete",
                "Melk"
            ],
           // kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "011",
            navn: "Arlecchino",
            kategori: "Mat",
            type: "Hvit Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Mozarella",
                "Pecorino",
                "Kylling",
                "Chilipaste"
            ],
            allergener: [
                "Hvete",
                "Melk",
                "Sterk"
            ],
           // kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "012",
            navn: "Mare e monti",
            kategori: "Mat",
            type: "Hvit Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Creme fraiche",
                "Chili og hvitløksmarinert scampi",
                "Italiensk krydret pølse",
                "Skogsopp"
            ],
            allergener: [
                "Hvete",
                "Melk",
                "Skalldyr"
            ],
           // kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "013",
            navn: "Poolo bianco",
            kategori: "Mat",
            type: "Hvit Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Mozarella",
                "Kylling",
                "Parmesan",
                "Ruccola",
                "Pesto rosso",
                "Sorte oliven"
            ],
            allergener: [
                "Hvete",
                "Melk",
                "Pinnekjerner"
            ],
           // kostnad: getKostnad(),
            //pris: getPris()
        },
        {
            id: "014",
            navn: "Parma ai pomodori secchi",
            kategori: "Mat",
            type: "Hvit Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Mozarella",
                "Parmaskinke",
                "Chevre",
                "Soltørkede cherrytomater",
                "Ruccola",
                "Hønning",
                "Pinnkjerner"
            ],
            allergener: [
                "Hvete",
                "Melk",
                "Pinnekjerner"
            ],
           // kostnad: getKostnad(),
            //pris: getPris()
        },
        {id: "015",
         navn: "Cola",
         kategori: "Drikke",
         type: "Mineralvann" 
        },
        {id: "015",
         navn: "Fanta",
         kategori: "Drikke",
         type: "Mineralvann" 
        },
        {id: "015",
         navn: "Cola",
         kategori: "Drikke",
         type: "Alkoholfri" 
        },
        {id: "015",
         navn: "Cola",
         kategori: "Drikke",
         type: "Alkoholfri" 
        },
    ];

    //const getBy




    /*

    const muligeIngredienser = IngredienserModule.getAllIngredienser;

    // Funksjon som beregner kostnad på noe på menyen utifra kostnad på ingrediensene
    const getKostnad = () => {
        let kostnad = 0
        this.ingredienser.forEach(rettIngrediens => {
            muligeIngredienser.forEach(ingrediens => {
                if (rettIngrediens == ingrediens.navn){
                    kostnad += ingrediens.kostnadPerRett;
                };
            });
        });
        return kostnad;
    };

    // Funksjon som beregner prisen på noe på menyen
    const getPris = () => {
        pris = this.kostnad * 2;
        return pris;
    };
    */

    const getAllMatOgDrikke = () => matOgDrikke;

    return {getAllMatOgDrikke};

}());

export default MatOgDrikkeModule;