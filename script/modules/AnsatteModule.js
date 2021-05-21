const AnsatteModule = (function(){

    const ansatte = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: 00000,
            navn: "PLACE HOLDER",
            alder: 30,
            stilling: "Ansatt",
            arbeidssted: "RESTAURANTNAVN",
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "bildefil.png"
        },
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: 00001,
            navn: "SAMPLE NAME",
            alder: 30,
            stilling: "Ansatt",
            arbeidssted: "RESTAURANTNAVN",
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "bildefil.png"
        },
        {
            id: 00002,
            navn: "Anders Andersen",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Gyldne Pizza Sentrum",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png"
        },
    ];

    const getAllAnsatte = () => ansatte;

    return {getAllAnsatte};

}());

export default AnsatteModule;