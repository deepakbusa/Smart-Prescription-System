document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logout').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'pharmacy-login.html'; // Navigate to pharmacy login page
    });

    document.getElementById('tabletsList').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'tablets-list.html'; // Navigate to tablets list page
    });

    document.getElementById('viewOrders').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.href = 'orders-list.html'; // Navigate to orders list page
    });
});
