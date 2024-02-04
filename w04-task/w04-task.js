/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Aldair Morales",
    photo: "../w02-task/images/me.jpg",
    favoriteFoods: [
        'Pizza',
        'Tacos',
        'Sushi',
        'Burgers',
        'Doughnuts'
      ],
    hobbies: ['Photography', 'Painting', 'Indie Movies'],
    placesLived: []
  };

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
      place: 'Mexico',
      length: '18 years'
    },
    {
        place: 'Wales', 
        length: '1 year'
    },
    {
    place: 'England',
    length: '1 year'
    },
    {
        place: 'United  States',
        length: '3 years'
    }
  );

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;


/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    
    dt.textContent = place.place;
    dd.textContent = place.length;
    
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
  });



