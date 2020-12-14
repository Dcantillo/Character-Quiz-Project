var picture = [ "https://www.spalding.com/dw/image/v2/ABAH_PRD/on/demandware.static/-/Sites-masterCatalog_SPALDING/default/dwd21974bc/images/hi-res/74876E_FRONT.jpg?sw=555&sh=689&sm=cut&sfrm=jpg", 
               'https://ewscripps.brightspotcdn.com/dims4/default/66f0dd8/2147483647/strip/true/crop/4500x2531+0+94/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2Fd8%2F66%2F88bb1d6c42baa55b461ea060923a%2Fap-27269865886.jpg',
               'https://projects.seattletimes.com/2017/mariners-preview/assets/baseball_cutout.png ',
               
               'https://cdn11.bigcommerce.com/s-5ig7x53cx8/images/stencil/1280x1280/products/2805/8905/ME-4024-Sports-Ball-Soccer-2__97177.1539791058.png?c=2 ',
               'https://i.insider.com/5ab2bffbf996341b008b472d?width=1200&format=jpeg',
               'https://images-na.ssl-images-amazon.com/images/I/71aVv1ooAhL._AC_SX355_.jpg',
               'https://dks.scene7.com/is/image/GolfGalaxy/16GBTUGLBRTNTLRPLRGBXX?qlt=70&wid=600&fmt=pjpeg',
               
               'https://www.goaliemonkey.com/media/catalog/product/cache/b32e7142753984368b8a4b1edc19a338/9/9/999021.jpg'
    
    
    
    ];


var counter = 0; 

$(".submit").click(function() {
    
    counter = counter + 1; 
    
    $(".counter").text("Button clicked" + counter + "times") ;
    
   
    
    var number = $(".number").val();
    var bodyPart = $(".body").val(); 
    var play= $(".play").val();
    if(parseInt(number) === 1 && bodyPart === "hands" && play=== "physical"){
        $(".results").text("Your sport is basketball").append('<img src='+ picture[0]+ ">"); 
     }
  else if(parseInt(number) === 1 && bodyPart === "legs" && play=== "physical"){
        $(".results").text("Your sport is football").append('<img src='+ picture[1]+ ">"); 
     }
    else if(parseInt(number) === 2 && bodyPart === "hands" && play=== "technical"){
        $(".results").text("Your sport is baseball").append('<img src='+ picture[2]+ ">"); 
     }
     else if(parseInt(number) === 2 && bodyPart === "legs" && play=== "technical"){
        $(".results").text("Your sport is soccer").append('<img src='+ picture[3]+ ">"); 
     }
   
    
    else if(parseInt(number) === 1 && bodyPart === "hands" && play=== "technical"){
        $(".results").text("Your sport is golf").append('<img src='+ picture[4]+ ">"); 
     }
    
    else if(parseInt(number) === 1 && bodyPart === "legs" && play=== "technical"){
        $(".results").text("Your sport is tennis").append('<img src='+ picture[5]+ ">"); 
     }
    
    else if(parseInt(number) === 2 && bodyPart === "legs" && play=== "physical"){
        $(".results").text("Your sport is rugby").append('<img src='+ picture[6]+ ">"); 
     }
    else if(parseInt(number) === 2 && bodyPart === "hands" && play=== "physical"){
        $(".results").text("Your sport is hockey").append('<img src='+ picture[7]+ ">"); 
     }
   
    
    else if (number  === "" && bodyPart === "" && play === "" ) {
        $(".results").text("Try Entering Something!");}
    
    
   
    
    
    
}); 