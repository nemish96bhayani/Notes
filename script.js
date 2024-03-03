function popup(){
    const popupContainer = document.createElement("div");
    popupContainer.innerHTML = `
    <div id="popupContainer">
    <h1>New Notes</h1>
    <textarea id="note-text" placeholder="Enter your note..."></textarea>
    <div id="btn-container">
        <button id="submitBtn" onclick="createNote()">Create Note</button>
        <button id="closeBtn" onclick="closePopup()">Close</button>
    </div>
    </div>
    `;
    document.body.appendChild(popupContainer);
}

function closePopup() {
    const popupContainer = document.getElementById("popupContainer");
    if(popupContainer) {
        popupContainer.remove();
    }
}

function createNote() {
    const popupContainer = document.getElementById('popupContainer');
    if (noteText.trim() !=='') {
        const note = {
            id: new Date().getTime(),
            text: noteText
        };
        const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
        existingNotes.push(note);

        localStorage.setItem('notes', JSON.stringify(existingNotes));

        document.getElementById('note-text').value='';

        popupContainer.remove();
        displayNotes();
    }
}

