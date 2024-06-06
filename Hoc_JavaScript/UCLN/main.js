var find_btn = document.getElementById('find_btn');

find_btn.addEventListener('click', function() {
    var first_number = parseInt(document.getElementById('input').value);
    var second_number = parseInt(document.getElementById('input2').value);

    var r = first_number % second_number;         // a = b*x + r;
    while (r!=0) {
        // Gán lại a = b, quay về bài toán tìm ucln của b và r
        first_number = second_number;  
        second_number = r;
        r = first_number % second_number;   // r là phần dư của phép chia a/b
    }

    document.getElementById('result').value = second_number;
})