let editable = document.getElementById('editable');
let fdni = document.getElementById('fdni');
fdni.disabled=true;
editable.addEventListener("change", activarEdit);

function activarEdit(){
 fdni.disabled= false;
}