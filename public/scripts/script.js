"use strict";
(function () {

    window.addEventListener("load", init);
    function init() {
        refreshTable();
    }

    function id(idName) {
        return document.getElementById(idName);
    }



// Edit ptodects

    let updateSaveButton = id("update-save-product");
    updateSaveButton.addEventListener("click", function (e) {
        e.preventDefault();
        let id=e.currentTarget.value;
        submitUpdateForm(id);
    });
    document.addEventListener("DOMContentLoaded", function () {
        let uploadForm = document.getElementById("uploadForm");
        uploadForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent default form submission
            
            // Get the selected file
            let fileInput = document.getElementById("file");
            let file = fileInput.files[0];
    
            // Assuming you're using FormData to send the file to the server
            let formData = new FormData();
            formData.append("file", file);
    
            // Assuming you have an AJAX function to handle the upload
            // Here, replace 'submitUpdateForm' with your actual AJAX function
            submitUpdateForm(formData);
        });
    });

//delete products
    let deleteButton=id("delete-product-btn");
    deleteButton.addEventListener("click", function (event) {
        let id=event.currentTarget.value;
        fetch("http://localhost:8000/menu/delete/"+id, {
            method: "DELETE",           
        })
            .catch(alert);
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

    function submitUpdateForm(id) {
        let params = new FormData(document.getElementById("update-form-container")); // pass in entire form tag
        let jsonBody = JSON.stringify(Object.fromEntries(params)); //make form data json string.
        fetch("http://localhost:8000/menu/update/"+id, {
            method: "PUT",
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
        id("form-popup").style.display = "none";
        id("form-container").reset();   
        id("update-form-popup").style.display = "none";
        id("update-form-container").reset();    
    }

    function id(idName) {
        return document.getElementById(idName);
    }
})();