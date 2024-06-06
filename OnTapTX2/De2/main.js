function formatName() {
  var nameInput = document.getElementById("ten").value;

  arr = nameInput.split(" ");

  var kq = "",
    tmp;

  for (let index = 0; index < arr.length; index++) {
    tmp = arr[index].trim().toLowerCase();

    if (tmp != "") {
      tmp = tmp.substr(0, 1).toUpperCase() + tmp.substr(1);
      kq += tmp + " ";
    }
  }

  document.getElementById("ten").value = kq.trim();
}
