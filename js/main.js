// ------ Section Home
$('.open').click(function () {
  let currentWidth = $('.sidebar ul').outerWidth()
  if( $('.sidebar ul').css('left') == '-230px' )
  {
    $('.sidebar ul').animate({'left' : '0px'} , 500)
    $('.open').animate({'left' : currentWidth} , 500)
    $('.title').animate({'marginLeft' : '50px' , 'paddingLeft' : '50px' } , 500)
    $('.space').animate({'marginLeft' : '50px' , 'paddingLeft' : '50px' } , 500)
  }
  else
  {
    $('.sidebar ul').animate({'left' : '-230px'} , 500)
    $('.open').animate({'left' : '0'} , 500)
    $('.title').animate({'marginLeft' : '0px' , 'paddingLeft' : '0px' } , 500)
    $('.space').animate({'marginLeft' : '0px' , 'paddingLeft' : '0px' } , 500)
  }
})

// close Button
$('.sidebar ul .fa-close').click(function () {
  $('.sidebar ul').animate({'left' : '-230px'} , 500)
  $('.open').animate({'left' : '0'} , 500)
  $('.title').animate({'marginLeft' : '0px' , 'paddingLeft' : '0px' } , 500)
  $('.space').animate({'marginLeft' : '0px' , 'paddingLeft' : '0px' } , 500)
})



// ------ Section details -------

$('#details h3').click(function () {
  $(this).next().slideToggle(500);
  $('#details p').not($(this).next()).slideUp(500)
})

//-------- Section duration
function countDown ()
{
  let currentDate = new Date().getTime();
  let eventDate = new Date(2022, 12, 31).getTime();
  let dateDiff = eventDate - currentDate;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24) - 30);
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let Minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60 ));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / (1000));

  document.getElementById('days').innerHTML = days + " D"
  document.getElementById('hours').innerHTML = hours < 10 ? `0${hours} s` :  `${hours} h`
  document.getElementById('minutes').innerHTML = Minutes < 10 ? `0${Minutes} s` :  `${Minutes} m`
  document.getElementById('seconds').innerHTML = seconds < 10 ? `0${seconds} s` :  `${seconds} s` 

  setTimeout( countDown , 1000)

}
countDown()


// ------ Section Contact

let textMessage = document.getElementById('textMessage');
let num = document.getElementById('num')

textMessage.addEventListener('keyup' , function () {
  let count = textMessage.value.length
if( count < 100) 
{
  num.innerHTML = 100 - count
}
else
  {
    num.innerHTML = `your available character finished`
  }
})

