function validation()
{
var pid=document.getElementById("passwordid");
var val=0;
var reg=/([A-Z 0-9])/;
var reg1 = /[ `!#$ %^&*()_+\-=\[\]{};':"\\|,.<>\/? ~]/;
if(reg1.test(pid.value) || !reg.test(pid.value))
{
   alert("password should contain atleast one number and upper letter and no special character except @"); 
    return false;
}

}
