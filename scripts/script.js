$(document).ready(function() {
    // Load header and footer
    $("#header-placeholder").load("header.html");
    $("#footer-placeholder").load("footer.html");
    
    // Bio image rotation
    const aboutImage = $("#bio img");
    if(aboutImage.length) {
        setInterval(() => {
            aboutImage.css("transform", 
                aboutImage.css("transform") === "rotate(10deg)" 
                    ? "rotate(0deg)" 
                    : "rotate(10deg)"
            );
        }, 200);
    }
    
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