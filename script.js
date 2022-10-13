//This table is in HTML, create the sasme table With Below Mentioned Information
//Using DOM 
//Deploy the same using netlify
//Remainder:don't use innerHTML propery 1st Method

{/* <table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col">First</th>
    <th scope="col">Middle</th>
    <th scope="col">Last</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Mark</td>
    <td>Otto</td>
    <td>@mdo</td>
  </tr>
</tbody>
</table> */}

function table(tagname, attrname, attrvalue){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    return ele;
}
var tb1=table("table","class","table");
var th1=table("thead","class","thead-dark");
tb1.append(th1);
function trow(tagname){
    var ele=document.createElement(tagname);
    return ele;
}
var tr1=trow("tr");
th1.append(tr1);

function thead(tagname, attrname, attrvalue, content){
    var ele=document.createElement(tagname);
    ele.setAttribute(attrname, attrvalue);
    ele.innerHTML=content;
    return ele;
}
var thd1=thead("th","scope","col","First");
var thd2=thead("th","scope","col","Middle");
var thd3=thead("th","scope","col","Last");
tr1.append(thd1, thd2, thd3);

var tbd1=trow("tbody");
tb1.append(tbd1);
var tr2=trow("tr");
tbd1.append(tr2);

function tdata(tagname, content){
    var ele=document.createElement(tagname);
    ele.innerHTML=content;
    return ele;
}

var td1=tdata("td","Rajendran");
var td2=tdata("td","Rama");
var td3=tdata("td","Samy");
tbd1.append(td1,td2,td3);

document.body.append(tb1);