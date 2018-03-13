function searchAuction(){

    let searchValue = document.getElementById("search-input").value;
    let result = auktionURL.filter(obj =>  obj.Titel.includes(searchValue));

    let searchResultList = document.getElementById("auction-wrapper");

    //var noSearchWord = document.getElementById("no-word");

    //noSearchWord.innerHTML = "";
    searchResultList.innerHTML = "";

    for(let object of result) {
        if(searchValue === "" || searchValue === null) {
            //noSearchWord.innerHTML = "Du måste skriva in ett sökord";
            alert("Hej");
            return false;
        }
        else {
            let auctionObject = document.createElement("p");
            let text = object.Titel + ", " + object.Utropspris + " kr";

            let textNode = document.createTextNode(text);

            newAuction.appendChild(textNode);

            searchResultList.appendChild(newAuction);

        }
    }
}
