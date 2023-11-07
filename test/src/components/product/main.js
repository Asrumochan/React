let users=[{
    "id": 1,
    "name": "Nightmare Alley",
    "price": 141,
    "quantity": 5
  }, {
    "id": 2,
    "name": "Invisible Woman, The",
    "price": 146,
    "quantity": 6
  }, {
    "id": 3,
    "name": "Shade",
    "price": 352,
    "quantity": 2
  }, {
    "id": 4,
    "name": "Fanny",
    "price": 390,
    "quantity": 7
  }, {
    "id": 5,
    "name": "How I Killed My Father (a.k.a. My Father and I) (Comment j'ai tué mon Père)",
    "price": 279,
    "quantity": 4
  }, {
    "id": 6,
    "name": "Napoleon Dynamite",
    "price": 386,
    "quantity": 1
  }, {
    "id": 7,
    "name": "Croods, The",
    "price": 125,
    "quantity": 5
  }, {
    "id": 8,
    "name": "My Bodyguard",
    "price": 184,
    "quantity": 3
  }, {
    "id": 9,
    "name": "Heart Is a Lonely Hunter, The",
    "price": 405,
    "quantity": 5
  }, {
    "id": 10,
    "name": "Kid Millions",
    "price": 373,
    "quantity": 10
  }]
  function display_User(){
    let rows="";
    for(let i=0;i<users.length;i++){
            rows+=`<tr>
            <td>${users[i].id}</td>
            <td>${users[i].name}</td>
            <td>${users[i].price}</td>
            <td>${users[i].quantity}</td>
           </tr>`
           console.log(i);
    }
    document.getElementById('user').innerHTML = rows;
}
function change(){
      document.getElementById('display').style.backgroundColor="blue"
}
export {display_User,change}