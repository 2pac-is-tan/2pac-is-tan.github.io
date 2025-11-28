document.getElementById("jobForm").addEventListener("submit", function (event) {
    let isValid = true;

    
    function check(field, condition) {
        if (condition) {
            field.classList.add("invalid");
            isValid = false;
        } else {
            field.classList.remove("invalid");
        }
    }

    
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const position = document.getElementById("position");
    const education = document.getElementById("education");
    const experience = document.getElementById("experience");
    const whyhire = document.getElementById("whyhire");
    const genderGroup = document.getElementById("genderGroup");
    const gender = document.querySelector("input[name='gender']:checked");

    
    check(fname, fname.value.trim() === "");
    check(lname, lname.value.trim() === "");
    check(email, !email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/));
    check(phone, !phone.value.match(/^[0-9]{11}$/));
    check(position, position.value.trim() === "");
    check(education, education.value === "");
    check(experience, experience.value === "" || experience.value < 0);
    check(whyhire, whyhire.value.trim() === "");

    
    if (!gender) {
        genderGroup.classList.add("invalid");
        isValid = false;
    } else {
        genderGroup.classList.remove("invalid");
    }

    
    if (!isValid) {
        event.preventDefault();
    }
});
