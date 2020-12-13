let notesInput = document.getElementById("notes_input");
let list = document.getElementById("list");

//Press Enter to add note
notesInput.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        saveToLocal();
    }
})


// Load old Notes
// document.addEventListener('DOMContentLoaded', getNotesFromLoc);

// function getNotesFromLoc() {
//     // var local_notes = [];
//     if (localStorage.getItem('myNots') === null) {
//         console.log("no previous item in localStorage");
//     } else {
//         console.log('yes yes there is something in localStorage');
//         // local_notes.push(localStorage.getItem('myNots'));
//         console.log(localStorage.getItem('myNots'));
//     }
//     // console.log(local_notes);
// }

var local_notes = [];
if (localStorage.getItem('myNots') === null) {
    console.log("no previous item in localStorage");
} else {
    console.log('yes yes there is something in localStorage');
    // local_notes.push(localStorage.getItem('myNots'));
    local_notes.push(JSON.parse(localStorage.getItem('myNots')));
}
// local_notes[0].forEach(function (pras) {
//     console.log(pras);
// });
var notes = [];
function saveToLocal() {
    if (notesInput.value == 0) {
        //write something
    } else {
        notes.push(notesInput.value);
    }
    notesInput.value = '';
    localStorage.setItem('myNots', JSON.stringify(notes));
}




window.onclick = e => {
    // console.log(e);
}