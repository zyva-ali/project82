var mouseEvent="";
var last_x_position;
var last_y_position;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=2;
radius=2;

canvas.addEventListener("mouseDown", myMouseDown);
function myMouseDown(e)
{
  color=document.getElementById("colorInput").value;
  width=document.getElementById("widthInput").value;
  radius=document.getElementById("radiusInput").value;
  mouseEvent="mouseDown";
}

canvas.addEventListener("mouseLeave", myMouseLeave);
function myMouseLeave(e)
{
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mouseUp", myMouseUp);
function myMouseUp(e)
{
    mouseEvent="mouseUp";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
  current_position_of_x = e.clientX-canvas.offsetLeft;
  current_position_of_y = e.clientY-canvas.offsetTop;
  
  if (mouseEvent=="mouseDown")
  {
      console.log("current position of x and y coordinate=");
      console.log("x="+current_position_of_x+"y="+current_position_of_y);
    
      ctx.beginPath();
      ctx.strokeStyle=color;
      ctx.lineWidth=width;
      ctx.arc(current_position_of_x, current_position_of_y, radius, 0, 2*Math.PI);
      ctx.stroke();
    
      console.log("last position of x coordinate=");
      console.log("x="+last_x_position+"y="+last_y_position);
      ctx.moveTo(last_x_position,last_y_position);

      
      ctx.lineTo(current_position_of_x,current_position_of_y);

  }
  last_x_position=current_position_of_x;
  last_y_position=current_position_of_y;
}