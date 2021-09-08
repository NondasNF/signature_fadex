function set_user_information(){
    let nameNewAdd = document.querySelector("#name_box").value;
    let jobnameNewAdd = document.querySelector("#jobname_box").value;
    let emailNewAdd = document.querySelector("#email_box").value;

    document.getElementById("person_name").innerHTML = `${nameNewAdd}<span><br></span>`;
    document.getElementById("person_jobname").innerHTML = jobnameNewAdd;
    document.getElementById("person_email").innerHTML = emailNewAdd;
    document.querySelector("#person_email").href = `mailto:${emailNewAdd}`;
}