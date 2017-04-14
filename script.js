function mat2d(){
	document.getElementById("square").style.display = "block";
	document.getElementById("cube").style.display = "none";
	document.getElementById("matrix2ddiv").style.display = "block";
	document.getElementById("matrix3ddiv").style.display = "none";
	document.getElementById("matrix4ddiv").style.display = "none";
}

function mat3d(){
	document.getElementById("square").style.display = "none";
	document.getElementById("cube").style.display = "block";
	document.getElementById("matrix2ddiv").style.display = "none";
	document.getElementById("matrix3ddiv").style.display = "block";
	document.getElementById("matrix4ddiv").style.display = "none";
}

function mat4d(){
	document.getElementById("square").style.display = "none";
	document.getElementById("cube").style.display = "block";
	document.getElementById("matrix2ddiv").style.display = "none";
	document.getElementById("matrix3ddiv").style.display = "none";
	document.getElementById("matrix4ddiv").style.display = "block";
}

function mat2dAnimate(){
	var form = document.getElementById("matrix2d");
	matrixStr = "matrix3d(" + form[0].value + "," + form[2].value + ",0,0," + 
							  form[1].value + "," + form[3].value + ",0,0," +
							  "0,0,1,0, 0,0,0,1)";

	document.getElementById("square").style.transform = matrixStr;
	document.getElementById("square").style.WebkitTransform = matrixStr;
}

function mat2dReset(){
	matrixStr = "matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)";

	document.getElementById("square").style.transform = matrixStr;
	document.getElementById("square").style.WebkitTransform = matrixStr;
}


function mat3dAnimate(){
	var form = document.getElementById("matrix3d");
	matrixStr = "matrix3d(" + form[0].value + "," + form[3].value + "," + form[6].value + ",0," +
							  form[1].value + "," + form[4].value + "," + form[7].value + ",0," +
							  form[2].value + "," + form[5].value + "," + form[8].value + ",0," +
							  "0,0,0,1)"  

	document.getElementById("cube").style.transform = matrixStr;
	document.getElementById("cube").style.WebkitTransform = matrixStr;
}


function mat4dAnimate() {
	var form = document.getElementById("matrix4d");
	matrixStr = "matrix3d(" + form[0].value + "," + form[4].value + "," + form[8].value + "," + form[12].value + "," +
							  form[1].value + "," + form[5].value + "," + form[9].value + "," + form[13].value + "," +
							  form[2].value + "," + form[6].value + "," + form[10].value + "," + form[14].value + "," +
							  form[3].value + "," + form[7].value + "," + form[11].value + "," + form[15].value + ")"  

	document.getElementById("cube").style.transform = matrixStr;
	document.getElementById("cube").style.WebkitTransform = matrixStr;
}

function mat4dReset(){
	matrixStr = "matrix3d(1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1)";

	document.getElementById("cube").style.transform = matrixStr;
	document.getElementById("cube").style.WebkitTransform = matrixStr;
}