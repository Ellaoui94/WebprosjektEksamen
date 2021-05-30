const matOgDrikkeModule = (function(){

    const matOgDrikke = [
        {
            id: "30001",
            navn: "Focaccia",
            kategori: "mat",
            type: "forrett",
            bilde: "pizza-icon.png",
            ingredienser: [
                "pesto rosso",
                "pesto genovese",
                "aioli",
                "focaccia"
            ],
            allergener: [
                "egg",
                "hvete",
                "melk"
            ],
           kostnad: "55",
            pris: "200"
        },
        {
            id: "30002",
            navn: "Antipasto all´Italiana	",
            kategori: "mat",
            type: "forrett",
            bilde: "pizza-icon.png",
            ingredienser: [
                "parmaskinke",
                "trøffelsalami",
                "sterk salami",
                "gorgonzola",
                "parmesan"
            ],
            allergener: [
                "melk",
                "pinjekjerner"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30003",
            navn: "Mozarella di burrata",
            kategori: "mat",
            type: "forrett",
            bilde: "pizza-icon.png",
            ingredienser: [
                "bløt og kremet mozarella",
                "cherrytomater",
                "ruccola",
                "grillet landbrød"
            ],
            allergener: [
                "egg",
                "hvete",
                "melk"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30004",
            navn: "Al prosciutto cotto",
            kategori: "mat",
            type: "rød pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "tomat",
                "mozarella",
                "sopp",
                "italiensk skinke",
                "paprika"
            ],
            allergener: [
                "hvete",
                "melk"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30005",
            navn: "Alla diavola",
            kategori: "mat",
            type: "rød pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "tomat",
                "mozarella",
                "sterk salami",
                "pecorino",
                "oregano"
            ],
            allergener: [
                "hvete",
                "melk",
                "sennep"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30006",
            navn: "Capriciosa",
            kategori: "mat",
            type: "rød pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "tomat",
                "mozarella",
                "sopp",
                "italiensk skinke",
                "artisjokk",
                "oliven",
                "selleri"
            ],
            allergener: [
                "hvete",
                "melk",
                "sennep",
                "selleri"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30007",
            navn: "Prosciutto di parma",
            kategori: "mat",
            type: "rød pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "tomat",
                "mozarella",
                "parmaskinke",
                "pinjekjerner",
                "ruccola",
                "parmesan"
            ],
            allergener: [
                "hvete",
                "melk",
                "pinjekjerner"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30008",
            navn: "Calzone al prosciutto cotto",
            kategori: "mat",
            type: "rød pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "tomat",
                "mozarella",
                "oregano",
                "italiensk skinke"
            ],
            allergener: [
                "hvete",
                "melk"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30009",
            navn: "Margherita",
            kategori: "mat",
            type: "rød pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "tomat",
                "mozarella",
                "parmesan",
                "basilikum"
            ],
            allergener: [
                "hvete",
                "melk"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30010",
            navn: "4 formaggi",
            kategori: "mat",
            type: "hvit pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "mozarella",
                "pecorino",
                "parmesan",
                "gorgonzola"
            ],
            allergener: [
                "hvete",
                "melk"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30012",
            navn: "Mare e monti",
            kategori: "mat",
            type: "hvit pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "creme fraiche",
                "scampi",
                "krydret pølse",
                "skogsopp"
            ],
            allergener: [
                "hvete",
                "melk",
                "skalldyr"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30013",
            navn: "Poolo bianco",
            kategori: "mat",
            type: "hvit pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "mozarella",
                "kylling",
                "parmesan",
                "ruccola",
                "pesto rosso",
                "sorte oliven"
            ],
            allergener: [
                "hvete",
                "melk",
                "pinjekjerner"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30014",
            navn: "Parma ai pomodori secchi",
            kategori: "mat",
            type: "hvit pizza",
            bilde: "pizza-icon.png",
            ingredienser: [
                "mozarella",
                "parmaskinke",
                "chevre",
                "cherrytomater",
                "ruccola",
                "honning",
                "pinjekjerner"
            ],
            allergener: [
                "hvete",
                "melk",
                "pinjekjerner"
            ],
            kostnad: "55",
            pris: "200"
        },
        {
            id: "30015",
            navn: "Cola",
            kategori: "drikke",
            type: "mineralvann",
            bilde: "beverage-icon.png",
            kostnad: "10",
            pris: "59"
        },
        {
            id: "30016",
            navn: "Fanta",
            kategori: "drikke",
            type: "mineralvann" ,
            bilde: "beverage-icon.png",
            kostnad: "10",
            pris: "59"
        },
        {
            id: "30017",
            navn: "Sprite",
            kategori: "drikke",
            type: "mineralvann" ,
            bilde: "beverage-icon.png",
            kostnad: "10",
            pris: "59"
        },
        {
            id: "30018",
            navn: "Lemonade",
            kategori: "drikke",
            type: "mineralvann" ,
            bilde: "beverage-icon.png",
            kostnad: "10",
            pris: "69"
        },
        {
            id: "30019",
            navn: "Rødvin",
            kategori: "drikke",
            type: "alkohol" ,
            bilde: "wine.png",
            kostnad: "45",
            pris: "115"
        },
        {
            id: "30020",
            navn: "Hvitvin",
            kategori: "drikke",
            type: "alkohol" ,
            bilde: "wine.png",
            kostnad: "45",
            pris: "115"
        },
        {
            id: "30021",
            navn: "Øl",
            kategori: "drikke",
            type: "alkohol" ,
            bilde: "beer.png",
            kostnad: "35",
            pris: "98"
        }
    ];

    const getAllMatOgDrikke = () => matOgDrikke;

    return {getAllMatOgDrikke};

}());

export default matOgDrikkeModule;