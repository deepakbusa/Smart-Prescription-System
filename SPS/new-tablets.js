document.addEventListener('DOMContentLoaded', function() {
    const mainContainer = document.getElementById('main-container');
    const successContainer = document.getElementById('success-container');
    const moveToDashboardButton = document.getElementById('moveToDashboard');
    const seeTabletsListButton = document.getElementById('seeTabletsList');
    const tabletForm = document.getElementById('tablet-form');

    // Initialize tablets array if not already present
    let tablets = JSON.parse(localStorage.getItem('tablets')) || [];

    tabletForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form values
        const tabletName = document.getElementById('tabletName').value;
        const price = document.getElementById('price').value;
        const packets = document.getElementById('packets').value;

        // Create new tablet object
        const newTablet = {
            name: tabletName,
            price: price,
            packets: packets
        };

        // Add new tablet to array and update local storage
        tablets.push(newTablet);
        localStorage.setItem('tablets', JSON.stringify(tablets));

        // Simulate form submission
        setTimeout(function() {
            mainContainer.style.display = 'none'; // Hide main container
            successContainer.style.display = 'block'; // Show success container
        }, 1000); // Change delay as needed
    });

    moveToDashboardButton.addEventListener('click', function() {
        // Redirect to dashboard
        window.location.href = 'pharmacy-dashboard.html';
    });

    seeTabletsListButton.addEventListener('click', function() {
        // Redirect to tablets list page
        window.location.href = 'tablets-list.html';
    });
});
