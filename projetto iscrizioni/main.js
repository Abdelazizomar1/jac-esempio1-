var numero = 0;
var numero = 0;

function createOrder(){
    numero++;
    document.getElementById("containerOrder").innerHTML += 
    '<div id="mainOrder'+numero+'" class="mainOrder">'+
        '<div class="subOrder_1">'+
        '<h3>Ordine n°'+numero+'</h3><hr>'+
        '<p>Pizze Ordinate</p>'+
        '<table id="tablePizza'+numero+'">'+
            '<thead>'+
                '<td>PIZZA</td>'+
                '<td>N°</td>'+
                '<td id="caic"><input type="button" onclick="addPizza(this)" value="Aggiungi Pizza"></td>'+
            '</thead>'+
        '</table><hr>'+
        '<p>Dati cliente</p>'+
        '<input type="text" placeholder="cognome e nome">'+
        '<input type="tel" placeholder="numero di telefono"><hr>'+
        '<p>Indirizzo di consegna</p>'+
        '<input type="text" placeholder="via e numero civico">'+
        '<input type="text" placeholder="comune">'+
        '<input type="time" value="15:00">'+
        '</div>'+
        '<div class="subOrder_2">'+
        '<input type="button" value="ellimina" onclick="orderDelete(this)">'+
        '</div>'+
    '</div>';
}

function addPizza(click) {
    let tableId = click.parentNode.parentNode.parentNode.parentNode.id;
    console.log(tableId);
    var i = document.getElementById(tableId).rows.length;
    var tr = document.getElementById(tableId).insertRow(i);

    tr.id = "row-" + numero; 

    var tdPizza = tr.insertCell(0);
    var tdNumPizza = tr.insertCell(1);
    var tdDeleteRow = tr.insertCell(2);

    tdPizza.innerHTML = '<select id="cars">'+
    '<option value="pizza_1">Margherita</option>'+
    '<option value="pizza_2">Marinara</option>'+
    '<option value="pizza_3">Pugliese</option>'+
    '<option value="pizza_4">Funghi</option>'+
    '<option value="pizza_5">Romana</option>'+
    '<option value="pizza_6">Quattro stagioni</option>'+
    '<option value="pizza_7">Quattro formaggio</option>'+
    '<option value="pizza_8">Capricciosa</option>'+
    '<option value="pizza_9">Bufola</option>'+
    '<option value="pizza_10">Carciofi</option>'+

    '</select>';

    tdNumPizza.innerHTML = '<input type="number" min="1" max="10" value="1">';
    tdDeleteRow.innerHTML = '<input type="button" onclick="cancelRow(this)" value="Ellimina">';

    numero++;
};

function cancelRow(row) {
    let tableId = row.parentNode.parentNode.parentNode.parentNode.id;
    var i = row.parentNode.parentNode.rowIndex;
    document.getElementById(tableId).deleteRow(i);
}

function orderDelete(click){
    let a = click.parentNode.parentNode.id;
    document.getElementById(a).remove();
}

