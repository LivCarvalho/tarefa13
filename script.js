$(document).ready(function(){

    $("#phone").mask("(00) 00000-0000", { 
        placeholder: "(**) *****-****",
    });

    $('#form-main').validate({
        rules:{
            name:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true
            },
            address:{
                required: true
            }
        },
        messages:{
            name:"Por favor, insira o seu nome",
            email: "Por favor, insira o seu email",
            phone: "Por favor, insira o seu telefone",
            address: "Por favor, insira o seu endereço"
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(evento, validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem ${camposIncorretos} campos incompletos`)
            }
        }
    })

})