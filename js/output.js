const output = document.getElementById('outPut');// обращаемся к оутпут и ложим в него текст ошибки


export function writeOutput(outputValue){//функция для вывода ошибки
    output.innerHTML = outputValue;// вложили в оутпут текст(текст переопределим в главном файле)
}

export function dateDiff(diffObject){
const {years, months, days} = diffObject;// использеум деструктуризацию
 writeOutput(`Лет: ${years}
              месяцев:${months}
              дней:${days}
 
 
 `)
}