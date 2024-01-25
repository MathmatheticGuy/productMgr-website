// This code is responsible for displaying a list of products on a web page.
// It retrieves the product list from local storage, loops through each product,
// and dynamically generates HTML table rows to display the product details.
// The generated rows are then appended to the '#prod-list' element on the web page.
// Finally, the 'showProdList' function is called to populate the product list on page load.
$(document).ready(function () {
    const products = JSON.parse(localStorage.getItem("prodList"));

    console.log(products);
    function showProdList() {
        console.log(products.length);

        $('#prod-list').empty();
        for (var i = 0; i < products.length; i++) {
            var product = products[i];
            console.log("product: ", i, ' ', product);

            //! Create Element
            var row = document.createElement("tr");
            var idCol = document.createElement("td");
            var nameCol = document.createElement("td");
            var quantityCol = document.createElement("td");
            var priceCol = document.createElement("td");
            var actionCol = document.createElement("td");
            //? action-buttons for "display: flex" in css 
            actionCol.classList.add("action-buttons");

            //! Create Buttons
            var editButton = document.createElement("button");
            editButton.textContent = "Sửa";
            var deleteButton = document.createElement("button");
            deleteButton.textContent = "Xóa";

            //! Add Class for 2 Buttons
            editButton.classList.add("btn", "btn-primary");
            deleteButton.classList.add("btn", "btn-danger");

            //! Add 2 Buttons to Action Column
            actionCol.appendChild(editButton);
            actionCol.appendChild(deleteButton);

            //! Add Context (data) to each Column
            idCol.textContent = product.id;
            nameCol.textContent = product.name;
            quantityCol.textContent = product.quantity
            priceCol.textContent = product.price;

            //! Append all Column to Row 
            row.appendChild(idCol);
            row.appendChild(nameCol);
            row.appendChild(quantityCol);
            row.appendChild(priceCol);
            row.appendChild(actionCol);


            $('#prod-list').append(row);
        }
    }

    showProdList();


});




