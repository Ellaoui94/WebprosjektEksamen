const RestaurantModule = (function() {

    const restauranter = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "10000",
            navn: "Gyldne Pizza Grünerløkka",
            adresse: "Gateveien 1, 0000 OSLO",
            telefon: "00000000",
            bilde: "placeholderRestaurant.jpg",
            kapasitet: 100,
            leder: ["Cecilie Clausen", "20001"] // Skal samkjkøres med AnsattModule
        },
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "10001",
            navn: "Gyldne Pizza Bjølsen",
            adresse: "Veigata 1, 0001 OSLO",
            telefon: "99999999",
            bilde: "placeholderRestaurant.jpg",
            kapasitet: 50,
            leder: ["Daniel Davidsen", "20000"] // Skal samkjkøres med AnsattModule
        },
        {
            id: "10002",
            navn: "Gyldne Pizza Sentrum",
            adresse: "Gategata 1, 0002 OSLO",
            telefon: "45544554",
            bilde: "placeholderRestaurant.jpg",
            kapasitet: 200,
            leder: ["Anders Andersen", "20002"] // Skal samkjkøres med AnsattModule
        },
        {
            id: "10003",
            navn: "Gyldne Pizza Holmen",
            adresse: "Veiveien 1, 0003 OSLO",
            telefon: "45677654",
            bilde: "placeholderRestaurant.jpg",
            kapasitet: 150,
            leder: ["Berit Bergsvik", "20003"] // Skal samkjkøres med AnsattModule
        }
    ];

    const getAllRestauranter = () => restauranter;

    return {getAllRestauranter};

}());

export default RestaurantModule;