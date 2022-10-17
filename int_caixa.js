function download() {
    const item = document.querySelector(".container");

    var opt = {
        margin: 1,
        filename: "fechamento.pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "letter", orientation: "portrait"},
    };

    html2pdf().set(opt).from(item).save();

    window.alert('Salvo e enviado com suscesso!')
}