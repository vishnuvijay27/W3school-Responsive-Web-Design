function html(){
    var Course='HTML';
    var amount=3000;


    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));



    td1.innerHTML = "html";
    td2.innerHTML = 3000;

    document.getElementById("tb1").appendChild(tr);
} 