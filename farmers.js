import {farmersData} from './data.js'

window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }
    
    var farmers;
    for(let state in farmersData){
        if(farmersData[state].Name === data['state']){
            const districts = farmersData[state].Districts;
            districts.forEach(district => {
                if(district.Name === data['district']){
                    farmers = district.Farmers;
                }
            })
        }
    }

    farmers.forEach(farmer => {    
        var farmer_card = document.createElement('a');
        farmer_card.classList.add("col-lg-3", "mb-3", "farmer-card");
        $(farmer_card).attr("data-toggle", "modal");
        $(farmer_card).attr("data-target", "#myModal");
        farmer_card.onclick =  function(event) {
            addDataToModal(farmer);
        }

        var cardDiv = document.createElement('DIV');
        cardDiv.classList.add("card");

        var cardImg = document.createElement('IMG');
        if(farmer.Image){
            cardImg.setAttribute("src", farmer.Image);
        }
        else{
            cardImg.setAttribute("src", "https://images.livemint.com/img/2020/12/03/600x338/20201202104L_1606909208417_1606909231144_1607010576096.jpg");
            cardImg.style.opacity = "0.5";
        }
        // cardImg.setAttribute("width", "253");
        cardImg.setAttribute("height", "230");

        var cardBody = document.createElement('DIV');
        cardBody.classList.add("card-body");

        var cardTitle = document.createElement("H5");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = farmer.Name + ", " + farmer.Age;

        cardBody.appendChild(cardTitle);
        cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBody);

        farmer_card.appendChild(cardDiv);
        document.getElementById('farmer-cards').appendChild(farmer_card);
    });
}

function addDataToModal(data) {
    $('.modal-title').html(data['Name']+", "+data["Age"])
    var list = document.createElement('UL');
    for (let key in data){
        if(key === "Name" || key === "Age" || key === "Image")
            continue;
        var listItem = document.createElement('LI');
        if(key === "Links"){
            data[key].forEach((link, index) => {
                var source = document.createElement('a');
                source.innerHTML = "Source "+ index + " ";
                source.target = "_blank"
                source.href = link;
                listItem.appendChild(source);
            });
        }
        else{
            listItem.innerHTML = key + ": " + data[key];
        }
        list.appendChild(listItem)
    }
    $('.modal-body').html(list);
}