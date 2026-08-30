const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

// Add New Note
addBtn.addEventListener("click", () => {
    addNote();
});

// Create Note
function addNote(text = "") {

    const note = document.createElement("div");

    note.classList.add("note");

    note.innerHTML = `
        <div class="tool">
            <i class="save fas fa-save" title="Save"></i>
            <i class="trash fas fa-trash" title="Delete"></i>
        </div>

        <textarea>${text}</textarea>
    `;

    const trashIcon = note.querySelector(".trash");
    const saveIcon = note.querySelector(".save");
    const textarea = note.querySelector("textarea");

    // Delete Note
    trashIcon.addEventListener("click", () => {
    alert("Trash clicked");
    note.remove();
    saveNote();
});

    // Save Button
    saveIcon.addEventListener("click", () => {
    alert("Save clicked");
    saveNote();
});

    // Auto Save
    textarea.addEventListener("input", saveNote);

    main.appendChild(note);
}

// Save Notes
function saveNote(){

    const notes = document.querySelectorAll(".note textarea");

    const data = [];

    notes.forEach((note)=>{
        data.push(note.value);
    });

    localStorage.setItem("notes",JSON.stringify(data));

}

// Load Notes
function loadNote(){

    const savedNotes = JSON.parse(localStorage.getItem("notes"));

    if(savedNotes && savedNotes.length > 0){

        savedNotes.forEach((noteText)=>{
            addNote(noteText);
        });

    }else{

        addNote();

    }

}

loadNote();