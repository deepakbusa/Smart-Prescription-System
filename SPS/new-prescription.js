document.addEventListener('DOMContentLoaded', function() {
    const tabletsInput = document.getElementById('selectTablets');
    const filteredTabletsList = document.getElementById('filteredTablets');
    const selectedTabletsList = document.getElementById('selectedTablets');
    const daysInput = document.getElementById('days');
    const totalCostInput = document.getElementById('totalCost');

    tabletsInput.addEventListener('input', function() {
        const searchTerm = tabletsInput.value.trim().toLowerCase();

        // Simulated list of tablets with names and prices
        const tabletsList = [
            { name: 'Paracetamol', price: 50 },
            { name: 'Ibuprofen', price: 70 },
            { name: 'Amoxicillin', price: 100 },
            { name: 'Aspirin', price: 30 },
            { name: 'Ciprofloxacin', price: 150 },
            { name: 'Metformin', price: 80 }
        ];

        // Clear previous results
        filteredTabletsList.innerHTML = '';

        // Filter tablets by name
        const filteredTablets = tabletsList.filter(tablet => {
            return tablet.name.toLowerCase().includes(searchTerm);
        });

        // Display filtered tablets and allow selection
        filteredTablets.forEach(tablet => {
            const li = document.createElement('li');
            li.textContent = `${tablet.name} - ₹${tablet.price}`;
            li.classList.add('tablet-item');

            // Add 'Add' button to each filtered tablet
            const addButton = document.createElement('button');
            addButton.textContent = 'Add'; // Set button text
            addButton.classList.add('add-button'); // Add class for styling
            addButton.addEventListener('click', function() {
                addSelectedTablet(tablet.name, tablet.price);
                tabletsInput.value = '';
                filteredTabletsList.innerHTML = '';
            });
            li.appendChild(addButton);

            filteredTabletsList.appendChild(li);
        });

        // Show the filtered list only if there's a search term
        filteredTabletsList.style.display = searchTerm ? 'block' : 'none';
    });

    // Function to add selected tablet
    function addSelectedTablet(tabletName, tabletPrice) {
        const li = document.createElement('li');
        li.textContent = `${tabletName} - ₹${tabletPrice}`;
        li.classList.add('tablet-item');

        // Add 'Remove' button to each selected tablet
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('remove-button');
        removeButton.addEventListener('click', function() {
            li.remove();
            updateTotalCost();
        });
        li.appendChild(removeButton);

        selectedTabletsList.appendChild(li);

        // Update total cost
        updateTotalCost();
    }

    // Event listener for days input
    daysInput.addEventListener('input', function() {
        updateTotalCost();
    });

    // Function to update total cost
    function updateTotalCost() {
        const selectedTablets = selectedTabletsList.getElementsByTagName('li');
        let totalCost = 0;

        Array.from(selectedTablets).forEach(tablet => {
            const price = parseInt(tablet.textContent.split('₹')[1]); // Extract price
            totalCost += price;
        });

        const days = parseInt(daysInput.value) || 1; // Get number of days (default to 1 if empty or invalid)
        const totalCostWithDays = totalCost * days;

        totalCostInput.value = `₹${totalCostWithDays}`;
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('prescriptionForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        generatePrescriptionBill();
    });

    function generatePrescriptionBill() {
        // Get form values
        const patientName = document.getElementById('patientName').value;
        const patientNumber = document.getElementById('patientNumber').value;
        const roomNumber = document.getElementById('roomNumber').value;
        const selectedTablets = Array.from(document.querySelectorAll('#selectedTablets li')).map(li => li.textContent.trim());
        const days = document.getElementById('days').value;
        const totalCost = document.getElementById('totalCost').value;
        const paymentMethod = document.getElementById('paymentMethod').value;
        const doctorName = document.getElementById('doctorName').value;
        const doctorEmail = document.getElementById('doctorEmail').value;
        const clinicName = document.getElementById('clinicName').value;

        // Store data in session storage for use in prescription-success.html
        sessionStorage.setItem('patientName', patientName);
        sessionStorage.setItem('patientNumber', patientNumber);
        sessionStorage.setItem('roomNumber', roomNumber);
        sessionStorage.setItem('selectedTablets', JSON.stringify(selectedTablets));
        sessionStorage.setItem('days', days);
        sessionStorage.setItem('totalCost', totalCost);
        sessionStorage.setItem('paymentMethod', paymentMethod);
        sessionStorage.setItem('doctorName', doctorName);
        sessionStorage.setItem('doctorEmail', doctorEmail);
        sessionStorage.setItem('clinicName', clinicName);

        // Redirect to prescription-success.html
        window.location.href = 'prescription-success.html';
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const prescriptionForm = document.getElementById('prescriptionForm');

    prescriptionForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Retrieve form data
        const patientName = document.getElementById('patientName').value;
        const doctorName = document.getElementById('doctorName').value;
        const date = new Date().toLocaleDateString(); // Assuming current date
        const status = 'Pending'; // Initial status

        // Generate unique ID (for demo purposes, replace with your actual ID generation)
        const id = Math.floor(Math.random() * 1000) + 1;

        // Construct prescription object
        const prescription = {
            id: id,
            patientName: patientName,
            doctorName: doctorName,
            date: date,
            status: status
        };

        // Store prescription in sessionStorage (or localStorage)
        storePrescription(prescription);

        // Redirect to prescription success page
        window.location.href = 'prescription-success.html';
    });

    function storePrescription(prescription) {
        // Retrieve existing prescriptions from storage or initialize if none
        let prescriptions = JSON.parse(sessionStorage.getItem('prescriptions')) || [];

        // Add new prescription to the list
        prescriptions.push(prescription);

        // Save updated prescriptions back to storage
        sessionStorage.setItem('prescriptions', JSON.stringify(prescriptions));
    }
});
