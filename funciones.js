let editable = document.getElementById('editable');
let fdni = document.getElementById('fdni');

editable.addEventListener("change", activarEdit());

function activarEdit(){
 fdni.disabled = false;
}