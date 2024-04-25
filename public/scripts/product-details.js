"use strict";
(function () {

    window.addEventListener("load", init);
    function init() {
        refreshTable();
    }
    let saveButton = id("save-product");
    saveButton.addEventListener("click", function (e) {
        e.preventDefault();
        submitForm();
    });
    function submitForm() {
        let params = new FormData(id("form-container")); // pass in entire form tag
        let jsonBody = JSON.stringify(Object.fromEntries(params)); //make form data json string.
        fetch("http://localhost:8000/menu/new", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: jsonBody,
        })
            .then(refreshTable)
            .catch(alert);
    }

    function refreshTable() {
        id("form-container").reset();   
    }

})();