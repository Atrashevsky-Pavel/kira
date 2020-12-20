import './styles/style.scss'
import './styles/styleItems.scss'
import './styles/styleForm.scss'
import * as $ from 'jquery'

const obj1 = {
  name: 'Petya',
  surname: 'Pupkin1'
};

const obj2 = {
    name: 'Vasia',
    surname: 'Pupkin2'
};

function nameSurname(text) {
    return `${this.name} ${this.surname} ${text}`
}

console.log(nameSurname.call(obj1, 'lox'));
console.log(nameSurname.call(obj2, 'lox'));
