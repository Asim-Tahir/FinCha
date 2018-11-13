function StdDegerAta() { //:Working:
 document.getElementsByClassName("girdi")[0].value="Mustafa";
 document.getElementsByClassName("girdi")[1].value="YILMAZ";
 document.getElementsByClassName("girdi")[2].value="MusYilmaz";
 document.getElementsByClassName("girdi")[3].value="mail.com";
 document.getElementById('FinChaGir').focus(this);
}

//==============================================================================

function GenerateRandomNumber (LowerValue=0,UpperValue=10) { //:Working:
	var Digit = String(UpperValue).length;
	var randomnumber = (Math.round((Math.random()*(10**Digit))%(UpperValue-LowerValue)+LowerValue));
	return randomnumber;
}

//===============================================================================
var Characters = ['a','b','c','d','e','f','g','ğ','h','ı','i','j','k','l','m','n','o','ö','p','r','s','ş','t','u','ü','v','y','z','w','q','x',
	'A','B','C','Ç','D','E','F','G','Ğ','H','I','İ','J','K','L','M','N','O','Ö','P','R','S','Ş','T','U','Ü','V','Y','Z','W','Q','X',
	'1','2','3','4','5','6','7','8','9','0'];
//================================================================================

function CreateFincha() {//:Working:
 var loopiteration = GenerateRandomNumber(5, 6), //Generate Number 5 or 6
	    FinchaValue=[],FillerFincha=[];

 for (var i=0;i<loopiteration;i++){//FinCha Create Here
  FinchaValue.push(Characters[GenerateRandomNumber(0,Characters.length-1)]); //for Real Fincha
  FillerFincha.push(Characters[GenerateRandomNumber(0,Characters.length-1)]); //for PlaceHolder Fincha
 }

 document.getElementById('FinChaGir').placeholder = "Örn: " + FillerFincha.join(""); //FinChaGir'in PlaceHolder'ına Değer Atanıyor
 FinchaText = FinchaValue.join("");

 //========================== Print FinCha in Canvas ==============================
 var ctx = document.getElementById('FinchaImage').getContext("2d");
 ctx.fillStyle = GenerateRandomColor("HEX") + GenerateAlpha("HEXA");
 ctx.font = "55pt Bliss Pro Light";
 ctx.textAlign = "center";
 ctx.fillText(FinchaValue.join(""), document.getElementById('FinchaImage').width/2, document.getElementById('FinchaImage').height/1.4);
 //=================================================================================
 return FinchaText;
}

//===================================================================================

function ClearCanvas() {//:Working:
 CanvasWidth = document.getElementById("FinchaImage").width,
 CanvasHeight = document.getElementById("FinchaImage").height;
 document.getElementById('FinchaImage').getContext("2d").clearRect(0,0,CanvasWidth,CanvasHeight);
}

//====================================================================================

function CheckFincha(Directing_Site_Address = "Success.html") { //:Not Working:
 if(document.getElementById('FinChaGir').value !== ''){
  document.getElementById("SendIcon").addEventListener("click", function () {

   if (document.getElementById('FinChaGir').value === FinchaText) {
    document.getElementById('Uyari').style.visibility = 'hidden';
    document.getElementById('UyariKapat').style.visibility = 'hidden';

    if(typeof(Directing_Site_Address) !== "string"){
     console.error("Yönlendirdiğiniz Site Adresini Karakter Katarı(String) Biçiminde Giriniz.");
    }
    else{
     document.getElementById('FinChaGir').value = '';
     window.location = Directing_Site_Address;
    }
   }

   else{
    document.getElementById('UyariMetin').innerText = 'Geçersiz Giriş...';
    document.getElementById('FinChaGir').value = "";
    document.getElementById('Uyari').style.visibility = 'visible';
    document.getElementById('UyariKapat').style.visibility = 'visible';
    ClearCanvas(); CreateFincha();
   }
  }); //EventListener Kapanış Parantezi
 }

 else{
  document.getElementById('UyariMetin').innerText = 'Bu Kısmı Boş Bırakamazsın';
  document.getElementById('Uyari').style.visibility = 'visible';
  document.getElementById('UyariKapat').style.visibility = 'visible';
  ClearCanvas(); CreateFincha();
 }
}

//====================================================================================

