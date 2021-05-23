import IngredienserModule from "./IngredienserModule.js";

const MatOgDrikkeModule = (function(){

    const matOgDrikke = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: 001,
            navn: "Margherita",
            kategori: "Mat",
            type: "Pizza",
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
            kostnad: getKostnad(),
            pris: getPris()
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
            kostnad: getKostnad(),
            pris: getPris()
        },
        {
            id: 00002,
            navn: "Enkel Pepperoni",
            kategori: "Pizza",
            bilde: "filnavn.png",
            ingredienser: [
                "Fin bunn",
                "Cheddar",
                "Tomatsaus",
                "Pepperoni",
                "Paprika"
            ],
            allergener: [
                "Egg",
                "Mel",
                "Melk"
            ],
            kostnad: getKostnad(),
            pris: getPris()
        }
    ];

    const muligeIngredienser = IngredienserModule.getAllIngredienser

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

    const getAllMatOgDrikke = () => matOgDrikke;

    return {getAllMatOgDrikke};

}());

export default MatOgDrikkeModule;