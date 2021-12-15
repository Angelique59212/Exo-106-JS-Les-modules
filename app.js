import * as elements from './HTML.js';



let resultDiv = document.getElementById("result");

resultDiv.appendChild(elements.hello());
resultDiv.appendChild(elements.friends('mail'));
resultDiv.appendChild(elements.send("email"));
resultDiv.appendChild(elements.friends("password"));
resultDiv.appendChild(elements.send("password"));