function GenerateRandomColor(ReqColorType="HEX") { //:Working:
 ReqColorType=ReqColorType.toUpperCase();
  if(ReqColorType==="HEX"){
   var RandomHexColorCodeArray=[],RandomHexColorCode="#";
   for (var i=0;i<6;i++) {
    RandomHexColorCodeArray.push(GenerateRandomNumber(0,15));
    switch (RandomHexColorCodeArray[i]) {
     case 10:
      RandomHexColorCodeArray[i]='a';
      break;

     case 11:
      RandomHexColorCodeArray[i]='b';
      break;

     case 12:
      RandomHexColorCodeArray[i]='c';
      break;

     case 13:
      RandomHexColorCodeArray[i]='d';
      break;

     case 14:
      RandomHexColorCodeArray[i]='e';
      break;

     case 15:
      RandomHexColorCodeArray[i]='f';
      break;

     default:
      break;
    }
   }
   RandomHexColorCode += RandomHexColorCodeArray.join("");
   return RandomHexColorCode;
  }

  else if(ReqColorType==="RGB"){
   //var Red,Green,Blue;
   return Red = GenerateRandomNumber(0,256),
   Green = GenerateRandomNumber(0,256),
   Blue = GenerateRandomNumber(0,256);
  }

  else if (ReqColorType==="HSL") {
   //var Hue,Saturation,Lightness;
   return Hue = GenerateRandomNumber(0,359),
   Saturation = GenerateRandomNumber(0,100),
   Lightness = GenerateRandomNumber(0,100);
  }
}

//====================================================================================

function CreateAlpha(ReqColorType="HEXA",AlphaAmount=10) { //:Not Working:
 if(typeof(ReqColorType) === "string"){
  ReqColorType = ReqColorType.toUpperCase();
  if(AlphaAmount<=100 && AlphaAmount>=0){

   if(ReqColorType === "HEXA"){
    AlphaAmount = Math.round(AlphaAmount*2.55); //0-100 Aralığını 0-255 Yaptık, toFixed() Ondalıklı Kısmı Yok Etti
    return AlphaAmount.toString(16);
   }

   else if(ReqColorType === "RGBA"){
    return AlphaAmount;
   }

   else if(ReqColorType === "HSLA"){
    return AlphaAmount;
   }
  }

  else {
   console.error("Please Enter AlphaAmount Value From 0 to 100");
   if(Math.abs(AlphaAmount-0) > Math.abs(AlphaAmount-100)){
    AlphaAmount = 0;
   }
   else{
    AlphaAmount = 100;
   }
  }
 }

 else {
  console.error("You Can Only Enter \"HEXA\", \"RGBA\" and \"HSLA\" Color Type");
 }
}

//====================================================================================

function GenerateAlpha(ReqColorType="HEXA"){ //:Working:
 if(ReqColorType === "HEXA"){
  AlphaAmount = GenerateRandomNumber(0,255);
  return AlphaAmount.toString(16);
 }

 else if(ReqColorType === "RGBA")
  return AlphaAmount = Math.random();

 else if(ReqColorType === "HSLA")
  return AlphaAmount = Math.random();

 else
  console.error("You Can Only Enter \"HEXA\", \"RGBA\" and \"HSLA\" Color Type");
}

//====================================================================================

function CreateBackground() {//:Working:
 document.getElementById('FinchaImage').style.backgroundColor = GenerateRandomColor("HEX");

 //========================================================================
 /*var warp = new Warp({ :FixThis:
  input_canvas: $('#input_canvas').get(0),
  viewport_canvas: $('#vp_canvas').get(0),
  top: 100,
  left: 100,
});

$('#vp_canvas').on('mousemove', warp, function( event ) {
 var warp = event.data;
 var cx = 200, cy = 200;

 // calculate relative coords
 var x = event.pageX - $(this).offset().left + warp.options.left;
 var y = event.pageY - $(this).offset().top + warp.options.top;

 draw_text(warp.options.input_canvas, x, y);

 warp.deform({
  center: {x: cx, y: cy},
  radius: 150,
  angle: 45,
 });
});*/
 //========================================================================

 var ctx = document.getElementById('FinchaImage').getContext("2d");
 ctx.fillStyle = GenerateRandomColor("HEX");

 document.getElementById('FinchaImage').style.border = '6px dashed '+GenerateRandomColor("HEX"); //add border to FinchaImage
}

//====================================================================================

function FillFinChaGir() {//:Working:
 document.getElementById('FinChaGir').value = FinchaText;
 console.info(">> FinChaGir Dolduruldu.");
}