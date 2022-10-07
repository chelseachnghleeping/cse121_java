/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a strininfo 
// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
let myinfo = {
    name: ' Chelsea Chngh Lee Ping',
    photo: 'images/me.jpg',
    foods: [
        'Chicken Curry',
        'Spaghetti',
        'Korean BBQ Chicken',
        'Chinese Food'
    ],
    hobbies: [
        'Sketching', 
        'Swimming', 
        'Teakwondo', 
        'Hiking', 
        'Cycling', 
        'Music'
    ]
};

// Step 6: Add another property named placesLived with a value of an empty array
let place = {
    placeLived: 'Malaysia'
};

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myinfo.placesWorked = [
    {
        place: 'Printing Company',
        length: '3 years'
    },
    {
        place: 'Law Firm',
        lenght: '5 years'
    }
]

// Step 8: For each property, add appropriate values as strings
myinfo.placesWorked.forEach((placeWorked) => {
    let placesWorkedPlace = document.createElement('dt');
    placesWorkedPlace.textContent = placeWorked.place;

    let placesWorkedLength = document.createElement('dd');
    placesWorkedLength.textContent = placeWorked.length;

    document.querySelector('#places-worked').appendChild(placesWorkedPlace);
    document.querySelector('#places-worked').appendChild(placesWorkedLength);
})

// Step 9: Add additional objects with the same properties for each place you've lived
myinfo.placeLived.forEach((placeLived) => {
    let placeLived = document.createElement('dt');
    placeLived.textContent = placeLived.place;

    let placeLivedLength = document.createElement('dd');
    placeLivedLength.textContent = placeLivedLength

    document.querySelector('#places-lived').appendChild(placeLived)
    document.querySelector('#places-lived').appendChild(placeLivedLength)
})

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = info.name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', info.photo);

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', info.name);

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
myinfo.favoriteFoods.forEach(food => {
    let favoriteFoodItem = document.createElement('li');
    favoriteFoodItem.textContent = food;
    document.querySelector('#favorite-foods').appendChild(favoriteFoodItem)
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
myinfo.hobbies.forEach(hobby => {
    let hobbyItem = document.createElement('li');
    hobbyItem.textContent = hobby;
    document.querySelector('#hobbies').appendChild(hobbyItem)
});

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
myinfo.placeLived.forEach((placeLived) => {
    let placeLivedItem = document.createElement('li');
    placeLivedItem.textContent = placeLived.places;

    let placeLivedLength = document.createElement('dd');
    placeLivedLength.textContent = placeLived.lenght;

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
    document.querySelector('#places-lived').appendChild(placeLivedItem);
    document.querySelector('#places-lived').appendChild(placeLivedLength);
}) 