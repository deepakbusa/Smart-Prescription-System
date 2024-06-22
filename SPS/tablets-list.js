document.addEventListener('DOMContentLoaded', function() {
    const tabletsTableBody = document.getElementById('tabletsTableBody');
    const modal = document.getElementById('tabletDetailsModal');
    const closeModal = document.querySelector('.close-btn');

    // Load tablets data from local storage
    let tablets = JSON.parse(localStorage.getItem('tablets')) || [];

    // Function to populate tablets table
    function populateTabletsTable() {
        tabletsTableBody.innerHTML = ''; // Clear existing table data
        tablets.forEach((tablet, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${tablet.name}</td>
                <td>${tablet.price}</td>
                <td>${tablet.packets}</td>
                <td><button class="view-more-btn" data-index="${index}">View More</button></td>
            `;
            tabletsTableBody.appendChild(row);
        });

        // Add event listeners to view more buttons
        document.querySelectorAll('.view-more-btn').forEach(button => {
            button.addEventListener('click', function() {
                const index = this.getAttribute('data-index');
                const tablet = tablets[index];

                // Set data in modal
                document.getElementById('modalTabletName').innerText = tablet.name;
                document.getElementById('modalPrice').innerText = tablet.price;
                document.getElementById('modalPackets').innerText = tablet.packets;
                document.getElementById('modalDetails').innerText = "Example details about " + tablet.name;

                // Show modal
                modal.style.display = 'flex';
            });
        });
    }

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Populate tablets table on load
    populateTabletsTable();
});
