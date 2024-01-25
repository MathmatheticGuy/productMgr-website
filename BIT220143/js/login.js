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
        if (email == "demo@gmail.com" && pwd == "user")
        {
            alert("Login successful");

            window.location.href = "main.html?role=user";
            localStorage.setItem("role", "user");
            // location.href = "main.html";
        }
        else if (email == "admin@gmail.com" && pwd == "admin")
        {
            alert("Login successful");

            window.location.href = "main.html?role=admin";
            localStorage.setItem("role", "admin");
            // location.href = 'main.html';
        }
        else 
        {
            console.log(email);
            console.log(pwd);
            alert("Tên hoặc mật khẩu không hợp lệ");
        }
    }
}


function clearInput()
{
    document.getElementById("email").value="";
    document.getElementById("password").value="";
}
