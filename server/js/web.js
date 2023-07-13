let logged = false
window.onload = function() {
    $(document).ready(function(){
        Feed()
    });
  }
function Feed(){
    if(logged == true){
        //set opacity to zero
           $('#show_feed').css('opacity', '1');
           $('#not_show_feed').css('opacity', '0');
           $('#show_feed').css('z-index', '10');
           $('#not_show_feed').css('z-index', '8');
 
   }else{
               $('#show_feed').css('opacity', '0');
               $('#not_show_feed').css('opacity', '1');     
               $('#show_feed').css('z-index', '8');
               $('#not_show_feed').css('z-index', '10');
   }
}
function viewNews(){
    $('#news_popup').css('opacity', '1');
}
function ProfileBtn(){
    if(logged == true){
    location.href = '../templates/Profile.html'
    }else{
      location.href = '../templates/login.html'
    }
  }

function getSelectValues(select) {
    var result = [];
    var options = select && select.options;
    var opt;
    for (var i=0, iLen=options.length; i<iLen; i++) {
      opt = options[i];
  
      if (opt.selected) {
        result.push(opt.value || opt.text);
      }
    }
   
    return result;
    
  }

  function Register(){
    location.href = '../templates/register.html'

}
function submitRegister(){
    var el = document.getElementsByTagName('select')[0];
    console.log(getSelectValues(el));

}
function close_blog_popup(){
    //set opacity to zero
    $(document).ready(function(){
        $('#blog_popup').css('opacity', '0');

        
      
      });
}
function close_news_popup(){
    //set opacity to zero
    $(document).ready(function(){
        $('#news_popup').css('opacity', '0');

        
      
      });
}
function open_blog_popup(){
    //set opacity to zerol
    if(logged){
        $('#blog_popup').css('opacity', '1');
    }else{
        alert("Please Login to to add blog")
    }
}