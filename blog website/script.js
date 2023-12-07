function loadPage(page) {
    var content = document.getElementById('content');
    switch (page) {
        case 'home':
            content.innerHTML = "<h2>Home</h2><p>Welcome to the home page!</p>";
            break;
        case 'about':
            content.innerHTML = "<h2>About</h2><p>Learn more about our blog </p>";
            break;
        case 'contact':
            content.innerHTML = "<h2>Contact</h2><p>You can contact us</p>";
            break;
        default:
            content.innerHTML = "<h2>Page Not Found</h2><p>Sorry, the page you're looking for does not exist.</p>";
    }
}