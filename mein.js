
const currentUser = localStorage.getItem('currentUser')


if(currentUser){
    let prevText = $('h1').text()
    $('h1').text(prevText + currentUser)
    $('#log').css('display', 'none')
    $('#reg').css('display', 'none')
    $('#out').css('display', 'inline-block')
    $('#todos').css('display', 'inline-block')
}

$('#out').click(function(){
    $('h1').text('user:')
    $('#out').css('display', 'none')
    $('#todos').css('display', 'none')
    $('#log').css('display', 'inline-block')
    $('#reg').css('display', 'inline-block')
    
})