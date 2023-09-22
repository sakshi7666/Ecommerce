let cloths = document.getElementById("cloths");
let reviews = document.getElementById("reviews");
let contacts = document.getElementById("contacts");
let blogs = document.getElementById("blogs");

cloths.addEventListener("click", function(){
    cloths.style.color="red";
    reviews.style.color="black";
    contacts.style.color="black";
    blogs.style.color="black";

})

reviews.addEventListener("click", function(){
    cloths.style.color="black";
    reviews.style.color="red";
    contacts.style.color="black";
    blogs.style.color="black";

})

blogs.addEventListener("click", function(){
    cloths.style.color="black";
    reviews.style.color="black";
    contacts.style.color="black";
    blogs.style.color="red";

})


contacts.addEventListener("click", function(){
    cloths.style.color="black";
    reviews.style.color="black";
    contacts.style.color="red";
    blogs.style.color="black";

})

let login = document.getElementById("login");

login.addEventListener("click", function(){
    let loginPage = document.querySelector(".loginPage").style.display="block";
 
})

let loged = document.getElementById("loged");

loged.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password")
    }else{
        alert("You Loged In")
        document.querySelector(".loginPage").style.display="none";
    }

})

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    console.log("Aa");
    let names = document.getElementById("name");
    let password = document.getElementById("pass");

    console.log(names.value);
    if(names.value == "" || password == ""){
        alert("Please Enter Name and Password")
    }else{
        alert("Thanks for connecting")
    }
})


// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});



// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);