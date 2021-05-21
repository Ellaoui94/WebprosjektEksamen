const IngredienserModule = (function(){

    const ingredienser = [
        {
            id: 00000,
            navn: "PLACEHOLDER",
            type: "Mel",
            kostnadPerRett: 1
        },
        {
            id: 00001,
            navn: "SAMPLENAME",
            type: "ost",
            kostnadPerRett: 5
        }
    ];

    const getAllIngredienser = () => {
        return ingredienser;
    };

    return {getAllIngredienser};

}());

export default IngredienserModule;