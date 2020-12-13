let notesInput = document.getElementById("notes_input");
// let saveButton = document.getElementById("save_button");
let list = document.getElementById("list");

//Press Enter to add note
notesInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        save();
    }
})


//Insert new Notes
function save() {
    if (notesInput.value == 0) {
        alert("Write Something before Save");
    } else {
        let newList = document.createElement('li');
        newList.innerHTML = notesInput.value + ' <i class="fa fa-check"></i> &nbsp; <i class="fa fa-close"></i>';
        newList.setAttribute('id', 'notes');
        list.appendChild(newList);
        notesInput.value = '';
    }
}


// Delete Notes
window.onclick = e => {
    if (e.target.className == 'fa fa-close') {
        e.target.parentElement.remove();
    }
    if (e.target.className == 'fa fa-check') {
        e.target.parentElement.style.textDecoration = 'line-through';
    }
}