//import {soma, sub} from "./import_and_export/functions"
//import {Functions} from "./import_and_export/functions"
/*
import {Contato} from "./import_and_export/functions"

const x = new Contato();
x.setData("Felipe", 55555555);
console.log(x.toString());  
*/
var btnElement  = document.getElementById("btn");
var btnElement2 = document.getElementById("voltar");
var isRendered  = true;

function show()
{    
    if(isRendered)
    {        
        const textElement = document.createTextNode("que vc tenha ki suficiente para aguentar o resto da semana kkk");
        const para = document.createElement('p');    
        para.appendChild(textElement); 
        document.body.appendChild(para);              

        const textElement2 = document.createTextNode("bom dia e bom trabalho meu consagrado!!!");
        const para2 = document.createElement('h3');
        para2.appendChild(textElement2); 
        document.body.appendChild(para2);

        isRendered = false;
    }
    else
    {
        //para.remove();
        para2.remove();
        isRendered = false;
    }
}

btnElement.onclick = show;
