"use strict";
(function () {

    window.addEventListener("load", init);
    function init() {
        refreshTable();
    }

    function id(idName) {
        return document.getElementById(idName);
    }


   

//delete products
    let deleteButton=id("delete-product-btn");
    deleteButton.addEventListener("click", function (event) {
        let id=event.currentTarget.value;
        fetch("http://localhost:8000/menu/delete/"+id, {
            method: "DELETE",           
        })
            .catch(alert);
    });
   function Remove() {
        document.getElementById("table").style.display = "none";
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

    let closeButton = id("remove");
    closeButton.addEventListener("click", function (e) {
  alert("You clicked the close button");
        id("table").style.display = "none";
    });

    function id(idName) {
        return document.getElementById(idName);
    }
})();