let lembretes = [];

function cadastrar() {

    /*  lembretes.push({
         if()
         lembret: $("#inputLembrete").val(),
         data: $("#data").val()
 
     }) */

    let lembret = $("#inputLembrete").val()
    let data = $("#data").val()

    if (lembret != "" && data != "") {
        lembretes.push({
            lembre: lembret,
            datta: data
        })
        $("#inputLembrete").val("")
        mostrarLembretes();

    } else {
        alert("preencha o lembrete e selecione uma data ")
    }


    $("#inputLembrete").val("")
    $("#data").val("")

}


function mostrarLembretes() {
    const res = $(".res");

    let msg = "";

    let flag = false;
    let dataFinal = new Date();


    lembretes.forEach((e, index) => {
        console.log(e.datta)
        if (new Date(e.datta) >= dataFinal ) {

            flag = true;

            msg += "<li>"
            msg += `${e.lembre} <button class="btn btn-primary" onclick="detalhes(${index})"> ver </button>`;

            msg += "</li>"

        }

    })

    if(!flag){
        alert("data nao pode ser inferior ao dia de hoje ")
    }

     res.html(msg);    


}



function detalhes(dado) {
    let guard = lembretes[dado];

    $("#mostrarModal").modal('show')

    $("#resData").html(guard.datta)

}