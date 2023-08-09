

var results = [];
var favouriteList = [];


function addToFavourite(){
    favouriteList.push(1);
    console.log(f);
}

var properties = [
    {
        "id": "prop1",
        "type": "House",
        "bedrooms": 3,
        "price": 750000,
        "tenure": "Freehold",
        "description": "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
        "location": "Petts Wood Road, Petts Wood, Orpington",
        "picture": "images/prop1pic1small.jpg",
        "url": "properties/prop1.html",
        "added": {
            "month": "October",
            "day": 12,
            "year": 2022
        }
    },
    {
        "id": "prop2",
        "type": "Flat",
        "bedrooms": 2,
        "price": 399995,
        "tenure": "Freehold",
        "description": "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
        "location": "Crofton Road Orpington BR6",
        "picture": "images/prop2pic1small.jpg",
        "url": "properties/prop2.html",
        "added": {
            "month": "September",
            "day": 14,
            "year": 2022
        }
    },
    {
        "id": "prop3",
        "type": "House",
        "bedrooms": 5,
        "price": 200000,
        "tenure": "Freehold",
        "description": "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
        "location": "Amarasekara M.W Thimibirigaskatuwa",
        "picture": "images/prop3pic1small.jpg",
        "url": "properties/prop3.html",
        "added": {
            "month": "November",
            "day": 21,
            "year": 2022
        }
    },
    {
        "id": "prop4",
        "type": "Flat",
        "bedrooms": 2,
        "price": 199999,
        "tenure": "Freehold",
        "description": "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
        "location": "samurdi M.W Thimibirigaskatuwa",
        "picture": "images/prop4pic1small.jpg",
        "url": "properties/prop4.html",
        "added": {
            "month": "January",
            "day": 6,
            "year": 2022
        }
    },
    {
        "id": "prop5",
        "type": "House",
        "bedrooms": 3,
        "price": 450000,
        "tenure": "Freehold",
        "description": "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
        "location": "Jaya M.w Kadawala",
        "picture": "images/prop5pic1small.jpg",
        "url": "properties/prop5.html",
        "added": {
            "month": "Auguest",
            "day": 30,
            "year": 2022
        }
    },
    {
        "id": "prop6",
        "type": "Flat",
        "bedrooms": 2,
        "price": 600000,
        "tenure": "Freehold",
        "description": "Presented in excellent decorative order throughout is this two double bedroom, two bathroom, garden flat. <br>The modern fitted kitchen is open plan to the living room which boasts solid wooden floors and includes integrated appliances including a dishwasher & a washing machine. This large open plan benefits from bi folding doors onto a secluded private courtyard garden. Both bedrooms are double sized, and the family bathroom boasts a matching three piece suite a shower attachment over the bath. There is also a separate wet room. There are walnut doors throughout and wiring for Sky TV/aerial points in the living room/kitchen and both bedrooms.<br>This apartment being only five years old, is still under a 10 year building guarantee...",
        "location": "Samagi M.W Thimibirigaskatuwa",
        "picture": "images/prop6pic1small.jpg",
        "url": "properties/prop6.html",
        "added": {
            "month": "April",
            "day": 4,
            "year": 2022
        }
    },
    {
        "id": "prop7",
        "type": "House",
        "bedrooms": 4,
        "price": 499995,
        "tenure": "Freehold",
        "description": "Attractive three bedroom semi-detached family home situated within 0.5 miles of Petts Wood station with fast trains to London and within easy walking distance of local shops, schools, bus routes and National Trust woodland. The property comprises; two receptions, fitted 18'9 x 10'1 kitchen/breakfast room and conservatory. The property also benefits from having a utility room and cloakroom. To the first floor there are three bedrooms and a family bathroom with separate WC. Additional features include double glazing, gas central heating and a well presented interior...",
        "location": "Jaya M.W kadawala",
        "picture": "images/prop7pic1small.jpg",
        "url": "properties/prop7.html",
        "added": {
            "month": "November",
            "day": 20,
            "year": 2022
        }
    }



]

