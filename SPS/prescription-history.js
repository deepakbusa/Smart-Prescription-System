document.addEventListener('DOMContentLoaded', function() {
    // Retrieve prescriptions from sessionStorage (or localStorage)
    const prescriptions = JSON.parse(sessionStorage.getItem('prescriptions')) || [];

    // Reference to the prescription list container
    const prescriptionList = document.getElementById('prescriptionList');

    // Function to render prescriptions
    function renderPrescriptions() {
        prescriptionList.innerHTML = ''; // Clear existing content

        prescriptions.forEach(prescription => {
            const prescriptionItem = document.createElement('div');
            prescriptionItem.classList.add('prescription-item');
            
            const prescriptionDetails = `
                <p><strong>Patient Name:</strong> ${prescription.patientName}</p>
                <p><strong>Doctor Name:</strong> ${prescription.doctorName}</p>
                <p><strong>Date:</strong> ${prescription.date}</p>
                <p><strong>Status:</strong> ${prescription.status}</p>
                <button class="view-details" data-prescription-id="${prescription.id}">View Details</button>
            `;
            
            prescriptionItem.innerHTML = prescriptionDetails;
            prescriptionList.appendChild(prescriptionItem);
        });
    }

    // Initial render of prescriptions
    renderPrescriptions();

    // Handle click on "View Details" button
    prescriptionList.addEventListener('click', function(event) {
        if (event.target.classList.contains('view-details')) {
            const prescriptionId = event.target.getAttribute('data-prescription-id');

            // Redirect to prescription success page
            window.location.href = `prescription-success.html?id=${prescriptionId}`;
        }
    });
});
