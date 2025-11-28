let submit = document.querySelector('input[type="submit"]');
submit.addEventListener("click", function(e) {
    e.preventDefault();
    let name = document.getElementById("fullname");
    let email = document.getElementById("email");
    let cnic = document.getElementById("cnic");
    let phone = document.getElementById("telephone");
    let age = document.getElementById("age");
    let name_re = /^[A-Za-z ]+$/;
    let email_re = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    let cnic_re = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
    let phone_re = /^03[0-9]{2}-[0-9]{7}$/;
    let age_re = /^[0-9]{1,3}$/;

    if(!name_re.test(name.value)) {
        name.classList.add("error");
    }
    if( !email_re.test(email.value)) {
        email.classList.add("error");
    }
    if( !cnic_re.test(cnic.value.trim)) {
        cnic.classList.add("error");
    }
    if( !phone_re.test(phone.value)) {
        phone.classList.add("error");
    }
    if(!age_re.test(age.value) || age.value < 0 || age.value > 100) {
    age.classList.add("error");
}
});
