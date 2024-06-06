var LuongCB = document.getElementById('LCB');
LuongCB.value = 650000;
var soThangLamViec = document.getElementById("STLV");
var btn_Tinhtien = document.getElementById("tinhtien");
var heso = document.getElementById("HSL");
var luongThang = document.getElementById('LT');
var thue = document.getElementById('TTN');
var thuclinh = document.getElementById('TL');
var xoa = document.getElementById('xoa');

btn_Tinhtien.addEventListener("click", function () {
  var sothang = parseInt(soThangLamViec.value);
  if (sothang < 12) {
    heso.value = 1.92;
  } else if (sothang >= 12 && sothang < 36) {
    heso.value = 2.34;
  } else if (sothang >= 36 && sothang < 60) {
    heso.value = 3;
  } else {
    heso.value = 4.5;
  }

  luongThang.value = LuongCB.value * heso.value;
  if(luongThang < 7000000) {
    thue.value = 10 / 100 * luongThang.value;
  }
  else if(luongThang >= 7000000 && luongThang <= 15000000) {
    thue.value = 20 / 100 * luongThang.value;
  }
   else {
    thue.value = 30 / 100 * luongThang.value;
   }

   thuclinh.value =  luongThang.value - thue.value;
});

xoa.addEventListener('click', function() {
    LuongCB.value = 650000;
    soThangLamViec.value = null;
    heso.value = null;
    luongThang.value = null;
    thue.value = null;
    thuclinh.value = null;
})
