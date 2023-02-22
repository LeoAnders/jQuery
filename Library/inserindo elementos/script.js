let rect  = $(".rect")
let lista1 = $("#lista")

//Inserindo um novo elemento dentro de um elemento existente
//append adiciona no final 
lista1.append('<li>teste</li>')
//prepend adiciona no final 
lista1.prepend('<li>teste</li>')


//Inserindo um novo elemento antes de um elemento existente
rect.before(" novo teste")

//Inserindo um novo elemento depois de um elemento existente
rect.after(" novo teste")


//$('#lista1').html('<li>teste</li>')