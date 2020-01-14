//index.js  
function sendEmail() {
            // Pegando os parametros do name
            var name= document.getElementById("name").value
            // Pegando os parametros da password
            var email= document.getElementById("email").value
			      // Pegando os parametros da email
            var tel= document.getElementById("tel").value
			      // Pegando os parametros da Tel
            var mensagem= document.getElementById("mensagem").value
              Email.send({
	              Host : "secure.emailsrvr.com",
                Username : "flavio@adamos.com.br",
                Password : "1qaz2wSX",
                To : "flavio@adamos.com.br",
                From : "flavio.sos.macahdo@gmail.com",
                Subject : "Site Acompanhant's",
                Body : "  Nome:  "  +  name  +  "  Email:  "  +	email + "  Telefone:  "  +  tel  + "  Mensagem:  "  +  mensagem  +,
              })
              .then(function(message){
                alert(" Logo nossa equipe entrar em contato com você ");
                window.location.assign("https://www.acompanhants.com.br");
              });
}