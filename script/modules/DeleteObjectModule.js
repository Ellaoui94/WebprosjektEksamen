// Fikk ikke til å implementere denne riktig av en eller annen grunn

const DeleteObjectModule = (function() {

    const deleteObject = (deleteInput, connectedArray, deletePopup, card) => {
        if (deleteInput.value === "SLETT"){
            connectedArray.splice(connectedArray.findIndex(o => o.id == card.id), 1);
            deletePopup.classList.remove("is-active");
            deleteInput.value = "";
        };
    };

    return {deleteObject};

}());

export default DeleteObjectModule;