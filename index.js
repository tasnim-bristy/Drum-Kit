var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // alert("I got clicked!");

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML){
            case "w":
                var tom1 = new Audio("sounds/tom-1.wav");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("sounds/tom-2.wav");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("sounds/tom-3.wav");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("sounds/tom-4.wav");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("sounds/snare.wav");
                snare.play();
                break;

            case "l":
                var crash = new Audio("sounds/crash.wav");
                crash.play();
                break;

        }
    })
}
