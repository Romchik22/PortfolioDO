
$( document ).ready(function() {

$('.container-fluid').hide();
setTimeout(function() {
    $('.container-fluid').show()
}, 5000);

$(function(){
      $("#mainName h1").animate({
        bottom: "0",
        opacity:"1",
        
      },700);
      });
  

function animateMainText(){
    
      $("#mainName h2").typed({
        strings: ["PHP Developer", "Web Developer"],
        typeSpeed: 0
      });
  };
  setTimeout(animateMainText, 700);
  setTimeout(function() { 
   

  }, 5000);


setTimeout(function() {
    $('#firstWindow').animate({
        width: '0',
        height: '0',
        left: '50%',
        right: 0,
        bottom: 0,
        top: "50%",
    
}, 1000);

$("#mainName").animate({
    paddingTop:0,
    fontSize:0
}, 1000);





},4000);
});