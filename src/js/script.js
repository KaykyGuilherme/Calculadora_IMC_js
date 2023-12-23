const bnt = document.querySelector("#bnt");

bnt.addEventListener('click', () =>{
    let nome_box = document.querySelector("#nome")
    let altura_box = document.querySelector("#altura")
    let peso_box = document.querySelector("#peso")

    const nome = nome_box.value
    const altura = altura_box.value
    const peso = peso_box.value

    if(nome == "" || altura == "" || peso == ""){
        alert("[ERRO] PREENCHA TODOS OS DADOS")
    }else{
        nome_box.value = null
        altura_box.value = null
        peso_box.value = null 
    
        calcularIMG(nome, altura, peso)}
})

function calcularIMG(nome, altura, peso){
    let res = ""
    const img = document.querySelector(".temp")
    img.style.display = "none"
    const imc = peso / (altura*2)

    if(imc < 18.5){
        res = "magreza"
    }else if(imc <= 24.9){
        res = "normal"
    }else if(imc <= 29.99){
        res = "sobrepeso"
    }else if(imc <= 39.9){
        res = "obesidade"
    }else{
        res= "obesidade grave"
    }
    console.log(`ALTURA: ${altura} PESO: ${peso} IMC: ${imc}`)
    console.log(res)

    mostrar(res, imc, nome)
}

let mostrar_DIV = document.createElement("div");
const user_IMC = document.querySelector(".user_IMC")
user_IMC.appendChild(mostrar_DIV)

function mostrar(res, imc, nome){
    if(!user_IMC.classList.contains("active")){
        user_IMC.classList.add("active")
    }

    mostrar_DIV.innerHTML = `<p>${nome} seu IMC é: ${imc.toFixed(2)} então você esta no nivel <span>${res}</span></p>`

}