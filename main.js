  const addButton =   document.getElementById('add');

addNewNote  = (text ='') =>{
     const note = document.createElement('div');
     note.classList.add('note');

     const htmlData = ` <div class="operation">                  
     <button class="edit"> <i class="fas fa-edit"></i> </button>
      <button class="delete"> <i class="fas fa-trash-alt"></i> </button>
  </div>
  <div class="main ${text ? "" : "hidden"}"> </div> 
  <textarea class="${text ? "hidden" : ""}"> </textarea>
      `;       

      note.insertAdjacentHTML('afterbegin',htmlData);
      document.body.appendChild(note);

      const editButton = note.querySelector('.edit');
      const delButton = note.querySelector('.delete');
      const mainButton = note.querySelector('.main');
      const textarea = note.querySelector('textarea');

      delButton.addEventListener('click', ()=>{
        note.remove();
      })

      editButton.addEventListener('click', ()=>{
             mainButton.classList.toggle('hidden') 
             textarea.classList.toggle('hidden') 

            })
            editButton.addEventListener('change', (event)=>{
                const value =  event.target.value;
                console.log(value);
                  mainButton.innerHTML = value;

            })
   
        }



  addButton.addEventListener('click', ()=> addNewNote() );