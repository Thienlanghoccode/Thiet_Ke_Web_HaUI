var btn_tim = document.getElementById('btnTim');

btn_tim.addEventListener('click', function() {
    var str_input = document.getElementById('input').value;
    arr = str_input.split(' ');
    var i;
    var count = 0;
    var tmp;
    for(i = 0; i < arr.length; i++){
        tmp = arr[i].trim().toLowerCase();

        if(tmp != "" && tmp.length === 4 && tmp.substr(0,1) === 'm'){
            count++;
        }
    }
    document.getElementById('res').value = count;
})