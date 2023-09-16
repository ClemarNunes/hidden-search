const search = document.querySelector('.search')
const btn = document.querySelector('.btn')
const input = document.querySelector('.input')


// Botão do tipo toggle, switch (do inglês: interruptor), ou comutador, é um elemento de interação
// em uma interface gráfica de software. Ao ser pressionado pelo usuário, a funcionalidade associada
//  ao botão é ativada, e o botão reflete isto visualmente, por parecer pressionado. Se pressionado
//   novamente pelo usuário, a funcionalidade associada ao botão é desativada, e isto se reflete 
//   novamente no botão, que volta à seu estado inicial.


btn.addEventListener('click', ()=>{
    search.classList.toggle('active')
    input.focus()
})


//função focus serve para quando eu clicar no botão, ele ja vai focar(pressioanr) o 
//campo do input