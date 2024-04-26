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
        alert("Product Added");
    });
    function submitForm() {
        let formData = new FormData(id("form-container")); // pass in form element
        fetch("http://localhost:8000/products/edit", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Object.fromEntries(formData)), // convert FormData to JSON directly
        })
        .then(response => {
            if (response.ok) {
                alert("Product Added"); // Display alert message only on success
                refreshTable();
            } else {
                throw new Error("Product could not be added.");
            }
        })
        .catch(error => {
            console.error("Error adding product:", error);
            alert("Error adding product.");
        });
    }
    
    function refreshTable() {
        id("form-container").reset();   
    }

})();