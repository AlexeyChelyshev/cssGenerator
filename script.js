function fun1() {
    var rtl = document.getElementById("rtl").value;
    var rbl = document.getElementById("rbl").value;
    var rtr = document.getElementById("rtr").value;
    var rbr = document.getElementById("rbr").value;  // инициализация полос прокрутки и текстовых полей
    var ttr = document.getElementById("ttr");
    var ttl = document.getElementById("ttl");
    var tbl = document.getElementById("tbl");
    var tbr = document.getElementById("tbr");

    var block = document.getElementById("block"); // инициализация редактируемого объекта

    ttl.value = rtl;
    ttr.value = rtr;
    tbl.value = rbl; //тексту в текстовых полях задается значение из полос прокрутки
    tbr.value = rbr;



    block.style.borderRadius = rtl + 'px ' +rtr + 'px '  +rbr + 'px ' + rbl +'px ' ; // применение значений  из полос
                                                                                                    // прокрустки к редактируемому объекту
}