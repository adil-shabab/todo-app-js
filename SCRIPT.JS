let addbtn = document.querySelector('.add-btn')
addbtn.addEventListener('click', additems)




function additems(){
    let list = document.querySelector('.list')
    let input = document.getElementById('input')
    let inputdata = document.getElementById('input').value;
    

    let li = document.createElement('li');

    let span = document.createElement('span')
    li.appendChild(span)
    span.innerText = inputdata

    li.classList.add('list-item')
    li.style.cssText = 'animation-name: slide';
    list.appendChild(li)
    input.value = "";
    input.focus();



    let deletebtn = document.createElement('i');
    deletebtn.classList.add('fa-solid', 'fa-trash');
    deletebtn.classList.add('icon')
    li.appendChild(deletebtn);


    let editbtn = document.createElement('i');
    editbtn.classList.add('fa-solid','fa-pen-to-square','icons');
    li.appendChild(editbtn)
    


li.addEventListener('click', deletefunction)
function deletefunction(Event) {
    if(Event.target.classList[1] === 'fa-trash'){
        let item = Event.target.parentElement;
        item.classList.add('slideOut');
        item.addEventListener('transitionend', function(){
            item.remove();
        })
        
    }
}



li.addEventListener('click', editfunction)
function editfunction(Event){
    if(Event.target.classList[1] === 'fa-pen-to-square'){
        item = Event.target.parentElement
        let editedValue = prompt ("please edit your item")
        span.innerText = editedValue
    }
}
}

