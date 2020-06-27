function switchNav() {
    var navHeight = "360px";
    var navSectionContainerHeight = "75px";
    //var contentsDisplay = "show";
    var elem = document.getElementById("navsection");

    //important one
    var navItem1 = document.getElementById("navsectionItem1");
    var navItem2 = document.getElementById("navsectionItem2");
    var navItem3 = document.getElementById("navsectionItem3");
    var navItem4 = document.getElementById("navsectionItem4");

    var heading = document.getElementById("navsection-header");
    heading_def = heading.style.paddingTop;

    //CONDITIONS

    //if extended
    if ( elem.style.height == navHeight) {
        //retract
        navHeight = "120px";
    }

    //DO THINGS
    elem.style.height = navHeight;

    if (navHeight !== "120px") {
        //EXPAND
        document.getElementById("navsection-header").innerHTML = "";

        document.getElementById("navsectionItem1").innerHTML = "About";
        document.getElementById("navsectionItem2").innerHTML = "Portfolio";
        document.getElementById("navsectionItem3").innerHTML = "Programming";
        document.getElementById("navsectionItem4").innerHTML = "Contact";
    } else {
        //RETRACT
        document.getElementById("navsection-header").innerHTML = "What's Next?";

        document.getElementById("navsectionItem1").innerHTML = "";
        document.getElementById("navsectionItem2").innerHTML = "";
        document.getElementById("navsectionItem3").innerHTML = "";
        document.getElementById("navsectionItem4").innerHTML = "";
    }
    
}