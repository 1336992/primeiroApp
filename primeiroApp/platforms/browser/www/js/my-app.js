// Initialize app
var myApp = new Framework7({
    swipePanel: 'left',
    modalTitle: 'Estude no IFB'
});



// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

$$('#acoes').on('click', function(){
    var botoes1 = [
    {
        text: `Título`,
        label: true,
        
    },
    
    {
        text: 'botão 1',
        bold: true,
        onClick: function(){
            myApp.alert("você clicou na opção 1");
        }
    },

    {
        text: 'botão 2',
        bg: 'blue',
        color: 'white'
    }
    ];
    var botões2 = [
    {
        text: 'Cancelar',
        color: 'red'
    }

    ];

    var groups = [botoes1,botões2];
    myApp.actions(groups);


});

$$('#notificar').on('click', function(){
    myApp.addNotification({
        title: 'Estude no IFB',
        subtitle: 'Conheça mais o IFB',
        message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
        media: '<i class="icon icon-f7"></i>'
    });
});

$$('#sair').on('click',function(){
    myApp.confirm("Deseja sair?","Estude no IFB",function(){
        myApp.alert('Até mais!!!');
    },function(){
        myApp.alert("Você clicou em cancelar");
    });

});

$$('#acesso').on('click',function(){
    myApp.modalLogin('Autenticação requerida', function (usuario, senha) {
        myApp.alert('Obrigado! Usuario: ' + usuario + ', senha: ' + senha);
    });
});

$$('#acesso1').on('click',function(){
    myApp.modalPassword('Digite a senha', function (senha) {
        myApp.alert('Obrigado! Senha: ' + senha);
    });
});

$$('#carregar').on('click',function(){
    myApp.showPreloader('Carregando')
    setTimeout(function () {
        myApp.hidePreloader();
    }, 5000);
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
  console.log("Device is ready!");


    var pessoa = {
        firstName:"Joao",
        surName:"Oliveira",
        age:26,
        nome: function(){
            return pessoa.firstName+" "+pessoa.surName;
        }
    };

    console.log(pessoa.firstName+" "+
                pessoa.surName+" tem "+
                pessoa.age+" anos");
    console.log(pessoa.nome());

});


// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function (e) {
    // Get page data from event data
    var page = e.detail.page;



    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        //myApp.alert('Here comes About page');
    }

    if (page.name === 'mensagem'){
        //inicialização das variáveis de mensagens
        var myMsg = myApp.messages('.messages');
        var myBarraMsg = myApp.messagebar('.messagebar');     
        

        $$('.messagebar .link').on('click', function(){
            //texto digitado a ser enviado
            var texto = myBarraMsg.value().trim();

            //se a mensagem estiver vazia, não fazer nada
            if (texto.length === 0){
                return;
            }
            //apaga o conteúdo da mensagem digitada
            myBarraMsg.clear();

            //adiciona a nova mensagem
            myMsg.addMessage({
                text: texto,
                type: 'sent',
                day: 'hoje',
                time: "10:00",
            });
            
         });
    }

    if (page.name === 'slides'){
        // Inicialização da variável mySwiper
        var mySwiper = myApp.swiper('.swiper-container', {
            pagination:'.swiper-pagination',
        });
    }

});



