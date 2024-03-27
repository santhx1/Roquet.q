import Modal from './modal.js'

const modal = Modal()

const modaltitle = document.querySelector('.modal h2')
const modaldescription = document.querySelector('.modal p')
const modalbutton = document.querySelector('.modal button')


const checkbuttons = document.querySelectorAll(".actions a.check")

checkbuttons.forEach(button => {
    button.addEventListener("click", handleclick)
    
})


const deletebutton = document.querySelectorAll(".actions a.delete")

deletebutton.forEach(button => { 
    button.addEventListener("click",(event) => handleclick(event, false))
})


function  handleclick(event, check = true){
    const text = check? "Marcar como lida" : "Excluir "
    

    modaltitle.innerHTML = `${text} esta pergunta`
    modaldescription.innerHTML =`Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`

    modal.open()
}








