
function italic(){
    var target = document.getElementById("text");
    if( target.style.fontStyle == "italic" ) {
        target.style.fontStyle = "normal";
    } else {
        target.style.fontStyle = "italic";
    }
}

function bold () {
	var target = document.getElementById("text");
	if ( target.style.fontWeight == "bold" ) {
	   ( target.style.fontWeight = "normal");
	} else {
		target.style.fontWeight = "bold";
	}
}
function underline () {
	var target = document.getElementById("text");
	if ( target.style.textDecoration == "underline") {
		target.style.textDecoration ="none";
	} else {
		target.style.textDecoration ="underline";
	}
}

function sizee() {
	var target = document.getElementById("text");
	target.style.fontSize = document.getElementById("select").value;

}

function fontt() {
	var target = document.getElementById("text")
	target.style.fontFamily = document.getElementById("select2").value;

}