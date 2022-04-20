let name=prompt('Как вас зовут')
alert(`Hello, ${name}!`);
let m1='Хиросима'
let m2='Нагасаки'
console.log('Слово «Хиросима» занимает ' + m1.length + ' кодовых значений')
console.log('Слово «Нагасаки» занимает ' + m2.length + ' кодовых значений')
let home= prompt('Светофор: red. yellow, green!')
switch (home) {
    case 'red':
        alert('Не друг тормози')
        break;
    case 'yellow':
        alert('Дружище подожди немжнока')
        break;
    case 'green':
         alert('Друш можешь идти')
        break;
    default:
        alert('undefined')
        break;
}
