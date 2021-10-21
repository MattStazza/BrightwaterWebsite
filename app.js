/* Toggle between showing and hiding the navigation menu links (mobile view)
when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("drop_menu");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }