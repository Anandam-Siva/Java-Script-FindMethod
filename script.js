let places = ["hyderabad", "vijayavada", "telangana"];

let place = places.find(function (ele) {
    return ele.startsWith("h");
})
console.log(place);
