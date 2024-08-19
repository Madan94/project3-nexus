window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction(chk) {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  let pricing = document.getElementById('pricing');

  if (chk.checked) {
      pricing.classList.add("on_check")
  }
  else {
      pricing.classList.remove("on_check")
  }
}

// Hover Effect of Service Card

var card1=document.getElementById("service-card1");
var heading1=document.getElementById("service-heading1");
var paragraph1=document.getElementById("service-para1");

card1.addEventListener("mouseover",function(){
    card1.classList.add("service-card-hover");
    heading1.style.color="yellow";
    paragraph1.style.color="#fff";
})

card1.addEventListener("mouseleave",function(){
    card1.classList.remove("service-card-hover");
    heading1.style.color="#10274a";
    paragraph1.style.color="#000";
})

var card2=document.getElementById("service-card2");
var heading2=document.getElementById("service-heading2");
var paragraph2=document.getElementById("service-para2");

card2.addEventListener("mouseover",function(){
    card2.classList.add("service-card-hover");
    heading2.style.color="yellow";
    paragraph2.style.color="#fff";
})

card2.addEventListener("mouseleave",function(){
    card2.classList.remove("service-card-hover");
    heading2.style.color="#10274a";
    paragraph2.style.color="#000";
})

var card3=document.getElementById("service-card3");
var heading3=document.getElementById("service-heading3");
var paragraph3=document.getElementById("service-para3");

card3.addEventListener("mouseover",function(){
    card3.classList.add("service-card-hover");
    heading3.style.color="yellow";
    paragraph3.style.color="#fff";
})

card3.addEventListener("mouseleave",function(){
    card3.classList.remove("service-card-hover");
    heading3.style.color="#10274a";
    paragraph3.style.color="#000";
})

var card4=document.getElementById("service-card4");
var heading4=document.getElementById("service-heading4");
var paragraph4=document.getElementById("service-para4");

card4.addEventListener("mouseover",function(){
    card4.classList.add("service-card-hover");
    heading4.style.color="yellow";
    paragraph4.style.color="#fff";
})

card4.addEventListener("mouseleave",function(){
    card4.classList.remove("service-card-hover");
    heading4.style.color="#10274a";
    paragraph4.style.color="#000";
})

var card5=document.getElementById("service-card5");
var heading5=document.getElementById("service-heading5");
var paragraph5=document.getElementById("service-para5");

card5.addEventListener("mouseover",function(){
    card5.classList.add("service-card-hover");
    heading5.style.color="yellow";
    paragraph5.style.color="#fff";
})

card5.addEventListener("mouseleave",function(){
    card5.classList.remove("service-card-hover");
    heading5.style.color="#10274a";
    paragraph5.style.color="#000";
})

var card6=document.getElementById("service-card6");
var heading6=document.getElementById("service-heading6");
var paragraph6=document.getElementById("service-para6");

card6.addEventListener("mouseover",function(){
    card6.classList.add("service-card-hover");
    heading6.style.color="yellow";
    paragraph6.style.color="#fff";
})

card6.addEventListener("mouseleave",function(){
    card6.classList.remove("service-card-hover");
    heading6.style.color="#10274a";
    paragraph6.style.color="#000";
})


var copy=document.getElementById("slider-track").cloneNode(true);
document.getElementById("logo-slider").appendChild(copy);

// Form Submissions Handling

const form = document.getElementById('form');
const result = document.getElementById('result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);
  result.innerHTML = "Please wait..."

    fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = "Form submitted successfully";
            } else {
                console.log(response);
                result.innerHTML = json.message;
            }
        })
        .catch(error => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 3000);
        });
});


// Navbar Toggle

function change(){
    let navtoggle=document.getElementById("nav-icon");
    let list = document.getElementById("nav-list");

    navtoggle.classList.toggle("display-icon");
    
    if (list.style.display === "block") {
        list.style.display = "none";
    } else {
        list.style.display = "block";
    }

}
