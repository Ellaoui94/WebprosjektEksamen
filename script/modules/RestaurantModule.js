const RestaurantModule = (function() {

    const restauranter = [
        {
            id: "10000",
            navn: "Gyldne Pizza Grorud",
            adresse: "Gateveien 1, 0000 OSLO",
            telefon: "00000000",
            bilde: "building.png",
            kapasitet: 50,
            leder: ["Erna Stoltenberg", "20001"] // Skal samkjkøres med AnsattModule
        },
        {
            id: "10001",
            navn: "Gyldne Pizza Lillestrøm",
            adresse: "Veigata 1, 0001 OSLO",
            telefon: "99999999",
            bilde: "building.png",
            kapasitet: 150,
            leder: ["Mario Mario", "20009"] // Skal samkjkøres med AnsattModule
        },
        {
            id: "10002",
            navn: "Gyldne Pizza Fjellhamar",
            adresse: "Gategata 1, 0002 OSLO",
            telefon: "45544554",
            bilde: "building.png",
            kapasitet: 50,
            leder: ["Baktus Teethus", "20024"] // Skal samkjkøres med AnsattModule
        },
        {
            id: "10003",
            navn: "Gyldne Pizza Majorstuen",
            adresse: "Veiveien 1, 0003 OSLO",
            telefon: "45677654",
            bilde: "building.png",
            kapasitet: 150,
            leder: ["Sonic Eggman", "20032"] // Skal samkjkøres med AnsattModule
        }
    ];

    const getAllRestauranter = () => restauranter;

    return {getAllRestauranter};

}());

export default RestaurantModule;