firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        document.getElementById("userOut").style.visibility = 'hidden';
        // location.replace("index.html")
    }
    else if(user){
        // document.getElementById("userIn").style.visibility = 'hidden';
        document.getElementById("userIn").innerHTML = user.email
    }
    // window.location.reload();
})


function booking(){
    alert("Your response has been recorded.");
    window.reload();
    
}

function logout(){
    document.getElementById("userIn").style.visibility = 'visible';
    document.getElementById("userIn").innerHTML = 'Login/SignUp';
    document.getElementById("userOut").style.visibility = 'hidden';

    firebase.auth().signOut()
}
