const addBtn = document.querySelector('button');
const notesContainer = document.querySelector('div.notes-container');

getLocalStorage();

addBtn.addEventListener('click', () => addNote())

function addNote(text = '') {
    const newNote = document.createElement('div');
    newNote.className = "note";
    newNote.innerHTML = `<nav class="panel">
                            <i class="fa fa-save hidden"></i>
                            <i class="fa fa-pencil-alt"></i>
                            <i class="fa fa-trash"></i>
                        </nav>
                        <textarea></textarea>
                        <div class="note-text">${text}</div>`;
    notesContainer.appendChild(newNote);

    const editBtn = newNote.querySelector('i.fa-pencil-alt');
    const saveBtn = newNote.querySelector('i.fa-save');
    const textArea = newNote.querySelector('textarea');
    const noteText = newNote.querySelector('div.note-text');
    const deleteBtn = newNote.querySelector('i.fa-trash');

    editBtn.addEventListener('click', (e) => {
        textArea.value = noteText.textContent;
        newNote.classList.add('edited');
    })

    saveBtn.addEventListener('click', (e) => {
        noteText.textContent = textArea.value;
        newNote.classList.remove('edited');
        setLocalStorage();
    })

    deleteBtn.addEventListener('click', (e) => {
        newNote.remove();
        setLocalStorage();
    })

    setLocalStorage();
}

function setLocalStorage() {
    const notes = document.querySelectorAll('div.note-text');
    const notesTexts = [];
    notes.forEach(note => notesTexts.push(note.textContent));
    localStorage.setItem('notes', JSON.stringify(notesTexts));
}

function getLocalStorage() {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) notes.forEach(note => addNote(note));
}