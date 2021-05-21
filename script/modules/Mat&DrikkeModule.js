const MatOgDrikkeModule = (function(){

    const matOgDrikke = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: 00000,
            navn: "PLACEHOLDER",
            kategori: "Hovedrett",
            bilde: "bildefil.png",
            ingredienser: [
                "Ingrediens 1",
                "Ingrediens 2",
                "Ingrediens 3"
            ],
            allergener: [
                "Allergen 1",
                "Allergen 2",
                "Allergen 3"
            ],
            kostnad: 50,
            pris: 200
        },
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: 00001,
            navn: "SAMPLENAME",
            kategori: "Hovedrett",
            bilde: "bildefil.png",
            ingredienser: [
                "Ingrediens 1",
                "Ingrediens 2",
                "Ingrediens 3"
            ],
            allergener: [
                "Allergen 1",
                "Allergen 2",
                "Allergen 3"
            ],
            kostnad: 50,
            pris: 200
          }
    ];

    const getAllMatOgDrikke = () => {
        return matOgDrikke;
    };

    return {getAllMatOgDrikke};

}());

export default MatOgDrikkeModule;