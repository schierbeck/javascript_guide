/* =================================================================================================
!OPERATÖRER & GLOBALA FUNKTIONER
================================================================================================= */

	// !Arithmetic Operators
	"Addition"					+				// x + y
	"Subtraction"				-				// x - y
	"Multiplication"			*				// x * y
	"Division"					/				// x / y
	"Modulus"					%				// 17 % 3 = 2
	"Increment"					++				// Samma som +1
	"Decrement"					--				// Samma som -1
	"Unary negation"			-				// Negativa tal (-5)

	// !Assignment Operators
	"Assign"					=				// x = y
	"Addition assign"			+=				// x += y (x = x + y)
	"Subtraction assign"		-=				// x -= y (x = x - y)
	"Multiplication assign"		*=				// x *= y (x = x * y)
	"Division assign"			/=				// x /= y (x = x / y)
	"Modulus assign"			%=				// x %= y (x = x % y)

	// !Comparison operators
	"Equal" 					==				// 1 == "1" (true)
	"Strict equal" 				===				// 1 === "1" (false)
	"Not equal"					!=				// 1 != 1 (false)
	"Strict not equal"			!==				// 1 !== 2 (true)
	"Greater than"				>				// 1 > 2 (false)
	"Less than"					<				// 1 < 2 (true)
	"Greater than or equal"		>=				// 2 >= 1 (true)
	"Less than or equal"		<=				// 1 <= 1 (true)

	// !Logical operators
	"And"						&&				// if( 3 > 2 && 1 < 3)
	"Or"						||				// 5 || 2 > 3 (true)
	"Not"						!				// !2 === 3) (true)

	// Special operators
	"Conditional"				? :				//(x >= 10) ? "Stämmer" : "Stämmer inte";
	"Comma"						,				// var x = 5, y = 10, z = "5";
	delete										// delete x (true), Array-exempel: delete arr[3] plats [3] försvinner samt true
	in 							// 0 in array (Om plats 0 finns = true)
	instanceof					// today instanceof Date, if today is an instance of Date object = true
	new 						// Array, Boolean, Date, Function, Image, Number, Object, Option, RegExp, or String
	this 						// Refers to current object
	typeof()					// x = number, z = string
	void()						// void(5) = undefined

	null 						// a == null (true)

	getElementById()			// document.getEmelemtByID("myID")
	getElementByClassName()		// document.getElementByClassName("myClass")
	getElementsByTagName() 		// document.getElementsByTagName("input")
	getElementByName()			// document.getElementByName("username")


	parseInt()					// Rundar av nedåt, 1.9 blir 1 som int, parseInt(z) -> typeof(z) -> (number)
	parseFloat()				// parseFloat(z) -> typeof(z) -> (number)
	Number()					// Fungerar i stort som parseFloat. Bra tråd om det här: http://goo.gl/Xg03iZ
	String()					// String(5) = "5"


	isNaN()						// Om inte nummer (även inom sträng) = true
	decodeURI()					// decodeURI("http://Bj%C3%B6rk_Gu%C3%B0mundsd%C3%B3ttir.se") = http://Björk_Guðmundsdóttir.se
	decodeURIComponent() 		// decodeURIComponent("Bj%C3%B6rk%20Gu%C3%B0mundsd%C3%B3ttir") = Björk Guðmundsdóttir
	encodeURI()					// encodeURI("http://Björk_Guðmundsdóttir.se") = http://Bj%C3%B6rk_Gu%C3%B0mundsd%C3%B3ttir.se
	encodeURIComponent() 		// encodeURIComponent("Björk Guðmundsdóttir") = Bj%C3%B6rk%20Gu%C3%B0mundsd%C3%B3ttir

	// isFinite()
	// eval()


/* =================================================================================================
!VARIABLER
================================================================================================= */

	// Sträng - typeof() = string
	var string = "Tecken inom fnuttar";

	// Nummer - typeof() = number
	var numb = 1234; // Int
	var numb = 12.34; // Float

	// Boolean - typeof() = boolean
	var thumb_up = true;
	var thumb_down = false;

	// Array - typeof() = object
	var arr = [1, 2, 3];

	// Objekt - typeof() = object
	var obj = { firstname: "Stina", lastname: "Stinasson" }

	// De två variabeltyperna nedan räknas oftast inte in som variabeltyper men passar ändå in på beskrivningen.

	// Null - typeof() = object
	var name = null; // Variabeln har blivit deklarerad värdet null, dvs den vet om att den är tom.

	// Undefined - typeof() = undefined
	var name; // Variabeln har blivit deklarerad men inte blivit tilldelad ett värde.


//// Exempel 1 =====================================================================================

	var my_global_variable = "Denna variabel är global och tillgänglig överallt i dokumentet";

	function my_function() {
		var my_local_variable = "Denna variabel är lokal och nås inte utanför funktionen (sanning med modifikation)";
	}


/* =================================================================================================
!FUNKTIONER
================================================================================================= */

// Två sätt att skapa en funktion på (båda är ok!)

function myFunc() {}

var myFunc = function() {};


//// Exempel 1 =====================================================================================

	function myFunc(x, y) {

		var add = x + y;
		return add;
	}

	console.log( myFunc(10, 15) ); // Kör funktionen och skickar med två värden som står för x och y

//// Exempel 2 =====================================================================================

	function lilla_ludde(){

		var haha = "håhå";
		var jaja = "jaja";

		return { haha: haha, jaja: jaja };
	}

	var l = lilla_ludde();

	console.log( "Här kommer lilla Ludde " + l.haha + " " + l.jaja );


/* =================================================================================================
!ARRAYER
================================================================================================= */

