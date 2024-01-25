const onSignup = () => {
    const first_name = document.getElementById("firstName").value;
    const last_name = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    console.log({
        first_name, last_name, email, password
    });

    auth.createUserWithEmailAndPassword(email, password)
        .then((userAccount) => {
            const userId = userAccount.user.uid;

            db.collection("users").doc(userId).set({
                first_name, last_name, email, created_at: new Date()
            })
                .then(() => {
                    alert("Registered successfully");
                    console.log("User profile registered successfully");
                    window.location.href="./login.html";
                })

                .catch((error) => {
                    alert("User not registered");
                    console.error("Error setting user profile:", error);
                });
        })
        .catch((error) => {
            alert("Error creating user account");
            console.error("Error creating user account:", error);
        });
};

const onLogin = () =>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
    .then((userSession) => {
        alert("login successfully")
        console.log(userSession);
        window.location.href="./dashbord.html";

    })
    .catch((error) =>{
        alert("invalid credentials")
        alert.log(error)
    })
}