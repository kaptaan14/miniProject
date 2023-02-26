firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        document.getElementById("userIn").style.visibility = 'hidden';
        location.replace("index.html")
    }else{
        document.getElementById("userOut").style.visibility = 'hidden';
    }
})


function logout(){
    firebase.auth().signOut()
}