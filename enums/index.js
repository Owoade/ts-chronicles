var x = 2;
x = 3;
var y = 3;
var z = 5;
z = 5;
// enums
var Color;
(function (Color) {
    Color["red"] = "green";
    Color["blue"] = "blue";
    Color["yellow"] = "red";
    Color["green"] = "Green";
})(Color || (Color = {}));

var color = Color.blue;
var green = Color.green;

function say_color(color) {
    console.log(color);
}
