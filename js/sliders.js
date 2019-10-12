var sliderDiv= document.getElementById('sliders');
var slider1= document.getElementById('slider1');
var slider2= document.getElementById('slider2');
var slider3= document.getElementById('slider3');
let var1 =Number(slider1.value);
let var2 =Number(slider2.value);
let var3 =Number(slider3.value);

console.log(slider2.value)

slider1.addEventListener('input', function () {
    var1 =Number(slider1.value);
  }, false);

slider2.addEventListener('input', function () {
    var2 =Number(slider2.value);
  }, false);

  slider3.addEventListener('input', function () {
    var3 =Number(slider3.value);
  }, false);