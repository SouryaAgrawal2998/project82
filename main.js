canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent = "";
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}
//canvas.addEventListener("mouseup", my_mouseup);
//canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mousedown") {
        console.log("Current position of x and y coordinates = ");
        console.log("* = " + current_position_of_mouse_x + "y = " +
            current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthOfLine;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 2 * Math.PI,180);
        ctx.stroke();
    }
}
function clearArea(){
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}