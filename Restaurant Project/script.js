document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("res").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "res.html"; 
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("event").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "events.html"; 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("rest").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "restaurant.html"; 
  });
});


document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("gar").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "garden.html"; 
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("gift").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "card.html"; 
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("cont").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "contact.html"; 
  });
});

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("logo").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "index.html"; 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("pro").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "login.html"; 
  });
});
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("me").addEventListener("click", function(event) {
    event.preventDefault();
    window.location.href = "menu.html"; 
  });
});
function showSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'flex'
}
function hideSidebar(){
  const sidebar = document.querySelector('.sidebar')
  sidebar.style.display = 'none'
}