


const users = JSON.parse(localStorage.getItem('users'))




$('.plName').on('input', function(){
    $('.plName').each(function(){
        if($('#name').val().length >= 2 && $('#password').val().length >= 2 ){
            $('.btn').attr('disabled', false)
        } else {
            $('.btn').attr('disabled', true)
    
        }

    })


    
})

$('#check').click(function(){
    if($('#name').val().length >= 2 && $('#password').val().length >= 2){
        $('.btn').attr('disabled', false)
    } else {
        $('.btn').attr('disabled', true)

    }
})

$('form').on('submit', function(event){
     event.preventDefault()
     console.log(users);
    
     let userExist = users.some((user) => user.name == $('#name').val() && user.password == $('#password').val())
    
    if(userExist){
        localStorage.setItem('currentUser', $('#name').val())

        location.href = 'mein.html'
        
    }else{
        alert('Osibka')
        localStorage.setItem('currentUser', $('#name').val())


    }
})