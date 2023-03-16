/* -------------- FOR CART PAGE -------------- */
const add = document.getElementById('add_1');
const minus = document.getElementById('minus_1');
const add2 = document.getElementById('add_2');
const minus2 = document.getElementById('minus_2');
const add3 = document.getElementById('add_3');
const minus3 = document.getElementById('minus_3');
const quantity = document.getElementById('quantity_1');
const quantity2 = document.getElementById('quantity_2');
const quantity3 = document.getElementById('quantity_3');
const delete1 = document.getElementById('delete_1');
const card1 = document.getElementById('card1');
const delete2 = document.getElementById('delete_2');
const card2 = document.getElementById('card2');
const delete3 = document.getElementById('delete_3');
const card3 = document.getElementById('card3');
const addFunc = (quantityX) => {
    let no = Number.parseInt(quantityX.innerHTML);
    no += 1;
    quantityX.innerHTML = no;
}
const minusFunc = (quantityX) => {
    let no = Number.parseInt(quantityX.innerHTML);
    if(no !== 1){
    no -= 1;
    quantityX.innerHTML = no;
    }
}
const deleted = (cardX) => {
    cardX.innerHTML = "";
}
add.onclick = () => addFunc(quantity);
add2.onclick = () => addFunc(quantity2);
add3.onclick = () => addFunc(quantity3);
minus.onclick = () => minusFunc(quantity);
minus2.onclick = () => minusFunc(quantity2);
minus3.onclick = () => minusFunc(quantity3);
delete1.onclick = () => deleted(card1);
delete2.onclick = () => deleted(card2);
delete3.onclick = () => deleted(card3);