//// Exempel 1 =====================================================================================

	// Tre gilitiga varianter på samma array. Använd vad som känns bäst för dig.

	var barba_adults = new Array("papa", "mama");

	var barba_adults = ["papa", "mama"];

	var barba_adults = [];
	barba_adults[0] = "papa";
	barba_adult[1] = "mama";


//// Exempel 2 =====================================================================================

	// Skapar ny arrayer.
	var barba_adults = new Array("papa", "mama");
	var barba_kids = new Array("zoo", "flink", "skön");

	// Lägg till "stark" först i arrayen.
	barba_kids.unshift("stark")

	// Lägg till "elak" sist i arrayen.
	barba_kids.push("elak");

	// Lägg till "bok", "fin" och "lala" så att bok hamnar på plats [2].
	// Med nollan säger vi att inga värden efter ovanstående ska raderas.
	// Om det stod 2 istället för 0 så skulle "flink" och "skön" försvinna från arrayen.
	barba_kids.splice(2, 0, "bok", "fin", "lala");

	// Jag ändrade mig. Ta bort "elak". pop() tar bort sista värdet i arrayen ("elak").
	barba_kids.pop();

	// Lägg barba_adults värden i omvänd ordning, så att mama hamnar innan papa.
	barba_adults.reverse();

	// Sortera barnen i teckenordning
	barba_kids.sort();

	// Slå ihop båda arrayerna till en härlig barba_family array. barba_adults står först i den nya array.
	var barba_family = barba_adults.concat(barba_kids);

	// Loopa igenom alla barbas och skriv ut dessa i konsolen
	for(i = 0; i < barba_family.length; i++) {
		console.log("Barba" + barba_family[i]);
	}


/* =================================================================================================
!DIALOG BOXES
================================================================================================= */

	confirm("Klicka OK eller Avbryt"); // Klick på OK = true, klick på Avbryt = False
	prompt("What´s your name?", "placeholder text"); // Andra värdet är valfritt
	alert('Warning!');


/* =================================================================================================
!LOOPS
================================================================================================= */

// !For

//// Exempel 1 =====================================================================================

	// Vi skapar en array
	var nameArr = ['Stina', 'Lasse', 'Bolten'];
	// Så länge i är mindre än längden på arrayen = Kör loopen och lägg till +1 på i
	for(var i = 0; i < nameArr.length; i++) {
		console.log('Namn: ' + nameArr[i]);
	}


//// Exempel 2 =====================================================================================

	// Vi skapar ett objekt
	var family = {
		"members": [ // Array i objektet
			{ "firstname": "Stina", "age": 37 }, // Objekt i arrayen
			{ "firstname": "Lasse", "age": 35 }	// Objekt i arrayen
		]
	};
	// För alla key i family.members Stina och Lasse)
	for( var person in family.members ) {
		var m = family.members; // Variabel för att inte behöva skriva ut family.person hela tiden, döp till valfritt

		console.log( m[person].firstname + " är " + m[person].age + " år gammal." );
	}


//// Exempel 3 =====================================================================================

	// For vs While battle! Looparna gör samma sak med små skillnader i syntaxen!

	for( var i = 11; i > 10; i++ ) {
		// Do stuff
	}

	var i = 11;
	while( i > 10 ) {
		// Do stuff
	}


// !While
// Tänk på while-loop som en kombination av en for-loop och en if-sats

//// Exempel 1 =====================================================================================

// I exemplet körs loopen tills makrill ska blandas in i fruktsalladen.
// Tyvärr bidrar det till att vi inte får äpple i salladen, men vi får
// å andra sidan en bättre förståelse av hur while fungerar.
var i = 0;
var array = new Array('banan', 'päron', 'apelsin', 'makrill', 'äpple');

while( array[i] != 'makrill' ) {
	console.log( 'Mmm... vad gott med ' + array[i] + ' i min fruktsallad!' );
	i++;
}


// !Do while

//// Exempel 1 =====================================================================================

	// Do while körs alltid minst en gång, efter första gången krävs att villkoret stämmer

	var x = 5;

	do { // Will run atleast one time
		document.write(x);
		x++;
	} while (x > 20);


/* =================================================================================================
!IF, ELSE...
================================================================================================= */

//// Exempel =====================================================================================

	if( 1 === 2 ){
		// Kommer inte att köras
	} else {
		// Kommer att köras
	}

	if ( 1 === 1 && 2 === 2 ){
		// Kommer att köras
	}


/* =================================================================================================
!SWITCH
================================================================================================= */

//// Exempel =====================================================================================

	var x = 3;

	switch( x ){
		case 1:
			console.log("Uno");
			break;
		case 2:
			console.log("Dos");
			break;
		case 3:
			console.log("Tres");
			break;
		default:
			console.log("Que?");
	}


/* =================================================================================================
!REGEX
================================================================================================= */

//// Exempel =====================================================================================

	var regex = /(\w+)\s(\w+)/; // (minst ett tecken) (mellanslag) (minst ett tecken)
	var str = "Stina Stinasson";
	var newstr = str.replace(regex, "$2, $1"); // Byter plats på För/Efternamn enligt regex mönstret

	console.log(newstr);


/* =================================================================================================
!FORMULÄR VALIDERING
================================================================================================= */

//// Exempel =====================================================================================

	function no_numbers_please(){

		var regex = /^[a-zA-Z]+$/;
		var str = "abc";

		if( str.match(regex) ){

			console.log("Bra inga obehagliga siffor här inte!" )

		} else {

			console.log("Du får inte skriva in siffor här!");
		}
	}

	no_numbers_please();


/* =================================================================================================
!BONUS
================================================================================================= */

	console.log( Array(16).join("lol" - 0) + " Batman!" );