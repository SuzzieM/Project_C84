// Create a reference for the canvas
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    
		if(keyPressed == 65)
		{
		    aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed alphabet key A";
			console.log("alphabetkey");
		}
	else if(keyPressed == 66)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key B";
        console.log("alphabet key");
    }
    else if(keyPressed == 67)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key C";
        console.log("alphabet key");
    }
    else if(keyPressed == 68)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key D";
        console.log("alphabet key");
    }
    else if(keyPressed == 69)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key E";
        console.log("alphabet key");
    }
    else if(keyPressed == 70)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key F";
        console.log("alphabet key");
    }
    else if(keyPressed == 71)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key G";
        console.log("alphabet key");
    }
    else if(keyPressed == 72)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key H";
        console.log("alphabet key");
    }
    else if(keyPressed == 73)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key I";
        console.log("alphabet key");
    }
    else if(keyPressed == 74)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key J";
        console.log("alphabet key");
    }
    else if(keyPressed == 75)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key K";
        console.log("alphabet key");
    }
    else if(keyPressed == 76)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key L";
        console.log("alphabet key");
    }
    else if(keyPressed == 77)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key M";
        console.log("alphabet key");
    }
    else if(keyPressed == 78)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key N";
        console.log("alphabet key");
    }
    else if(keyPressed == 79)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key O";
        console.log("alphabet key");
    }
    else if(keyPressed == 80)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key P";
        console.log("alphabet key");
    }
    else if(keyPressed == 81)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key Q";
        console.log("alphabet key");
    }
    else if(keyPressed == 82)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key R";
        console.log("alphabet key");
    }
    else if(keyPressed == 83)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key S";
        console.log("alphabet key");
    }
    else if(keyPressed == 84)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key T";
        console.log("alphabet key");
    }
    else if(keyPressed == 85)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key U";
        console.log("alphabet key");
    }
    else if(keyPressed == 86)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key V";
        console.log("alphabet key");
    }
    else if(keyPressed == 87)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key W";
        console.log("alphabet key");
    }
    else if(keyPressed == 88)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key X";
        console.log("alphabet key");
    }
    else if(keyPressed == 89)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key Y";
        console.log("alphabet key");
    }
    else if(keyPressed == 90)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key Z";
        console.log("alphabet key");
    }
    else if(keyPressed == 97)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key a";
        console.log("alphabet key");
    }
    else if(keyPressed == 98)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key b";
        console.log("alphabet key");
    }
    else if(keyPressed == 99)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key c";
        console.log("alphabet key");
    }
    else if(keyPressed == 100)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key d";
        console.log("alphabet key");
    }
    else if(keyPressed == 101)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key e";
        console.log("alphabet key");
    }
    else if(keyPressed == 102)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key f";
        console.log("alphabet key");
    }
    else if(keyPressed == 103)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key g";
        console.log("alphabet key");
    }
    else if(keyPressed == 104)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key h";
        console.log("alphabet key");
    }
    else if(keyPressed == 105)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key i";
        console.log("alphabet key");
    }
    else if(keyPressed == 106)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key j";
        console.log("alphabet key");
    }
    else if(keyPressed == 107)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key k";
        console.log("alphabet key");
    }
    else if(keyPressed == 108)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key l";
        console.log("alphabet key");
    }
    else if(keyPressed == 109)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key m";
        console.log("alphabet key");
    }
    else if(keyPressed == 110)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key n";
        console.log("alphabet key");
    }
    else if(keyPressed == 111)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key o";
        console.log("alphabet key");
    }
    else if(keyPressed == 112)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key p";
        console.log("alphabet key");
    }
    else if(keyPressed == 113)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key q";
        console.log("alphabet key");
    }
    else if(keyPressed == 114)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key r";
        console.log("alphabet key");
    }
    else if(keyPressed == 115)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key s";
        console.log("alphabet key");
    }
    else if(keyPressed == 116)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key t";
        console.log("alphabet key");
    }
    else if(keyPressed == 117)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key u";
        console.log("alphabet key");
    }
    else if(keyPressed == 118)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key v";
        console.log("alphabet key");
    }
    else if(keyPressed == 119)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key w";
        console.log("alphabet key");
    }
    else if(keyPressed == 120)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key x";
        console.log("alphabet key");
    }
    else if(keyPressed == 121)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key y";
        console.log("alphabet key");
    }
    else if(keyPressed == 122)
    {
        aplhabetkey();
        document.getElementById("d1").innerHTML="You pressed alphabet key z";
        console.log("alphabet key");
    }
    else if(keyPressed == 48)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 0.";
			console.log("number key");
	}
    else if(keyPressed == 49)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 1.";
			console.log("number key");
	}
    else if(keyPressed == 50)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 2.";
			console.log("number key");
	}
    else if(keyPressed == 51)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 3.";
			console.log("number key");
	}
    else if(keyPressed == 52)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 4.";
			console.log("number key");
	}
    else if(keyPressed == 53)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 5.";
			console.log("number key");
	}
    else if(keyPressed == 54)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 6.";
			console.log("number key");
	}
    else if(keyPressed == 55)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 7.";
			console.log("number key");
	}
    else if(keyPressed == 56)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 8.";
			console.log("number key");
	}
    else if(keyPressed == 57)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number key 9.";
			console.log("number key");
	}
	else if(keyPressed == 37)
	{
		arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key left.";
			console.log("arrow key");
	}
    else if(keyPressed == 38)
	{
		arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key up.";
			console.log("arrow key");
	}
    else if(keyPressed == 39)
	{
		arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key right.";
			console.log("arrow key");
	}
    else if(keyPressed == 40)
	{
		arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key down.";
			console.log("arrow key");
	}
	else if(keyPressed == 17)
	{
		specialkey();
			document.getElementById("d1").innerHTML="You pressed Special key ctrl.";
			console.log("special key");
	}
    else if(keyPressed == 18)
	{
		specialkey();
			document.getElementById("d1").innerHTML="You pressed Special Key alt.";
			console.log("special key");
	}
    else if(keyPressed == 27)
	{
		specialkey();
			document.getElementById("d1").innerHTML="You pressed Special Key esc.";
			console.log("special key");
	}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("otherkey");
	}
	
}
function alphabetkey()
{
	img_image="Alpkey.png"
    add();
}
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png"
    add();
}
function specialkey()
{
	img_image="spkey.png"
    add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}