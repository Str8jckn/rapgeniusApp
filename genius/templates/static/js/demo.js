var data = localStorage.getItem("details")
var userDetails = JSON.parse(data)
console.log(userDetails)


// var array = JSON.parse(localStorage.getItem("userDetails"))
function login(){
    var uname = document.getElementById("email").value
    var password = document.getElementById("password").value

    if((uname == "") || (password == "")){
        alert("Please Fill All the Fields !!")
    }
    else{
        for(var i=0; i < userDetails.length; i++){
            if((userDetails[i].username == "admin@gmail.com") && (userDetails[i].password == "password")){
                //Redirect hime to admin page
                alert("Hey Admin")
                
            }
            else if((userDetails[i].username == uname )&&(userDetails[i].password == password)){
                // Redirect him to his own page
                alert("Hey User")
            }
        }
    }
}