//criar referencia aos elementos da página
//const 
//var 
//let 

const frm = document.querySelector("form");
const resp1 = document.querySelector ("h3");
const resp2 = document.querySelector ("h4");

//criar um ouvinte para o evento submit

frm.addEventListener("submit", (e) => {
    e.preventDefault (); //nao envia o formulario
    
    const nome = frm.inNome.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);

    const media = (nota1+nota2)/2;

    console.log (media);

//mostrar na tela
    resp1.innerText = `A média das notas é ${media.toFixed(1)}`

//Criar as condições
if (media >= 7 ){
    resp2.innerText = `Parabéns ${nome}! Você foi aprovado(a)`;
    resp2.style.color = "blue";
} else if(media >=4 ){
    resp2.innerText = `Atenção ${nome}! Você ficou de exame`;
    resp2.style.color = "green";
} else {
    resp2.innerText = `Ops ${nome}! Você foi reprovado(a)`;
    resp2.style.color = "red";
}
})

