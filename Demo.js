let UserDataForm = document.getElementById("UserDataForm");
let UserList = document.getElementById("UserList");

let DeleteBtn = document.getElementById("DeleteBtn");


let Users = [];


function DisplayUsers() 
{
  UserList.innerHTML = "";

  Users.forEach((e)=>{
    UserList.innerHTML += `
      <div class = "Card">${e.Name}</div>

    `
  })



}


UserDataForm.addEventListener("submit", (e) => 
{
  e.preventDefault();
  let Obj = {
    Id: e.target[0].value,
    Name: e.target[1].value,
    Age: e.target[2].value,
  };


  e.target[0].value = "";
  e.target[1].value = "";
  e.target[2].value = "";



  Users.push(Obj);
  DisplayUsers();

});


DeleteBtn.onclick = ()=>{
  let DId = prompt("Enter The Id You want to Delete:")

    // ! Method 1
  // let Index = -1;
  // for(let i in Users)
  // {
  //     if(Users[i].Id == DId)
  //     {
  //       Index = i;
  //       break;
  //     }
  // }

  // if(Index != -1)
  // {
  //   Users.splice(Index,1)
  //   DisplayUsers();
  // }

  // else
  // {
  //   alert("User Not Found");
  // }

  // ! Method 2
  Users = Users.filter((e)=> e.Id != DId);
  DisplayUsers();
}