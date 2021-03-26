import {farmersData} from './data.js'

window.onload = function () {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
         tmp = params[i].split('=');
         data[tmp[0]] = tmp[1];
    }

    var districts;
    for(let state in farmersData){
        if(farmersData[state].Name === data.state){
            districts = farmersData[state].Districts;
            break;
        }
    }
    document.getElementById('district-header').innerHTML = `List of farmers from ${data.state} state` 
    document.getElementById('district-header').style.color = 'burlywood';
    document.getElementById('district-cards').innerHTML = "";
    districts.forEach(district => {
        var district_card = document.createElement('a');
        district_card.classList.add("col-lg-3", "mb-3", "district-card");
        district_card.onclick =  function(event) {
            showFarmers(district.Name, data.state);
        }
        var cardDiv = document.createElement('DIV');
        cardDiv.classList.add("card");
    
        // var cardImg = document.createElement('IMG');
        // cardImg.classList.add("card-img");
        // if(district.Image){
        //     cardImg.setAttribute("src", district.Image);
        // }
        // else{
        //     cardImg.setAttribute("src", "https://images.livemint.com/img/2020/12/03/600x338/20201202104L_1606909208417_1606909231144_1607010576096.jpg");
        // }
        // cardImg.setAttribute("width", "253");
        // cardImg.setAttribute("height", "230");
    
        var cardBody = document.createElement('DIV');
        cardBody.classList.add("card-body");
    
        var cardTitle = document.createElement("H5");
        cardTitle.classList.add("card-title");
        cardTitle.innerHTML = district.Name;
    
        cardBody.appendChild(cardTitle);
        // cardDiv.appendChild(cardImg);
        cardDiv.appendChild(cardBody);
    
        district_card.appendChild(cardDiv);
    
        document.getElementById('district-cards').appendChild(district_card);
    });
}

function showFarmers(districtName, stateName) {
    window.open(`farmers.html?state=${stateName}&district=${districtName}`,'_self');
}
