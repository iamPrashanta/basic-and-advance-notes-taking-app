let notesInput = document.getElementById("notes_input");
let list = document.getElementById("list");

//Press Enter to add note
notesInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        saveToLocal();
    }
})

// Load old Notes
document.addEventListener('DOMContentLoaded', getNotesFromLoc);
function getNotesFromLoc() {
    var local_notes = [];
    if (localStorage.getItem('myNots') === null) {
        console.log("no previous item in localStorage");
    } else {
        console.log('yes yes there is something in localStorage');
        local_notes.push(JSON.parse(localStorage.getItem('myNots')));
    }
    local_notes[0].forEach(function (each_note) {
        console.log(each_note);
        let newList = document.createElement('li');
        newList.setAttribute('id', 'notes');
        newList.innerHTML = each_note + ' <i class="fa fa-close"></i>';
        list.appendChild(newList);
    })
}

var notes = [];
function saveToLocal() {
    if (notesInput.value == 0) {
        alert('write something\nInput field is blank');
    } else {
        notes.push(notesInput.value);

        let newList = document.createElement('li');
        newList.setAttribute('id', 'notes');
        newList.innerHTML = notesInput.value + ' <i class="fa fa-close"></i>';
        list.appendChild(newList);
    }
    notesInput.value = '';
    localStorage.setItem('myNots', JSON.stringify(notes));
}




window.onclick = e => {
    // console.log(e);
}