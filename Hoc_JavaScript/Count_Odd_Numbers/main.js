var input = document.getElementById('input');

var btncout = document.getElementById('count_btn');
btncout.addEventListener('click', function() {
    var inputValue = parseInt(input.value);
    var count = 0;
    while(inputValue !== 0) {
        var tmp = inputValue % 10;
        if(tmp % 2 != 0) count = count + 1;
        inputValue =  Math.floor(inputValue / 10);
    }

    document.getElementById('result').value = count;
});
