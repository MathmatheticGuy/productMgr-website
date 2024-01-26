function login()
{
    var email = document.getElementById("email").value;

    if(email == '')
    {
        alert("Nhập email");
    }
    else
    {
        if (email == "u@gmail.com")
        {
            alert("Login successful");

            window.location.href = "user.html?role=user";
            localStorage.setItem("role", "user");
        }
        else if (email == "a@gmail.com")
        {
            alert("Login successful");

            window.location.href = "main.html?role=admin";
            localStorage.setItem("role", "admin");
            // location.href = 'main.html';
        }
        else 
        {
            alert("Login successful");
            window.location.href = "visitor.html?role=visitor";
            localStorage.setItem("role", "visitor");
        }
    }
}

function clearInput()
{
    document.getElementById("email").value="";
}
