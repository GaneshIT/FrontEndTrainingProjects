// declare global variables
var productList=[{'date':'','fno':''},{}];//array

//push(60),pop()  -stack   -add- Last item
//shift(),unshift(55) - queue   ->add into begin
//slice,splice,join,concat
var a1=[2,34];
var a2=[10,20];

a2.join(a1);// join array

//arr.splice(start[, deleteCount, elem1, ..., elemN])
//delete and add items
let arr = ["I", "study", "JavaScript"];

arr.splice(1,0,"C#","CSS"); // from index 1 remove 1 element
//I,C#,CSS,JavaScript
//I,C#,CSS,study,JavaScript
//alert( arr ); // ["I", "JavaScript"]


setInterval(function(){
    var date=new Date();
    document.getElementById('todaydate').innerText=date.toLocaleTimeString();
},1000)

function addProduct(){
    var status=validate();
   if(status){
    document.getElementById('msg').innerHTML='<span style="color:green">Product added</span>';
    showProducts();
   }
   else
    document.getElementById('msg').innerHTML='<span style="color:red">Error!!</span>';

}

function validate(){
    var flag=false;
var pid=  document.getElementById('txtpid').value;
  var pname=  document.getElementById('txtpname').value;
  var ptype=  document.getElementById('ddltype').value;
  var price=  document.getElementById('txtprice').value;
  if(pid!='' && pname!='' && ptype!='Select' && price!='')
    flag=true;
else
    flag;
    return flag;
}

function showProducts(){
    //Json - {key:value}
    //() -methods
    //{} - object
    //[] - array
    //[{}] - array of objects
    var pid=  document.getElementById('txtpid').value;
  var pname=  document.getElementById('txtpname').value;
  var ptype=  document.getElementById('ddltype').value;
  var price=  document.getElementById('txtprice').value;
    productList.push({"id":pid,"pname":pname,"type":ptype,"price":price});
    var tableHeader='<table><thead><tr><th>Id</th><th>PName</th><th>Type</th><th>Price</th></thead><tbody>';
    var tableBody='';
    for(let i=0;i<productList.length;i++){
        tableBody=tableBody+'<tr><td>'+productList[i].id+'</td><td>'+productList[i].pname+'</td><td>'+productList[i].type+'</td><td>'+productList[i].price+'</td></tr>';
    }
    document.getElementById('productdata').innerHTML=tableHeader+tableBody+'</tbody></table>';
}

f1(); //calling
<f1></f1>
async function f1(){
await // writing data into file - 5ms
_db.context.add();
}
async function f2(){
 await  // reading data from file  - 10ms
}
async function f3(){
 await   //fetching data from sql server 25ms
}
f1() 5ms waiting
f2() it will start - 10ms
f3() start