function searchData() {

    results = [];
    let property_type = $('#propertyType').find(":selected").val();
    let no_of_beds = $('#noOfbedrooms').find(":selected").val();
    let price_range = $('#amount').val().replace('$', '').replace(/\s/g, '');
    let selected_date = $('#datepicker').datepicker('getDate');
    let post_code = $('#postCode').val();

    for (let i = 0; i < properties.length; i++) {

        if (property_type.toLowerCase() == properties[i].type.toLowerCase()) {

            if (Number(no_of_beds) == properties[i].bedrooms) {
                if (checkRecordExits(properties[i]) == false) {
                    results.push(properties[i]);
                }
            }
            const priceArray = price_range.split("-");
            let minPrice = priceArray[0];
            let maxPrice = priceArray[1];
            if (properties[i].price >= Number(minPrice) && properties[i].price <= Number(maxPrice)) {
                if (checkRecordExits(properties[i]) == false) {
                    results.push(properties[i]);
                }
            }
            if (selected_date != null && selected_date != undefined) {

                let year = properties[i].added.year;
                let month = properties[i].added.month;
                let day = properties[i].added.day;
                const addedDate = new Date(month + " " + day + " " + year);

                if (addedDate.getTime() === selected_date.getTime()) {
                    if (checkRecordExits(properties[i]) == false) {
                        results.push(properties[i]);
                    }
                }
            }
            if (post_code != null && post_code != undefined && post_code != "") {
                let location = properties[i].location.toLowerCase();
                let postCode = post_code.toLowerCase();
                if (location.includes(postCode)) {
                    console.log('sadsad');
                }
            }

        } else if (property_type == 'Any') {

            if (Number(no_of_beds) == properties[i].bedrooms) {
                if (checkRecordExits(properties[i]) == false) {
                    results.push(properties[i]);
                }
            }
            const priceArray = price_range.split("-");
            let minPrice = priceArray[0];
            let maxPrice = priceArray[1];
            if (properties[i].price >= Number(minPrice) && properties[i].price <= Number(maxPrice)) {
                if (checkRecordExits(properties[i]) == false) {
                    results.push(properties[i]);
                }
            }
            if (selected_date != null && selected_date != undefined) {

                let year = properties[i].added.year;
                let month = properties[i].added.month;
                let day = properties[i].added.day;
                const addedDate = new Date(month + " " + day + " " + year);

                if (addedDate.getTime() === selected_date.getTime()) {
                    if (checkRecordExits(properties[i]) == false) {
                        results.push(properties[i]);
                    }
                }
            }
            if (post_code != null && post_code != undefined && post_code != "") {
                let location = properties[i].location.toLowerCase();
                let postCode = post_code.toLowerCase();
                if (location.includes(postCode)) {
                    console.log('sadsad');
                }
            }
        }


    }
    appendData();
}

function checkRecordExits(property) {
    let found = false;
    for (let i = 0; i < results.length; i++) {
        if (property.id == results[i].id) {
            found = true;
            break;
        }
    }
    return found;
}


function appendData() {


    $("#results").remove();

    $('<div >', {
        id: 'results',
        class: 'row'
    }).appendTo('#results-container');

    results.forEach(element => {


        let year = element.added.year;
        let month = element.added.month;
        let day = element.added.day;
        const addedDate = month + " " + day + " " + year;

        $("<div>", { class: 'col-3 col-s-12' }).append(
            $("<a href='" + element.url + "'><img src='" + element.picture + "' width='200'></a>  <h3>" + element.type +
                "</h3><p>$ " + element.price +
                "</p><p>" + element.bedrooms + " bedrooms</p> <p>" + element.location + "</p><p style='font-size: small;color:red'>" + addedDate + "</p>")).appendTo('#results');

    });
    $("#results-container").show();
}

$(document).ready(function () {
    $("#results-container").hide();
});

