let slider1= document.getElementById('slider1');
let slider2= document.getElementById('slider2');
let slider3= document.getElementById('slider3');
let slider4= document.getElementById('rotX');
let slider5= document.getElementById('rotY');
let slider6= document.getElementById('rotZ');
let slider7= document.getElementById('posX');
let slider8= document.getElementById('posY');
let slider9= document.getElementById('posZ');


let var1 =Number(slider1.value);
let var2 =Number(slider2.value);
let var3 =Number(slider3.value);
let rotX = Number(slider4.value);
let rotY = Number(slider5.value);
let rotZ = Number(slider6.value);
let posX = Number(slider7.value);
let posY = Number(slider8.value);
let posZ = Number(slider9.value);


slider1.addEventListener('input', function () {
    var1 = Number(slider1.value);
  }, false);

slider2.addEventListener('input', function () {
    var2 =Number(slider2.value);
  }, false);

  slider3.addEventListener('input', function () {
    var3 =Number(slider3.value);
  }, false);

  slider4.addEventListener('input', function () {
    rotX = Number(slider4.value);
  }, false);

  slider5.addEventListener('input', function () {
    rotY = Number(slider5.value);
  }, false);

  slider6.addEventListener('input', function () {
    rotZ = Number(slider6.value);
  }, false);

  slider7.addEventListener('input', function () {
    posX = Number(slider7.value);
  }, false);

  slider8.addEventListener('input', function () {
    posY = Number(slider8.value);
  }, false);

  slider9.addEventListener('input', function () {
    posZ = Number(slider9.value);
  }, false);