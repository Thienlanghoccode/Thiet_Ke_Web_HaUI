var btn_vietlai = document.getElementById('vietlai');

btn_vietlai.addEventListener('click', function() {
    var str_input = document.getElementById('input').value;
    arr = str_input.split(' ');
    arr.sort();
    var res = "", tmp;
    for(let i = 0; i < arr.length; i++){
        tmp = arr[i].trim().toLowerCase();

        if(tmp != ""){
            tmp = tmp.substr(0,1).toUpperCase() + tmp.substr(1);
            res += tmp + " ";
        }
    }

    document.getElementById('result').value = res.trim();
})