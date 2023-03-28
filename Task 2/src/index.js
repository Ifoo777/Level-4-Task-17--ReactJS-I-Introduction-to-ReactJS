import React from 'react';
import ReactDOM from 'react-dom';

// import bootstrap styling
import 'bootstrap/dist/css/bootstrap.min.css';
// import css styling
import './styles.css';

//Display username and surname

function userBasicInfo (user) {
  let displayMessage = <p>Welcome {user.name} {user.surname}</p>
  return displayMessage;
}

//Display profile photo of the user

function profilePhoto(user){

  return <img src = {user.profileImg} alt = {user.name + " " + user.surname} class = "profilePhoto" />
}

//Display in a table additional information about the user

function userAdditionalInfo(user) {
  let displayMessage = <table class = "table-bordered">
    <tr>
    <td>Date of birth:</td>
    <td>{user.date_of_birth}</td>
  </tr>
  <tr>
    <td>Address:</td>
    <td>{user.address}</td>
  </tr>
  <tr>
    <td>Country:</td>
    <td>{user.country}</td>
  </tr>
  <tr>
    <td>E-Mail:</td>
    <td>{user.email}</td>
  </tr>
  <tr>
    <td>Contact Number:</td>
    <td>{user.telephone}</td>
  </tr>
  <tr>
    <td>Employer:</td>
    <td>{user.company}</td>
  </tr>
  </table>

  return displayMessage;
}

//Display all the items the user has in his/her cart
function cartItems(user){

  // Create an array for all the items int he cart
  let shoppingList = []
  //Push all the items into the cart with the correct html tags<li> in this case
  user.shopping_cart.forEach((data) => {
    // use Boostrap class list-group-item
    shoppingList.push(<li class="list-group-item">{data}</li>)
  })

    //Return unordered list with the list items inside
    return <ul>{shoppingList}</ul>;
  }

// Properties of the user
const user = {
  name: 'Irfaan',
  surname: 'Osman',
  date_of_birth : '1989/05/16', 
  address: '134 Marwah Street, Erasmia , Pretoria', 
  country: 'South Africa', 
  email: 'ossygt3@123mail.com', 
  telephone: '0116253322', 
  company: 'PC Company',
  profileImg: require( './photo.jpg' ),
  shopping_cart: ['Lenovo', 'HP', 'Dell', 'Acer']
};

// Display message for react
const element = (
  <div>
    <h1>
      {userBasicInfo(user)}  {profilePhoto(user)}
    </h1>
    <br></br>
    <h2><u>Your Detail:</u></h2>
    <h3>
      {userAdditionalInfo(user)}
    </h3>
    <br></br>
    <h2><u>Shopping Cart Items:</u></h2>
    {cartItems(user)}
    <br></br>
  </div>
);

// Render in react
ReactDOM.render(element, document.getElementById('root'));