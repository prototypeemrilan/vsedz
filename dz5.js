const main = prompt('цвет?')

switch (main){
  case 'red':
    document.getElementsByClassName('red_comm')[0].style.background = 'red'
    document.getElementsByClassName('red_comm')[0].innerText = 'Остановись'
    alert('Остановись!!!')
    break;
  case 'green':
    document.getElementsByClassName('green_comm')[0].style.background = 'green'
    document.getElementsByClassName('green_comm')[0].innerText = 'Беги'
    alert('Беги!!!')
    break;
  case 'yellow':
    document.getElementsByClassName('yellow_comm')[0].style.background = 'yellow'
    document.getElementsByClassName('yellow_comm')[0].innerText = 'Пока подожди'
    alert('Пока подожди')
    break;
  default:
    alert('undefined')
    break;
}

