const RestaurantModule = (function() {

    const restauranter = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "10000",
            navn: "Gyldne Pizza Grorud",
            adresse: "Gateveien 1, 0000 OSLO",
            telefon: "00000000",
            bilde: "building.png",
            kapasitet: 50,
            leder: ["Cecilie Clausen", "20001"] // Skal samkjkøres med AnsattModule
        },
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "10001",
            navn: "Gyldne Pizza Lillestrøm",
            adresse: "Veigata 1, 0001 OSLO",
            telefon: "99999999",
            bilde: "building.png",
            kapasitet: 150,
            leder: ["Daniel Davidsen", "20000"] // Skal samkjkøres med AnsattModule
        },
        {
            id: "10002",
            navn: "Gyldne Pizza Fjellhamar",
            adresse: "Gategata 1, 0002 OSLO",
            telefon: "45544554",
            bilde: "building.png",
            kapasitet: 50,
            leder: ["Anders Andersen", "20002"] // Skal samkjkøres med AnsattModule
        },
        {
            id: "10003",
            navn: "Gyldne Pizza Majorstuen",
            adresse: "Veiveien 1, 0003 OSLO",
            telefon: "45677654",
            bilde: "building.png",
            kapasitet: 150,
            leder: ["Berit Bergsvik", "20003"] // Skal samkjkøres med AnsattModule
        }
    ];

    const getAllRestauranter = () => restauranter;

    return {getAllRestauranter};

}());

export default RestaurantModule;