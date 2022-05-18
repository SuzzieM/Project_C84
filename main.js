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
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
			document.getElementById("d1").innerHTML="You pressed Alphabet Key";
			console.log("alphabet key");
		}
	else if(keyPressed >=48 && keyPressed<=57)
	{
		numberkey();
			document.getElementById("d1").innerHTML="You pressed Number Key.";
			console.log("number key");
	}
	else if(keyPressed >=37 && keyPressed<=40)
	{
		arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key.";
			console.log("arrow key");
	}
	else if(keyPressed ==17 || keyPressed ==18 || keyPressed ==27)
	{
		arrowkey();
			document.getElementById("d1").innerHTML="You pressed Arrow Key.";
			console.log("arrow key");
	}
	else{
		otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		console.log("otherkey");
	}
	
}

function aplhabetkey()
{
	
	if(keyPressed == '65')
    {
        A();
        console.log("A")
    }

	if(keyPressed == '66')
    {
        B();
        console.log("B")
    }

	if(keyPressed == '67')
    {
        C();
        console.log("C")
    }

	if(keyPressed == '68')
    {
        D();
        console.log("D")
    }

	if(keyPressed == '69')
    {
        E();
        console.log("E")
    }

	if(keyPressed == '70')
    {
        F();
        console.log("F")
    }

	if(keyPressed == '71')
    {
        G();
        console.log("G")
    }

	if(keyPressed == '72')
    {
        H();
        console.log("H")
    }

	if(keyPressed == '73')
    {
        I();
        console.log("I")
    }

	if(keyPressed == '74')
    {
        J();
        console.log("J")
    }

	if(keyPressed == '75')
    {
        K();
        console.log("K")
    }

	if(keyPressed == '76')
    {
        L();
        console.log("L")
    }

	if(keyPressed == '77')
    {
        M();
        console.log("M")
    }

	if(keyPressed == '78')
    {
        N();
        console.log("N")
    }

	if(keyPressed == '79')
    {
        O();
        console.log("O")
    }

	if(keyPressed == '80')
    {
        P();
        console.log("P")
    }

	if(keyPressed == '81')
    {
        Q();
        console.log("Q")
    }

	if(keyPressed == '82')
    {
        R();
        console.log("R")
    }

	if(keyPressed == '83')
    {
        S();
        console.log("S")
    }

	if(keyPressed == '84')
    {
        T();
        console.log("T")
    }

	if(keyPressed == '85')
    {
        U();
        console.log("U")
    }

	if(keyPressed == '86')
    {
        V();
        console.log("V")
    }

	if(keyPressed == '87')
    {
        W();
        console.log("W")
    }

	if(keyPressed == '88')
    {
        X();
        console.log("X")
    }

	if(keyPressed == '89')
    {
        Y();
        console.log("Y")
    }

	if(keyPressed == '90')
    {
        Z();
        console.log("Z")
    }

	if(keyPressed == '97')
    {
        a();
        console.log("a")
    }

	if(keyPressed == '98')
    {
        b();
        console.log("b")
    }

	if(keyPressed == '99')
    {
        c();
        console.log("c")
    }

	if(keyPressed == '100')
    {
        d();
        console.log("d")
    }

	if(keyPressed == '101')
    {
        e();
        console.log("e")
    }

	if(keyPressed == '102')
    {
        f();
        console.log("f")
    }

	if(keyPressed == '103')
    {
        g();
        console.log("g")
    }

	if(keyPressed == '104')
    {
        h();
        console.log("h")
    }

	if(keyPressed == '105')
    {
        i();
        console.log("i")
    }

	if(keyPressed == '106')
    {
        j();
        console.log("j")
    }

	if(keyPressed == '107')
    {
        k();
        console.log("k")
    }

	if(keyPressed == '108')
    {
        l();
        console.log("l")
    }

	if(keyPressed == '109')
    {
        m();
        console.log("m")
    }

	if(keyPressed == '110')
    {
        n();
        console.log("n")
    }

	if(keyPressed == '111')
    {
        o();
        console.log("o")
    }

	if(keyPressed == '112')
    {
        p();
        console.log("p")
    }

	if(keyPressed == '113')
    {
        q();
        console.log("q")
    }

	if(keyPressed == '114')
    {
        r();
        console.log("r")
    }

	if(keyPressed == '115')
    {
        s();
        console.log("s")
    }

	if(keyPressed == '116')
    {
        t();
        console.log("t")
    }

	if(keyPressed == '117')
    {
        u();
        console.log("u")
    }

	if(keyPressed == '118')
    {
        v();
        console.log("v")
    }

	if(keyPressed == '119')
    {
        w();
        console.log("w")
    }

	if(keyPressed == '120')
    {
        x();
        console.log("x")
    }

	if(keyPressed == '121')
    {
        y();
        console.log("y")
    }

	if(keyPressed == '122')
    {
        z();
        console.log("z")
    }
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	if(keyPressed == '48')
    {
        0();
        console.log("0")
    }

	if(keyPressed == '49')
    {
        1();
        console.log("1")
    }

	if(keyPressed == '50')
    {
        2();
        console.log("2")
    }

	if(keyPressed == '51')
    {
        3();
        console.log("3")
    }

	if(keyPressed == '52')
    {
        4();
        console.log("4")
    }

	if(keyPressed == '53')
    {
        5();
        console.log("5")
    }

	if(keyPressed == '54')
    {
        6();
        console.log("6")
    }

	if(keyPressed == '55')
    {
        7();
        console.log("7")
    }

	if(keyPressed == '56')
    {
        8();
        console.log("8")
    }

	if(keyPressed == '57')
    {
        9();
        console.log("9")
    }
	img_image="numkey.png";
	add();
}
function arrowkey()
{
	if(keyPressed == '38')
    {
        up();
        console.log("up")
    }

    if(keyPressed == '40')
    {
        down();
        console.log("down");
    }

    if(keyPressed == '37')
    {
        left();
        console.log("left");
    }

    if(keyPressed == '39')
    {
        right();
        console.log("right");
    }

	img_image="Arrkey.png";
	add();
}
function specialkey()
{
	if(keyPressed == '17')
    {
        ctrl();
        console.log("ctrl")
    }

	if(keyPressed == '18')
    {
        alt();
        console.log("alt")
    }

	if(keyPressed == '27')
    {
        esc();
        console.log("esc")
    }
	img_image="spkey.png"
	add();
}
function otherkey()
{
	if(keyPressed == '13')
    {
        enter();
        console.log("enter")
    }

	if(keyPressed == '16')
    {
        shift();
        console.log("shift")
    }

	if(keyPressed == '9')
    {
        tab();
        console.log("tab")
    }

	if(keyPressed == '8')
    {
        backspace();
        console.log("backspace")
    }
	img_image="otherkey.png";
	add();
}