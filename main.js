var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.Image.fromURL('BirthdayImage.jpg', function(Img){
        block_imnage_object=Img; 

        block_imnage_object.scaleToHeight(700)
        block_imnage_object.scaleToWidth(500)
        block_imnage_object.set({
            top:0, 
            left:0 
        });
canvas.add(block_image_object); 
    });
	
}

function playSound(){
	x.play();  
}
