const nav = document.getElementById('navbar');
const bar = document.getElementById('bar');
const close = document.getElementById('close');

var url = new URL(window.location.href);

const super_role = url.searchParams.get("role");
console.log('super role: ' + super_role);


// checking if user's role has permission to enter this page
function check_input()
{
    // var role = localStorage.getItem("role");

    if (super_role == "admin")
    {
        location.href = "input.html?role=admin";
    }
    else{
        alert("Không có quyền truy cập");
    }
}

// helper function
function isFloat(n) {
    return Number(n) === n && n % 1 !== 0;
}
