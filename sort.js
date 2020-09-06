var n,a; 
 
var cell,tb; 
 
var btn; 
 
 
 
function input() { 
 
    var list = document.querySelector('#list'); 
 
    n = parseInt(list.value); 
 
    var ui = document.querySelector('#ui'); 
 
    ui.firstElementChild.innerHTML="Enter numbers:&nbsp;"; 
 
    ui.removeChild(list); 
 
    tb=new Array(); 
 
    for (let i = 0; i < n; i++) { 
 
        tb[i] = document.createElement("input"); 

 
        tb[i].value=Math.floor(Math.random()*100); 
 
        tb[i].setAttribute("style","width:30px;margin-right:5px");
 
        tb[i].setAttribute("maxlength",3); 
 
        ui.appendChild(tb[i]); 
 
    } 
 
    btn = document.createElement("button"); 
 
    btn.innerHTML = "Start"; 
 
    btn.setAttribute("onclick", "start();return false"); 
 
    ui.appendChild(btn); 
 
    } 
 
 
 
function start(){ 
 
    a = new Array(); 
 
    for (let i = 0; i < n; i++){ 
 
        a[i] = parseInt(tb[i].value); 
 
        if(isNaN(a[i])){ 
 
            alert("not a number"); 
 
            return; 
 
        } 
 
    } 
 
    var tbl = document.getElementById("tbl"); 
 
    var row = new Array(); 
 
    cell = new Array(); 
 
    for (let i = 0; i < 2; i++) { 
 
        row[i] = document.createElement("tr"); 
 
        for (let j = 0; j < n; j++) { 
 
            cell[i*n+j] = document.createElement("td"); 
 
            if(i==1){ 
 
                cell[i*n+j].innerHTML=a[j]; 

 
                cell[i*n+j].style.border="thin solid"; 
 
            } 
 
            row[i].appendChild(cell[i*n+j]); 
 
        } 
 
        tbl.appendChild(row[i]); 
 
    } 
 
    btn.removeAttribute("onclick"); 
 
    i=1; 
 
    timer=setTimeout(function(){ 
 
        cell[n].setAttribute("bgcolor","plum"); 
 
        timer=setTimeout(pick,1000); 
 
    },1000); 
 
} 
 
 
 
var i,j; 
 
var temp; 
 
 
 
function pick() { 
 
    if(i<n){ 
 
        cell[i+n].setAttribute("bgcolor","pink"); 
 
        timer=setTimeout(function(){ 
 
            cell[i].innerHTML=cell[i+n].innerHTML; 
 
            cell[i+n].innerHTML=""; 
 
            cell[i+n].removeAttribute("bgcolor"); 
 
            cell[i].setAttribute("bgcolor","pink"); 
 
            temp=a[i]; 
 
            j=i; 
 
            timer=setTimeout(function(){ 
 
                timer=setInterval(shift,750); 

 
            },500); 
 
        },500); 
 
    } 
 
} 
 
 
 
function shift(){ 
 
    if(temp<a[j-1]){ 
 
        a[j]=a[j-1]; 
 
        cell[j-1].innerHTML=cell[j].innerHTML; 
 
        cell[j-1].setAttribute("bgcolor","pink"); 
 
        cell[j].innerHTML=""; 
 
        cell[j].removeAttribute("bgcolor"); 
 
        cell[j+n].innerHTML=a[j]; 
 
        cell[j+n].setAttribute("bgcolor","plum"); 
 
        cell[j+n-1].innerHTML=""; 
 
        cell[j+n-1].removeAttribute("bgcolor"); 
 
        j--; 
 
    } 
 
    else{ 
 
        clearInterval(timer); 
 
        a[j]=temp; 
 
        cell[j+n].innerHTML=cell[j].innerHTML; 
 
        cell[j+n].setAttribute("bgcolor","plum"); 
 
        cell[j].innerHTML=""; 
 
        cell[j].removeAttribute("bgcolor"); 
 
        i++; 
 
        timer=setTimeout(pick,1000); 
 
    } 
 
} 