
	  var config = {
    apiKey: "AIzaSyDhcllncI1FOn14Arm2HzfCkl3ewlf63zo",
    authDomain: "login-page-3167e.firebaseapp.com",
    databaseURL: "https://login-page-3167e.firebaseio.com",
    storageBucket: "login-page-3167e.appspot.com",
    messagingSenderId: "296597625615"
  };
  firebase.initializeApp(config);
  var firebaseRef=firebase.database().ref();
  const txtEmail=document.getElementById("txtEmail");
    const txtPassword=document.getElementById("txtPassword");
	const txtName=document.getElementById("txtName");
    const txtPhone=document.getElementById("txtPhone");
	
function signIn( t)
{
	var s=0;
	const email=txtEmail.value;
	const pass=txtPassword.value;
	const promise=firebase.auth().signInWithEmailAndPassword(email,pass);
	promise.catch(function(error)
	{  s=t+1;
		switch(error.code)
		{ 
		case "auth/invalid-email": swal("Invalid email address"); break;
		case "auth/user-disabled": swal("User corresponding to the given email has been disabled."); break;
		case "auth/user-not-found": swal("There is no user corresponding to the given email.Please Sign Up"); break;
		case "auth/wrong-password": swal("Incorrect password"); break;
		}
	});
	if(s==0)
		window.location="logout.html";
}
function signUp()
{   
    const email=txtEmail.value;
	const pass=txtPassword.value;
	var reg=txtPhone.value;
	if(!reg.match(/[789]\d{10}/))
	{
		alert("Success");
	const promise=firebase.auth().createUserWithEmailAndPassword(email,pass);
	promise.catch(function(error)
	{
		switch(error.code)
		{
			case "auth/email-already-in-use": swal("Email already taken"); break;
			case "auth/invalid-email": swal("Not a valid email address"); break;
			case "auth/operation-not-allowed": swal("Email/Password are not enabled. Contact administrator"); break;
			case "auth/weak-password": swal("Weak password"); break;
		}
		
		
	});
	}
	else
	{
		alert("match the pattern");
		txtPhone.focus();
	}
	
}
function logout()
{
	firebase.auth().signOut().then(function() {
		alert("Logged ou successfully");
  window.open("index.html","_self");
}, function(error) {
  console.error('Sign Out Error', error);
});
}