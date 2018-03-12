/* JQuery Function to animate the Switch Button */
$(function(Switch){
    // Creates the click event that tells the button to move
    $("#buttonOnOff").click(function(){
        // Adds/Removes the "activate" state
        $("button").toggleClass("activate") 
        // Creates a message viewable in the console, just to check that it is registering
        console.log("Switch Clicked!");
    });
});

/* Tried a few different functions to animate the button but this one was the most fluid */