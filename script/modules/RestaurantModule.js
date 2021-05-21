const RestaurantModule = (function() {

    const restauranter = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: 00000,
            navn: "PLACEHOLDER",
            adresse: "Gateveien 1, 0000 OSLO",
            telefon: "00000000",
            bilde: "bildefil.png",
            kapasitet: 50,
            leder: "SAMPLE NAME"
        },
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: 00001,
            navn: "SAMPLENAME",
            adresse: "Veigata 1, 0001 OSLO",
            telefon: "99999999",
            bilde: "bildefil.png",
            kapasitet: 50,
            leder: "PLACE HOLDER"
        }
    ];

    const getAllRestauranter = () => {
        return restauranter;
    };

    return {getAllRestauranter};

}());

export default RestaurantModule;