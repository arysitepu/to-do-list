
let myNodelist = document.getElementsByTagName("LI");

let i;
for(i = 0; i < myNodelist.length; i++){
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName('close');
let u;
for(u = 0; u < close.length; u++){
    close[u].onclick = function(){
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function(ev){
    if(ev.target.tagName === 'LI'){
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement(){
    let li = document.createElement('li');
    let inputValue = document.getElementById('myInput').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === ''){
        alert('isi dulu dong baru di click');
    }else{
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for(j = 0; j < close.length; j++){
        close[j].onclick = function(){
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}


