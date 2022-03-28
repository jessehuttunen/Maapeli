$(document).ready(function(){
    var correct=0;
    $(".draggable").draggable({stack:".draggable"});
    
    /* tausta äänet*/
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'tausta_aani.mp3');
    audioElement.play();
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    $('#mute').click(function() {
        if(audioElement.paused == false){
            $("#mutekuv").attr('src', 'mute1.png');
        audioElement.pause();
        }
        else
        {
            $("#mutekuv").attr('src', 'mute2.png');
          audioElement.play();      
            }
    });
    /* audioElement2 on voiton sisällä*/
    var audioElement3 = document.createElement('audio');
    audioElement3.setAttribute('src', 'nosto_aani.mp3');
    var audioElement4 = document.createElement('audio');
    audioElement4.setAttribute('src', 'pop.mp3');
    var audioElement5 = document.createElement('audio');
    audioElement5.setAttribute('src', 'pudotus_aani.mp3');
            
    /*Pelin nimipallojen liikuttelu*/
    $(".draggable").mousedown(function(){
        audioElement3.play();
        $(this).css( "width", "90px" );
        $(this).css( "height", "90px" );
        $(this).css( "opacity", "0.50" );
    });
     $(".draggable").mouseup(function(){
         audioElement5.play();
        $(this).css( "width", "100px" );
        $(this).css( "height", "100px" );
         $(this).css( "opacity", "0.9" );
    });
    
    /* Pelin kohde maat*/
    $("#target1").droppable({
      accept: "#maa1",
        drop:  function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            
            audioElement4.play();
        }
        });
    
    $("#target2").droppable({
      accept: "#maa2",
        drop: function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    $("#target3").droppable({
      accept: "#maa3",
        drop:  function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    
    $("#target4").droppable({
      accept: "#maa4",
        drop: function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    $("#target5").droppable({
      accept: "#maa5",
        drop:  function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    
    $("#target6").droppable({
      accept: "#maa6",
        drop: function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    $("#target7").droppable({
      accept: "#maa7",
        drop:  function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    
    $("#target8").droppable({
      accept: "#maa8",
        drop: function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    $("#target9").droppable({
      accept: "#maa9",
        drop:  function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    
    $("#target10").droppable({
      accept: "#maa10",
        drop: function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    $("#target11").droppable({
      accept: "#maa11",
        drop:  function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    
    $("#target12").droppable({
      accept: "#maa12",
        drop: function(event,ui){
            $(ui.draggable).fadeTo("fast",0.0,removeElement);
            $(this).fadeTo("slow",0.0);
            audioElement4.play();
        }
        });
    
    /*ohje*/
     $('#ohje').click(function() {
         if ( $("#ohjediv").css('display') == 'none' ){
            $( "#ohjediv" ).css( "display", "block" );
         }
         else{
             $( "#ohjediv" ).css( "display", "none" );
         }
    });
    $('#rasti').click(function() {
        $( "#ohjediv" ).css( "display", "none" );
    });
    /*menu*/
    $('#menubutton').click(function() {
         if ( $(".navig").css('display') == 'none' ){
             $( "#menubutton" ).css( "transform", "rotate(2deg)" );
            $( ".navig" ).css( "display", "block" );
         }
         else{
             $( "#menubutton" ).css( "transform", "rotate(0deg)" );
             $( ".navig" ).css( "display", "none" );
         }
    });
    
    /*pelin nollaus/sivun päivitys*/
    $('#reset').click(function() {
        location.reload();
    }); 
    $('#again').click(function() {
        location.reload();
    });
    
    /* voitto*/
    function removeElement(){
        $(this).remove();
        correct++;
        if (correct == 12){
            $( "#again" ).fadeIn(5000).css( "display", "block" );
            $( "#victory" ).css( "display", "block" );
            $( "#kartta" ).css( "display", "none" );
            var audioElement2 = document.createElement('audio');
            audioElement2.setAttribute('src', 'Voitto.mp3');
            audioElement2.play();
        }
        
    }

    
});

    