const AnsatteModule = (function(){

    const ansatte = [
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "00000",
            navn: "PLACE HOLDER",
            alder: 30,
            stilling: "Ansatt",
            arbeidssted: "RESTAURANTNAVN",
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            // Denne skal ikke brukes i det ferdige produktet
            id: "00001",
            navn: "SAMPLE NAME",
            alder: 30,
            stilling: "Ansatt",
            arbeidssted: "RESTAURANTNAVN",
            stillingsprosent: 100,
            timelønn: 200,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
        {
            id: "00002",
            navn: "Anders Andersen",
            alder: 43,
            stilling: "Leder",
            arbeidssted: "Sentrum",
            stillingsprosent: 100,
            timelønn: 250,
            bilde: "bildefil.png",
            telefon: "92356087"
        },
    ];

    const getAllAnsatte = () => ansatte;

    const getByArbeidssted = ( arbeidssted ) => ansatte.filter( ansatt => 
        ansatt.arbeidssted.toLowerCase() === arbeidssted.toLowerCase() );
        
        
    

    return {getAllAnsatte,
        getByArbeidssted
    };

}());

export default AnsatteModule;