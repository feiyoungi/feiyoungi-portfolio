function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function navigateToPage(url) {
    // Fade out all images
    const images = document.querySelectorAll('.image-wrapper img');
    images.forEach(img => {
        img.style.opacity = '0';
    });

    // Navigate to the new page after the fade-out animation
    setTimeout(() => {
        window.location.href = url;
    }, 500); // Match the transition duration
}

