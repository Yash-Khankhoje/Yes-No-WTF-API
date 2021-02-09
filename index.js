var counter = 0
function Executer(){
    counter += 1
    if(counter > 1){
        alert('Please click again');
        location.reload();
    }
    fetch("https://yesno.wtf/api")
    .then( async response=>{
        let fetchData = await response.json()
        console.log(fetchData)
        showData(fetchData);
    })
}

function showData(data){
    let card = document.createElement("div")
    card.setAttribute("class","card w-100 hvr-grow-shadow")

    let card_img = document.createElement("img")
    card_img.setAttribute("class","card-img-top img-fluid")
    card_img.setAttribute("src",data['image']);
    card_img.setAttribute("alt","card-img ");

    card.appendChild(card_img);


    document.body.appendChild(card);

}