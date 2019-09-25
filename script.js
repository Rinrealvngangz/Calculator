
var kq1=0;
var emp="";

 
  function add(so)
 {
   document.form.display.value=document.form.display.value+so;

   }
 
  function add1(oper)
  {
    kq1 = document.form.display.value;
    document.form.display.value="";
    emp = oper;
  
  }

  function equal()  {
   var kq = document.form.display.value;
 
  switch(emp)
  {
    case "/":
        resul = parseInt(kq1)/ parseInt(kq);
      break;
      case "*":
        resul = parseInt(kq1) * parseInt(kq);
      break;
      case "+":
        resul = parseInt(kq1) + parseInt(kq);
      break;
      case "-":
        resul = parseInt(kq1) - parseInt(kq);
      break;

  }
   document.form.display.value=resul;

  }
   function clean()
 {
  document.form.display.value=" ";
 }

 function xoa1() {
  var kq = document.form.display.value;
   document.form.display.value=kq.substring(0,kq.length-1);
 }

function phantram()
{
  var kq = document.form.display.value;
  document.form.display.value=kq/100;
}




