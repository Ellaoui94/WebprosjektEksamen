const IngredienserModule = (function(){

    const ingredienser = [
        {
            id: 00000,
            navn: "Fin bunn",
            type: "Bunn",
            kostnadPerRett: 10
        },
        {
            id: 00001,
            navn: "Cheddar",
            type: "Ost",
            kostnadPerRett: 10
        },
        {
            id: 00002,
            navn: "Speltbunn",
            type: "Bunn",
            kostnadPerRett: 15
        },
        {
            id: 00003,
            navn: "Tomatsaus",
            type: "Saus",
            kostnadPerRett: 10
        },
        {
            id: 00004,
            navn: "Grov bunn",
            type: "Bunn",
            kostnadPerRett: 10
        },
        {
            id: 00005,
            navn: "Pepperoni",
            type: "Kjøtt",
            kostnadPerRett: 20
        },
        {
            id: 00006,
            navn: "Paprika",
            type: "Grønnsaker",
            kostnadPerRett: 15
        }
    ];

    const getAllIngredienser = () => {
        return ingredienser;
    };

    return {getAllIngredienser};

}());

export default IngredienserModule;