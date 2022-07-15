"use strict"

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form");
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);
    }

    

})