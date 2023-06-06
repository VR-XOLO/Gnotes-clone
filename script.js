const addButton = document.querySelector('#add');  // button reference

// local storage function defining 

const updateLS = () => {
    const textarea = document.querySelectorAll('textarea');
    // console.log(textarea);
    const notes = [];
    textarea.forEach((note) => {
        return notes.push(note.value)
    })
    localStorage.setItem('notes', JSON.stringify(notes));
    // console.log(notes);
}

const addNewNote = (text = '') => {
    const note = document.createElement('div')      // adding note <div></div> 
    note.classList.add('note');                    // adding class to note div
    htmlData = ` <div class="operation">                  
    <button class="edit"> <i class="fas fa-edit"></i> </button>
     <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
 </div>
     <div class="main ${text ? "" : "hidden"}"> </div> 
     <textarea class="${text ? "hidden" : ""}"> </textarea>
     `;                                                     // adding elements to note 
    note.insertAdjacentHTML('afterbegin', htmlData);       // position where to add 
    document.body.appendChild(note)                       // adding in html 


    // getting reference

    const editButton = note.querySelector('.edit');
    const delButton = note.querySelector('.delete');
    const mainButton = note.querySelector('.main');
    const textarea = note.querySelector('textarea');

    // delete the button

    delButton.addEventListener('click', () => {
        note.remove()
    });

    // edit button

    editButton.addEventListener('click', () => {
        mainButton.classList.toggle('hidden'); // toggle means visa versa(hidden hai to unhidden)
        textarea.classList.toggle('hidden');
        updateLS();         // for updating local storage 
    })

    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        mainButton.innerHTML = value;
        updateLS();            //local storage function
    })
  
    // getting data for Local Storage

     const notes = JSON.stringify(localStorage.getItem('notes'));
  if (notes)  {  notes.forEach((note)=> addNewNote(note)  ) };

}

addButton.addEventListener('click', () => addNewNote());