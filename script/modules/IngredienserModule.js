const IngredienserModule = (function (){

    const ingredienser = [
        {
            id: "00000",
            navn: "Pesto rosso",
            type: "Saus",
            allergen: "Nøtter",
            kostnadPerRett: 10
        },
        {
            id: "00001",
            navn: "Pesto genovese",
            type: "Saus",
            allergen: "Nøtter",
            kostnadPerRett: 10
        },
        {
            id:" 00002",
            navn: "Aioli",
            type: "Saus",
            allergen: "Egg",
            kostnadPerRett: 15
        },
        {
            id: "00003",
            navn: "Parmaskinke",
            type: "Kjøtt",
            allergen: " ",
            kostnadPerRett: 20
        },
        {
            id: "00004",
            navn: "Trøffelsalami",
            type: "Kjøtt",
            allergen: " ",
            kostnadPerRett: 20
        },
        {
            id: "00005",
            navn: "Sterk salami",
            type: "Kjøtt",
            allergen: " ",
            kostnadPerRett: 20
        },
        {
            id: "00006",
            navn: "Gorgonzola",
            type: "Ost",
            allergen: "Melk",
            kostnadPerRett: 15
        },
        
        {
            id: "00007",
            navn: "Parmesan",
            type: "Ost",
            allergen: "Melk",
            kostnadPerRett: 15
        },
        
        {
            id: "00008",
            navn: "Pinnekjerner",
            type: "Nøtter",
            allergen: "Nøtter",
            kostnadPerRett: 15
        },
        
        {
            id: "00009",
            navn: "Mozarella",
            type: "Ost",
            allergen: "Melk",
            kostnadPerRett: 15
        },
        
        {
            id: "00010",
            navn: "Bløt og kremet mozarella",
            type: "Ost",
            allergen: "Melk",
            kostnadPerRett: 45
        },
        {
            id: "00011",
            navn: "Cherrytomater",
            type: "Grønnsaker",
            allergen: " ",
            kostnadPerRett: 15
        },
        {
            id: "00012",
            navn: "Ruccola",
            type: "Grønsaker",
            allergen: " ",
            kostnadPerRett: 5
        },
        {
            id: "00013",
            navn: "Grillet landbrød",
            type: "Bunn",
            allergen: "Hvete",
            kostnadPerRett: 10
        },
        {
            id: "00014",
            navn: "Tomat",
            type: "Grønsaker",
            allergen: " ",
            kostnadPerRett: 10
        },
        {
            id: "00015",
            navn: "Sopp",
            type: "Grønsaker",
            allergen: " ",
            kostnadPerRett: 15
        },
        {
            id: "00016",
            navn: "Italiensk skinke",
            type: "Kjøtt",
            allergen: " ",
            kostnadPerRett: 20
        },
        {
            id: "00017",
            navn: "Paprika",
            type: "Grønsaker",
            allergen: " ",
            kostnadPerRett: 5
        },
        {
            id: "00018",
            navn: "Pecorino",
            type: "Ost",
            allergen: "Melk",
            kostnadPerRett: 25
        },
        {
            id: "00019",
            navn: "Artisjokk",
            type: "Grønsaker",
            kostnadPerRett: 15
        },
        {
            id: "00020",
            navn: "Oliven",
            type: "Grønsaker",
            kostnadPerRett: 10
        },
        {
            id: "00021",
            navn: "Creme fraiche",
            type: "Saus",
            kostnadPerRett: 15
        },
        {
            id: "00022",
            navn: "Scampi",
            type: "Skalldyr",
            kostnadPerRett: 25
        },
        {
            id: "00023",
            navn: "Skogsopp",
            type: "Grønsaker",
            kostnadPerRett: 15
        },
        
        
        
    ];

    const getAllIngredienser = () => ingredienser;

    return {getAllIngredienser};

}());

export default IngredienserModule;