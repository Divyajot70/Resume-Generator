function addNewWEField(){
   let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("weField");
   newNode.setAttribute("rows",8);
   newNode.setAttribute("cols",30);
   newNode.style.marginTop = "8px";

   let weOb=document.getElementById("we");
   let weAddButtonOb=document.getElementById("weAddButton");

   weOb.insertBefore(newNode,weAddButtonOb);
}
function addNewAQField(){
    let newNode=document.createElement("textarea");
   newNode.classList.add("form-control");
   newNode.classList.add("eqField");
   newNode.setAttribute("rows",8);
   newNode.setAttribute("cols",30);
   newNode.style.marginTop = "8px";

   let aqOb=document.getElementById("aq");
   let aqAddButtonOb=document.getElementById("aqAddButton");

   aqOb.insertBefore(newNode,aqAddButtonOb);
}
//generate CV
function generateCV(){
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;

    document.getElementById("contactT").innerHTML=
        document.getElementById("contactField").value;
    document.getElementById("linkedT").innerHTML=
        document.getElementById("linkedField").value;
    document.getElementById("emailT").innerHTML=
        document.getElementById("emailField").value;
    document.getElementById("codingT").innerHTML=
        document.getElementById("codingField").value;
    document.getElementById("gitT").innerHTML=
        document.getElementById("gitField").value;
    document.getElementById("skillsT").innerHTML=
        document.getElementById("skillsField").value;
    // summary
    document.getElementById("summaryT").innerHTML=
        document.getElementById("summaryField").value;
    // work experience
    let wes=document.getElementsByClassName("weField");
    let str=" ";
    for(let e of wes){
        str=str + `<li> ${e.value} </li>`;
    } 
    document.getElementById("weT").innerHTML=str;
    // Academic qualifications
   let aqs=document.getElementsByClassName("eqField");
   let str1="";
   for(let e of aqs){
    str1 +=`<li> ${e.value}</li>`;
   }
   document.getElementById('aqT').innerHTML=str1;

   document.getElementById("cv-form").style.display="none";
   document.getElementById("cv-template").style.display="block";
}
//print cv
function printCV(){
    window.print();
}
