import { Invoice } from "./classes/invoice.js";
import { Payment } from './classes/payment.js';
import { ListTemplate } from "./classes/ListTemplate.js";
//type casting an element
const form = document.querySelector('.new-item-form');
// console.log(form.children)
//grabbing inputs
const type = document.querySelector("#type");
const toForm = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toForm.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toForm.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
