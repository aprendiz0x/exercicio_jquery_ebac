$(document).ready(function() {

    $('form').on('submit', function(e) {

        e.preventDefault();


        const novaTarefa = $('#tarefa').val();
        const novaLista = $(`<li> ${novaTarefa} </li>`);
        $(novaLista).appendTo('ul');

        $('#tarefa').val('');

    });

    $("ul").on('click', 'li', function() {
        $(this).css("text-decoration", "line-through");
    });


});