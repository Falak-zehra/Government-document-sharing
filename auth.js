async function signup(e){
    e.preventDefault()
    const email = document.querySelector("#email")
    const password = document.querySelector("#password")
    const message = document.querySelector("#message")
    console.log(email.value, password.value)

    try{
    const result = await firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    

    console.log(result);
    message.textContent = `welcome ${email.value} `;
       message.style.color = "green"
       var timer = setTimeout(function() {
        window.location='login.html'
    }, 2000);

    }

    catch(err){
        console.log(err)
        message.textContent = err.message;
       message.style.color = "red"
    }
    email.value = ""
    password.value = ""



}



  

async function signin(e){
    e.preventDefault()
    const email = document.querySelector("#loginemail")
    const password = document.querySelector("#loginpassword")
    const message = document.querySelector("#mess")
    console.log(email.value, password.value)

    try{
    const result = await firebase.auth().signInWithEmailAndPassword(email.value, password.value)

    console.log(result);
    message.textContent = `welcome ${email.value} `;
       mess.style.color = "green"
       var timer = setTimeout(function() {
        window.location='doc.html'
    }, 2000);
       

    }

    catch(err){
        console.log(err)
        message.textContent = err.message;
       mess.style.color = "red"

    }
    email.value = ""
    password.value = ""


}

function logout(){
    const signoutsuccess = document.querySelector("#signoutsuccess")
    firebase.auth().signOut()
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          console.log(user)
        } else {
          console.log("signout success")
          signoutsuccess.textContent = "logout successful"
          signoutsuccess.style.color = "green"


        }
      });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const userId = user.uid;
    const userProfileRef = db.collection("users").doc(userId);

    // Get the user profile data
    userProfileRef.get().then((doc) => {
        if (doc.exists) {
            const userData = doc.data();
            const profileHTML = `
                <h2>${userData.name}</h2>
                <p>Email: ${userData.email}</p>
                <p>Phone: ${userData.phone}</p>
                `

    // ...
  } else {
    // User is signed out
    // ...
  }
})}
}
)
