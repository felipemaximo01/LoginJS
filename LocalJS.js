function addLocal(){
    let dados = [
        {"id":1,"login":"will","senha":1234},
        {"id":2,"login":"bob","senha":2222},
        {"id":3,"login":"egon","senha":3333}
    ];

    localStorage.setItem("ds",JSON.stringify(dados));
}
function login(){
    let n = localStorage.getItem("ds");

    let dados = JSON.parse(n)

    let lg = document.querySelector("#login").value
    let sn = document.querySelector("#senha").value
    for(let i = 0;i < dados.length;i++){
        if(lg == dados[i].login && sn == dados[i].senha){

            sessionStorage.setItem("user",lg)
            let pag = "doces.html"
            window.open(pag)
            break
        }
    }
}

function usuario(){
    let nome = sessionStorage.getItem("user");
    console.log(nome)
    document.getElementById("nm").innerHTML = nome;
}

function apagar(){
    //localStorage.removeItem('ds');

    sessionStorage.removeItem("user")
    document.open("index.html");
}