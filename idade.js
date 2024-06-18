function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    

        if (fano.value.length == 0 || fano.value > ano){
            window.alert('[ERRO] Verifique os dados e tente novamente!')
        } else{
            var fsex = document.getElementsByName('radsex')
            var idade = (ano) - Number(fano.value)
            var gênero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')

                if (fsex[0].checked){
                    (gênero) = 'Masculino'
                    if(idade >= 0 && idade < 5){
                        //baby
                        img.setAttribute('src', 'imagens2/baby.png')
                    } else if ( idade >=5 && idade < 14){     
                        //menino
                        img.setAttribute('src', 'imagens2/menino.png')
                    } else if (idade >=14 && idade < 25){
                        //jovem
                        img.setAttribute('src', 'imagens2/homem-jovem.png')
                   } else if (idade < 50) {
                        //adulto
                    img.setAttribute('src', 'imagens2/homem-adulto.png')
                   } else {
                        //velho
                        img.setAttribute('src', 'imagens2/homem-velho.png')
                   }

                }
                     else if (fsex[1].checked){
                    (gênero) = 'Feminino'
                    if (idade >= 0 && idade < 5){
                        //baby
                        img.setAttribute('src', 'imagens2/baby.png')
                    } else if (idade >= 5 && idade < 14){     
                        //menina
                        img.setAttribute('src', 'imagens2/menina.png')
                    } else if (idade >= 14 && idade < 25){
                        //jovem
                        img.setAttribute('src', 'imagens2/mulher-jovem.png')
                   } else if ( idade < 50) {
                        //adulto
                    img.setAttribute('src', 'imagens2/mulher-adulta.png')
                   } else {
                    img.setAttribute('src', 'imagens2/mulher-velha.png')
                        // idoso
                   }
                    
                } 
                res.style.textAlign = 'center'
                res.innerHTML = `Seu Gênero é ${gênero} e você possui ${idade} anos de idade`
                res.appendChild(img)
           
            
            }
       
        
}