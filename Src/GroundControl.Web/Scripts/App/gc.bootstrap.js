$(document).ready(function() {

    $(document).on('button [data-action="url"]', 'click', OnUrlButtonClicked);
});

function OnUrlButtonClicked() {

    var target = $(this).data('target');
    document.load(target);
}