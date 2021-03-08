import {farmersData} from './data'

farmersData.forEach(state => {
    var state_card = document.createElement('a');
    state_card.classList.add("col-lg-3", "mb-3", "state-card");
    state_card.onclick =  function(event) {
        showDistricts(state.Name);
    }

    var cardDiv = document.createElement('DIV');
    cardDiv.classList.add("card");

    var cardImg = document.createElement('IMG');
    cardImg.classList.add("card-img");
    if(state.Image){
        cardImg.setAttribute("src", state.Image);
    }
    else{
        cardImg.setAttribute("src", "https://images.livemint.com/img/2020/12/03/600x338/20201202104L_1606909208417_1606909231144_1607010576096.jpg");
    }
    cardImg.setAttribute("width", "253");
    cardImg.setAttribute("height", "230");

    var cardBody = document.createElement('DIV');
    cardBody.classList.add("card-body");

    var cardTitle = document.createElement("H5");
    cardTitle.classList.add("card-title");
    cardTitle.innerHTML = state.Name;

    cardBody.appendChild(cardTitle);
    cardDiv.appendChild(cardImg);
    cardDiv.appendChild(cardBody);

    state_card.appendChild(cardDiv);

    document.getElementById('state-cards').appendChild(state_card)
});

function showDistricts(stateName) {
    window.open(`districts.html?state=${stateName}`, '_self');
}

function selectTab(clickName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
    }
    document.getElementById(clickName).style.display = "block";
    document.getElementById(clickName+'-btn').classList.add("active");
}
