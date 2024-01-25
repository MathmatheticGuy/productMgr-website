function load_info() {
    var products = JSON.parse(localStorage.getItem("prodList"));

    if (products === null || products.length === 0) {
        alert("Không tìm được thông tin hàng hóa");
        //location.href = "enter.html";  // Redirect to the enter page if no data found
    } else {
        showProdList(products);
    }
}

function showProdList(products) {
    $('#prod-list').empty();
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        var row = `<tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.quantity}</td>
                        <td>${product.price}</td>
                        <td class="action-buttons">
                            <button class="edit-btn btn btn-primary" onclick="editProduct(${i})"><i class="fa-solid fa-pencil"></i> Sửa</button>
                            <button class="delete-btn btn btn-danger" onclick="deleteProduct(${i})"><i class="fa-solid fa-xmark"></i> Xóa</button>
                        </td>
                    </tr>`;
        $('#prod-list').append(row);
    }
}

function editProduct(index) 
{
    var products = JSON.parse(localStorage.getItem("prodList"));
    var product = products[index];

    var newID =  prompt("Nhập mã mới", product.id);
    var newName = prompt("Nhập tên mới", product.name);
    var newQuantity = prompt("Nhập số lượng mới", product.quantity);
    var newPrice = prompt("Nhập giá mới", product.price);

    // if user don't cancel
    if (newID !== null && newName !== null && newQuantity !== null && newPrice !== null) 
    {
        // update new values
        product.id = newID;
        product.name = newName;
        product.quantity = newQuantity;
        product.price = newPrice;

        localStorage.setItem("prodList", JSON.stringify(products));

        showProdList(products);
    }
}

function deleteProduct(index) 
{
    var products = JSON.parse(localStorage.getItem("prodList"));

    // remove 1 element at a spectific index-th
    products.splice(index, 1);
    
    localStorage.setItem("prodList", JSON.stringify(products));
    showProdList(products); 
}
