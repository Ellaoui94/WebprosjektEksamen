const RestaurantModule = (function() {

    const restauranter = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "00000",
            navn: "PLACEHOLDER",
            adresse: "Gateveien 1, 0000 OSLO",
            telefon: "00000000",
            bilde: "bildefil.png",
            kapasitet: 50,
            leder: ["SAMPLE NAME", "00001"]
        },
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "00001",
            navn: "SAMPLENAME",
            adresse: "Veigata 1, 0001 OSLO",
            telefon: "99999999",
            bilde: "bildefil.png",
            kapasitet: 50,
            leder: ["PLACE HOLDER", "00000"]
        },
        {
            id: "00002",
            navn: "Gyldne Pizza Sentrum",
            adresse: "Karl Johans Gate 50, 0159 OSLO",
            telefon: "45544554",
            bilde: "filnavn.png",
            kapasitet: 150,
            leder: ["Anders Andersen", "00002"]
        }
    ];

    const getAllRestauranter = () => restauranter;

    return {getAllRestauranter};

}());

export default RestaurantModule;