function login()
{
    var email = document.getElementById("email").value;
    var pwd = document.getElementById("password").value;

    if(email == '')
    {
        alert("Nhập tên");
    }
    else if(pwd == '')
    {
        alert("Nhập mật khẩu");
    }
    else
    {
        if (email == "u@gmail.com" && pwd == "user")
        {
            alert("Login successful");

            window.location.href = "main.html?role=user";
            localStorage.setItem("role", "user");
            // location.href = "main.html";
        }
        else if (email == "a@gmail.com" && pwd == "admin")
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