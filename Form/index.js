let btn = document.getElementById("btn-js")
btn.addEventListener("click", () => {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if (email == "" && password == "") {
        window.location.reload()
    } else {
        let heading=document.getElementById("heading")
        heading.innerHTML=`Hello! Welcome ${email} !!.`
        document.getElementById("email").value=""
        document.getElementById("password").value=""

    }

})