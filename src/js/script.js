let lembretes = [];

function cadastrar() {

    let lembret = $("#inputLembrete").val();
    let data = $("#data").val();
    let importante = $("#checkImport").is(':checked')

    console.log(importante);

    if (lembret != "" && data != "") {

        let dataFinall = new Date();

        if (new Date(data) < dataFinall) {

            alerta("Erro", "data nao pode ser inferior ao dia de hoje ", "error")

        } else {
            lembretes.push({
                lembre: lembret,
                datta: data,
                check: importante

            })

            lembretes.forEach(ele => {
                console.log(ele.check);
            })

            $("#inputLembrete").val("")
            mostrarLembretes();
            $("#inputLembrete").val("")
            $("#data").val("")
            //limpar o check depois de enviar
            $("#checkImport").prop('checked', false)
        }

    } else {
        alerta("erro", "preencha o lembrete e selecione uma data ", "error")
    }



}


function mostrarLembretes() {
    const res = $(".res");

    let msg = "";


    lembretes.forEach((e, index) => {

        if (e.check == true) {
            msg += "<li>"
            msg += `${e.lembre} <button class="btn btn-warning" onclick="detalhes(${index})"> ver </button>`;

            msg += "</li>"

        } else {

            msg += "<li>"
            msg += `${e.lembre} <button class="btn btn-primary" onclick="detalhes(${index})"> ver </button>`;

            msg += "</li>"
        }


    })


    res.html(msg);


}



function detalhes(dado) {
    let guard = lembretes[dado];

    if (guard.check) {
        $("#tituloDetalhe").html("Lembrete importante")
    } else {
        $("#tituloDetalhe").html("Lembrete")
    }

    $("#mostrarModal").modal('show')
    $("#resData").html(guard.datta)

}


function mostrarImpostantes() {

    $("#mostrarModalImport").modal("show");

    let msg = '';

    lembretes.forEach(elem => {
        if (elem.check == true) {
            msg += "<li>"
            msg += `${elem.lembre} `;

            msg += "</li>"
        }
    })

    $("#lembretesBell").html(msg);


}







function alerta(titulo, msg, icon) {

    Swal.fire({
        title: titulo,
        text: msg,
        icon: icon
    });

}    