var btnHienthi = document.getElementById("btnHienthi");

btnHienthi.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  arr = name.split(" ");
  var res = "", tmp;
  var i;
  for(i = 0; i < arr.length; i++){
    tmp = arr[i].trim().toLowerCase();

    if(tmp != ""){
        tmp = tmp.substr(0,1).toUpperCase() + tmp.substr(1);
        res += tmp + " ";
    }
  }

  document.getElementById("input").value = res.trim();
  document.getElementById("result").value = arr[i - 1].trim();
});
