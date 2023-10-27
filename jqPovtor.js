
// $('.btn').click(function(){
    
// })



const users = []

if(!localStorage.getItem('users')){
    localStorage.setItem('users', JSON.stringify(users))

}



$('.plName').on('input', function(){
    $('.plName').each(function(){
        if($('#name').val().length >= 2 && $('#password').val().length >= 2  && $('#check').is(':checked')){
            $('.btn').attr('disabled', false)
        } else {
            $('.btn').attr('disabled', true)
    
        }

    })


    
})

$('#check').click(function(){
    if($('#name').val().length >= 2 && $('#password').val().length >= 2  && $('#check').is(':checked')){
        $('.btn').attr('disabled', false)
    } else {
        $('.btn').attr('disabled', true)

    }
})

 $('.btn').click(function(event){
    event.preventDefault()
    let newUser = {
        name: $('#name').val(),
        password: $('#password').val(),
        todos: []
    }


    users.push(newUser)
    localStorage.setItem('users', JSON.stringify(users))

    $('input').val('')

    $('.al').css({
        "display": "block",
 })
 })