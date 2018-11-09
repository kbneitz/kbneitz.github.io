//*******************************************************************************
// navMenu - Navigation Menu
//
// This function is called from an onclick event from the nav-icon div. Several
// things will occur from calling this function:
//
//   - toggle the css class nav-close which will basically cause the nav-icon to
//     transform between the menu icon and close icon.
//
//   - Alter the title of the nav-icon div which will change the tool tip to the
//     proper message.
//
//   - Dependening on our state, show/hide the navigation div and the main section.
//*******************************************************************************
function navMenu(obj) {
  if (obj.title == 'Click to Open.')
       obj.title = 'Click to Close.';
  else obj.title = 'Click to Open.';
  obj.classList.toggle("nav-close");

  var navClass = document.getElementById("navigate").className;
  if (navClass == "hide") {
    setTimeout(function(){ document.getElementById("main").style.display = "none"; }, 1000);
    document.getElementById("navigate").className = "show";
    document.getElementById("main").className     = "hide";
  } else {
    setTimeout(function(){ document.getElementById("main").style.display = "block"; }, 1000);
    document.getElementById("navigate").className = "hide";
    document.getElementById("main").className     = "show";
  }
}
