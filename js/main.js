import { writeOutput, dateDiff as printDateDiff } from './output.js';//импортируем из файла оутпут.js функцию writeOutput 
import  calcDiff  from './dateCalc.js';// если default то  фигурные скобки не надо(calcdiff - название дюбое)

const form = document.getElementById('calcDate');
//const output = document.getElementById('outPut');// обращаемся к оутпут и ложим в него текст ошибки(перенесли в модуль)
form.onsubmit = function(event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const dateForm = formData.get("dateForm");
    const dateTo = formData.get("dateTo");
  if(!dateForm || !dateTo){
    writeOutput(`необходимо заполнить оба поля`) //output.innerHTML= `необходимо заполнить оба поля`;// вложили в оутпут текст(перенесли в модуль)
  }else{
      const diff = calcDiff(dateForm, dateTo);

      printDateDiff(diff)
  }

    
}

