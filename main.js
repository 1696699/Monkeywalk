var i = 1
function switchImageTo (){
    document.getElementById("image1").src="Monkey_0"+i+".png";
    if (i > 9){
        document.getElementById("image1").src="Monkey_"+i+".png";
    } else {
        document.getElementById("image1").src="Monkey_0"+i+".png";
    }
    if (i > 10){
        i = 1
        document.getElementById("image1").src="Monkey_0"+i+".png"
    } 
    i++
};