document.addEventListener('DOMContentLoaded', function() {
    // Retrieve orders from sessionStorage
    const orders = JSON.parse(sessionStorage.getItem('prescriptions')) || [];

    // Reference to the table body where orders will be displayed
    const currentOrdersTableBody = document.getElementById('currentOrdersTableBody');

    // Function to render orders
    function renderOrders() {
        currentOrdersTableBody.innerHTML = ''; // Clear existing content

        orders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.patientName}</td>
                <td>${order.patientNumber}</td>
                <td>${order.roomNumber}</td>
                <td>${order.selectedTablets.join(', ')}</td>
                <td>${order.days}</td>
                <td>${order.totalCost}</td>
                <td>${order.paymentMethod}</td>
                <td>${order.doctorName}</td>
                <td>${order.doctorEmail}</td>
                <td>${order.clinicName}</td>
                <td>${order.date}</td>
                <td>${order.status}</td>
                <td><button class="view-details" data-order-id="${order.id}">View Details</button></td>
            `;
            currentOrdersTableBody.appendChild(row);
        });
    }

    // Initial render of orders
    renderOrders();

    // Handle click on "View Details" button
    currentOrdersTableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('view-details')) {
            const orderId = event.target.getAttribute('data-order-id');

            // Redirect to order details page
            window.location.href = `order-details.html?id=${orderId}`;
        }
    });
});
