$(document).ready(function () {
    $("#search").keyup(function () {
        // Search text
        var text = $(this).val();

        // Hide all content class element
        $(".box").hide();
		// $(".filer-card").hide();

        // Search
        $('.box .title:contains("' + text + '")')
            .closest(".box")
            .show();
        $('.box .name-description:contains("' + text + '")')
            .closest(".box")
            .show();
    });
});

$.expr[":"].contains = $.expr.createPseudo(function (arg) {
    return function (elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    };
});
