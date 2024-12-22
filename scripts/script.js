$(document).ready(function() {
    // Load header and footer
    $("#header-placeholder").load("header.html");
    $("#footer-placeholder").load("footer.html");
    
    // Contact form handling
    $(".contact-form").on("submit", function(e) {
        e.preventDefault();
        alert("Form submitted!");
    });
});

function toggleHighlight(element) {
    $(element).css("backgroundColor", 
        $(element).css("backgroundColor") === "yellow" ? "white" : "yellow"
    );
}