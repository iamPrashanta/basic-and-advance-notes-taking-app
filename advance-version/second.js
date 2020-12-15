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
var locNots = [];
function getNotesFromLoc() {
    if (localStorage.getItem('myNots') == null) {
        console.log("no previous item in localStorage");
    } else {
        console.log('yes yes there is something in localStorage\n I Updated the UI');
        locNots.push(JSON.parse(localStorage.getItem('myNots')));
        //Printout each note Inside UI
        locNots[0].forEach(function (each_note) {
            let newList = document.createElement('li');
            newList.setAttribute('id', 'notes');
            newList.innerHTML = each_note + ' <i class="fa fa-close"></i>';
            list.appendChild(newList);
        })
    }

}
// console.log(locNots[0].length);
var notes = [];
function saveToLocal() {
    if (notesInput.value == 0) {
        alert('Write Something\nInput field is blank');
    } else {
        getNotesFromLoc();
        notes.push(notesInput.value);
        // local_notes[0].push(notesInput.value);
        // console.log(local_notes[0]);
        let newList = document.createElement('li');
        newList.setAttribute('id', 'notes');
        newList.innerHTML = notesInput.value + ' <i class="fa fa-close"></i>';
        list.appendChild(newList);
        localStorage.setItem('myNots', JSON.stringify(notes));
    }
    notesInput.value = '';
    // var xy = local_notes.concat(notes);
    // console.log(xy);
    // localStorage.setItem('my', JSON.stringify(notes));

}




window.onclick = e => {
    // if (e.target.className == 'fa fa-close') {
    //     e.target.parentElement.remove();
    // }
    // console.log(e.target.innerText);
}