firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        document.getElementById("userOut").style.visibility = 'hidden';
        // location.replace("index.html")
    }
    else if(user){
        document.getElementById("userIn").style.visibility = 'hidden';
    }
    // window.location.reload();
})


function logout(){
    document.getElementById("userIn").style.visibility = 'visible';
    document.getElementById("userOut").style.visibility = 'hidden';

    firebase.auth().signOut()
}