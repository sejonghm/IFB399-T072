// JavaScript for homepage interactions

// Add event listener for search button
document.querySelector('.search-bar button').addEventListener('click', function() {
    let searchQuery = document.querySelector('.search-bar input').value;
    if (searchQuery) {
        alert('Searching for: ' + searchQuery);
        // Redirect to search results page (if you have one)
        window.location.href = '/search?query=' + encodeURIComponent(searchQuery);
    } else {
        alert('Please enter a search query.');
    }
});

// Initialize Bootstrap carousel
let carousel = document.querySelector('#carouselExampleAutoplaying');
let carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 3000,  // 3 seconds interval between slides
    ride: 'carousel'
});

// You can add more JavaScript functionality depending on the features you need
