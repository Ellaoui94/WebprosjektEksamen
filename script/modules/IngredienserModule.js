const IngredienserModule = (function (){

    const ingredienser = [
        {
            id: "50000",
            navn: "pesto rosso",
            type: "saus",
            allergen: "nøtter",
            kostnadPerRett: 10
        },
        {
            id: "50001",
            navn: "pesto genovese",
            type: "saus",
            allergen: "nøtter",
            kostnadPerRett: 10
        },
        {
            id: "50002",
            navn: "aioli",
            type: "saus",
            allergen: "egg",
            kostnadPerRett: 15
        },
        {
            id: "50003",
            navn: "parmaskinke",
            type: "kjøtt",
            allergen: "",
            kostnadPerRett: 20
        },
        {
            id: "50004",
            navn: "trøffelsalami",
            type: "kjøtt",
            allergen: "",
            kostnadPerRett: 20
        },
        {
            id: "50005",
            navn: "sterk salami",
            type: "kjøtt",
            allergen: "",
            kostnadPerRett: 20
        },
        {
            id: "50006",
            navn: "gorgonzola",
            type: "ost",
            allergen: "melk",
            kostnadPerRett: 15
        },
        {
            id: "50007",
            navn: "parmesan",
            type: "ost",
            allergen: "melk",
            kostnadPerRett: 15
        },
        {
            id: "50008",
            navn: "pinjekjerner",
            type: "nøtter",
            allergen: "nøtter",
            kostnadPerRett: 15
        },
        {
            id: "50009",
            navn: "mozarella",
            type: "ost",
            allergen: "melk",
            kostnadPerRett: 15
        },
        {
            id: "50010",
            navn: "bløt og kremet mozarella",
            type: "ost",
            allergen: "melk",
            kostnadPerRett: 45
        },
        {
            id: "50011",
            navn: "cherrytomater",
            type: "grønnsaker",
            allergen: "",
            kostnadPerRett: 15
        },
        {
            id: "50012",
            navn: "ruccola",
            type: "grønnsaker",
            allergen: "",
            kostnadPerRett: 5
        },
        {
            id: "50013",
            navn: "grillet landbrød",
            type: "brød",
            allergen: "hvete",
            kostnadPerRett: 10
        },
        {
            id: "50014",
            navn: "tomat",
            type: "grønnsaker",
            allergen: "",
            kostnadPerRett: 10
        },
        {
            id: "50015",
            navn: "sopp",
            type: "grønnsaker",
            allergen: "",
            kostnadPerRett: 15
        },
        {
            id: "50016",
            navn: "italiensk skinke",
            type: "kjøtt",
            allergen: "",
            kostnadPerRett: 20
        },
        {
            id: "50017",
            navn: "paprika",
            type: "grønnsaker",
            allergen: "",
            kostnadPerRett: 5
        },
        {
            id: "50018",
            navn: "pecorino",
            type: "ost",
            allergen: "melk",
            kostnadPerRett: 25
        },
        {
            id: "50019",
            navn: "artisjokk",
            type: "grønnsaker",
            allergen: "",
            kostnadPerRett: 15
        },
        {
            id: "50020",
            navn: "oliven",
            type: "grønnsaker",
            allergen: "",
            kostnadPerRett: 10
        },
        {
            id: "50021",
            navn: "creme fraiche",
            type: "saus",
            allergen: "melk",
            kostnadPerRett: 15
        },
        {
            id: "50022",
            navn: "scampi",
            type: "skalldyr",
            allergen: "skalldyr",
            kostnadPerRett: 25
        },
        {
            id: "50023",
            navn: "skogsopp",
            type: "grønnsaker",
            allergen: "",
            kostnadPerRett: 15
        },
        {
            id: "50023",
            navn: "oregano",
            type: "krydder",
            allergen: "",
            kostnadPerRett: 1
        },
        {
            id: "50023",
            navn: "focaccia",
            type: "brød",
            allergen: "hvete",
            kostnadPerRett: 20
        },
        {
            id: "50024",
            navn: "selleri",
            type: "grønnsaker",
            allergen: "selleri",
            kostnadPerRett: 5
        },
        {
            id: "50025",
            navn: "sennep",
            type: "saus",
            allergen: "sennep",
            kostnadPerRett: 10
        },
        {
            id: "50026",
            navn: "krydret pølse",
            type: "kjøtt",
            allergen: "",
            kostnadPerRett: 15
        },
        {
            id: "50027",
            navn: "kylling",
            type: "kjøtt",
            allergen: "",
            kostnadPerRett: 15
        },
        {
            id: "50028",
            navn: "sorte oliven",
            type: "grønnsaker",
            allergen: "",
            kostnadPerRett: 5
        },
        {
            id: "50029",
            navn: "honning",
            type: "saus",
            allergen: "",
            kostnadPerRett: 5
        },
        {
            id: "50030",
            navn: "basilikum",
            type: "krydder",
            allergen: "",
            kostnadPerRett: 5
        }
    ];

    const getAllIngredienser = () => ingredienser;

    return {getAllIngredienser};

}());

export default IngredienserModule;