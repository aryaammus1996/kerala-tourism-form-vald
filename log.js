function login()
var uname = document.getElementById("email").Value;
var pwd = document.getElementById("pwd1").Value;
var flter= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
if(uname==' ')
{
    alert ("please enter username.");
}
else if (pwd==' ')
{
    alert("enter  the password");
}
else if (!filter.test(uname))
{
    alert(" enter valid email id.");
}
else if(pwd.length< 6|| pwd. length> 6 )
{
    alert("password min and max length is 6.");
}
else{
    alert (' thank you for login');
}
}
// Reset Inputfield code.
function clearFunc()
{
    document.getElementById("email").Value="";
    document.getElementById("pwd1").Value="";}
}