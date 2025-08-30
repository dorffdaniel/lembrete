let lembretes = [];

function cadastrar() {

    let lembret = $("#inputLembrete").val()
    let data = $("#data").val()

    if (lembret != "" && data != "") {

        let dataFinall = new Date();

        if (new Date(data) < dataFinall) {

            alerta("Erro", "data nao pode ser inferior ao dia de hoje ", "error")
        } else {
            lembretes.push({
                lembre: lembret,
                datta: data
            })
            $("#inputLembrete").val("")
            mostrarLembretes();
        }

    } else {
        alerta("erro", "preencha o lembrete e selecione uma data ", "error")
        mostrarLembretes();
    }


    $("#inputLembrete").val("")
    $("#data").val("")

}


function mostrarLembretes() {
    const res = $(".res");

    let msg = "";

    lembretes.forEach((e, index) => {

        msg += "<li>"
        msg += `${e.lembre} <button class="btn btn-primary" onclick="detalhes(${index})"> ver </button>`;

        msg += "</li>"


    })


    res.html(msg);


}



function detalhes(dado) {
    let guard = lembretes[dado];

    $("#mostrarModal").modal('show')

    $("#resData").html(guard.datta)

}


function alerta(titulo, msg, icon) {

    Swal.fire({
        title: titulo,
        text: msg,
        icon: icon
    });

}   