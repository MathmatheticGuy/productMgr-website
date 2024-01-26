
document.querySelector("#price").addEventListener("keypress", function(evt) {
    
    if (evt.which !== 46)
    {
        if (evt.which < 48 || evt.which > 57)
        {
            evt.preventDefault();
        }
    }
});

document.querySelector("#quantity").addEventListener("keypress", function(evt) {
    if (evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});

document.querySelector("#prodName").onkeypress = function(e) {
    var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
    var charStr = String.fromCharCode(charCode);
    
    if (/\d/.test(charStr)) 
    {
        return false;
    }
};

function clearInputs()
{
    document.getElementById("prodName").value = '';
    document.getElementById("prodID").value = '';
    document.getElementById("quantity").value = '';
    document.getElementById("image").value = '';
    document.getElementById("price").value = '';
}

var productList = [];

function submitForm() {
    var productName = document.getElementById("prodName").value;
    var productID = document.getElementById("prodID").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    var image = document.getElementById("image").value;
    var imageInput = document.getElementById('image');

    console.log(image);
    function getImageUrl(event) {
        var imageFile = event.target.files[0];
        var imageUrl = URL.createObjectURL(imageFile);
        console.log(imageUrl);
        return imageUrl;
    }

    imageInput.addEventListener('change', event => {
        var imageUrl = getImageUrl(event);
        // Use the imageUrl as needed
    });
    

    if (productName.length == 0 || productID.length == 0 || quantity.length == 0 || price.length == 0){
        alert("Không hợp lệ");
    } else if (price < 0) {
        alert("Giá không hợp lệ");
        document.getElementById("price").value = ''; 

    } else if (quantity < 0) {
        alert("Số lượng không hợp lệ");
        document.getElementById("quantity").value = '';

    } else if (image.length == 0) {
        alert("Thiếu ảnh");
        document.getElementById("image").value = '';

    } else {
        var imageUrl = getImageUrl(event);
        var newProduct = { id: productID, name: productName, quantity: quantity, price: price, img: imageUrl};
        productList.push(newProduct);

        // Store the product in localStorage
        localStorage.setItem("prodList", JSON.stringify(productList));

        console.log(productList);

        console.log(localStorage.getItem('prodList'));
        var storedProductList = JSON.parse(localStorage.getItem('prodList'));
        console.log(storedProductList.length);  
        alert("Đã lưu product");


        document.getElementById("prodName").value = '';
        document.getElementById("prodID").value = '';
        document.getElementById("quantity").value = '';
        document.getElementById("price").value = ''; 
        document.getElementById("image").value = ''; 
        
    }
}
