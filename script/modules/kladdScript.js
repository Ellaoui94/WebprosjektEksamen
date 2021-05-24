


const generateRestauranter = (chosenArray) => {

    let htmlText = "";

    chosenArray.forEach(restaurant => {
htmlTxt = `
<div class="modal">
<div class="modal-background"></div>
<div class="modal-content has-background-white py-5 px-5">

    <h3 class="title has-text-centred mb-6">${resturant.navn}</h3>
    <form>
    <div class="card-image has-text-centered px-6">
                            <img src="images/${resturant.bilde}" alt="resturant">
                        </div>
        <div class="field">
            <label class="label">ID</label>
            <div class="control">
                <input type="text" class="input" placeholder="${resturant.id}">
            </div>
        </div>
        <div class="field">
            <label class="label">Adresse</label>
            <div class="control">
                <input type="text" class="input" placeholder="${restaurant.adresse}">
            </div>
        </div>
        <div class="field">
            <label class="label">Telefon</label>
            <div class="control">
                <input type="text" class="input" placeholder="${restaurant.telefon}">
            </div>
        </div>
        <div class="field">
            <label class="label">Leder</label>
            <div class="control">
                <input type="text" class="input" placeholder="${restaurant.leder[0]}">
            </div>
        </div>
        <div class="field">
            <label class="label">Kapasitet</label>
            <div class="control">
                <input type="text" class="input" placeholder="${restaurant.kapasitet}">
            </div>
        </div>
        <div class="field">
            <div class="control">
                <label class="checkbox">
                    <input type="checkbox">
                    I agree to the <a href="">Terms & Conditions</a>
                </label>
            </div>
        </div>
        <div class="mt-6 has-text-centered">
            <button class="button is-primary">Sign Up</button>
        </div>
    </form>
</div>
</div>
`;
});

restaurantSection.innerHTML = htmlText;

};
