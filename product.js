// declare global variables
var productList=[];//array

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
