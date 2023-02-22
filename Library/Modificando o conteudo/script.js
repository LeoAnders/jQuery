
//quando eu passar a tag html() eu posso passar tags em html e criar elementos html
$(".item1").html("<h4>Novo conteúdo</h4>")
$(".item2").text("Novo conteúdo")

$("#lista1").css("color", "red");

$('li').attr("name", (i,oValue)=>{
  return oValue + i
})

//valor máximo que um input recebe 
$('input').attr('maxlength', 5).attr("type", "password")


//console.log($('#lista1').find('.item2').text('novo item'))

//console.log($('h1').text('lista de compras'));