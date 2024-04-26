"use strict";
(function () {


    let deleteButton = document.getElementById("delete-product-btn");
deleteButton.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default form submission behavior

    let id = document.getElementById("product-id").value; // Retrieve product ID from input field

    fetch("/products/delete/" + id, {
        method: "DELETE",
    })
    .then(goHome)
    .catch(alert);
});

document.addEventListener("DOMContentLoaded", function() {
    let deleteButton = document.getElementById("delete-product-btn");
    deleteButton.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default form submission behavior

        let id = document.getElementById("product-id").value;

        fetch("/products/delete/" + id, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        })
        .then(data => {
            console.log(data.message); // Assuming server returns a message confirming deletion
            window.location.href = "/products/all"; // Redirect to products page
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error deleting product.");
        });
    });
});


})();