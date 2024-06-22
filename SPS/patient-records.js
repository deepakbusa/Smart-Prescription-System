document.addEventListener('DOMContentLoaded', function() {
    const attendedPatients = [
        { id: 1, name: 'రాము', age: 30, gender: 'Male', details: 'Problem: Fever\nRoom No: 101\nGiven Tablets: Paracetamol\nCurrent Condition: Stable\nNext Visit: 25th June 2024' },
        { id: 2, name: 'సీత', age: 25, gender: 'Female', details: 'Problem: Cold\nRoom No: 102\nGiven Tablets: Antihistamine\nCurrent Condition: Improving\nNext Visit: 28th June 2024' },
        { id: 3, name: 'లక్ష్మణ్', age: 40, gender: 'Male', details: 'Problem: Diabetes\nRoom No: 103\nGiven Tablets: Insulin\nCurrent Condition: Stable\nNext Visit: 1st July 2024' }
    ];

    const upcomingPatients = [
        { id: 4, name: 'సుమన్', age: 35, gender: 'Male', details: 'Problem: Hypertension\nTime of Appointment: 24th June 2024, 10:00 AM' },
        { id: 5, name: 'రాధ', age: 28, gender: 'Female', details: 'Problem: Asthma\nTime of Appointment: 24th June 2024, 11:00 AM' },
        { id: 6, name: 'కృష్ణ', age: 50, gender: 'Male', details: 'Problem: Arthritis\nTime of Appointment: 24th June 2024, 12:00 PM' }
    ];

    const attendedPatientsTableBody = document.getElementById('attendedPatientsTableBody');
    const upcomingPatientsTableBody = document.getElementById('upcomingPatientsTableBody');

    attendedPatients.forEach(patient => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td><a href="#" class="view-more-btn" data-details="${patient.details.replace(/\n/g, '<br>')}">View More</a></td>
        `;
        attendedPatientsTableBody.appendChild(row);
    });

    upcomingPatients.forEach(patient => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${patient.id}</td>
            <td>${patient.name}</td>
            <td>${patient.age}</td>
            <td>${patient.gender}</td>
            <td><a href="#" class="view-more-btn" data-details="${patient.details.replace(/\n/g, '<br>')}">View More</a></td>
        `;
        upcomingPatientsTableBody.appendChild(row);
    });

    document.querySelectorAll('.view-more-btn').forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const details = this.getAttribute('data-details');
            showAlert(details);
        });
    });

    function showAlert(details) {
        // Create alert box container
        const alertBox = document.createElement('div');
        alertBox.className = 'alert-box';

        // Create alert content
        const alertContent = document.createElement('div');
        alertContent.className = 'alert-content';

        // Close button
        const closeButton = document.createElement('span');
        closeButton.className = 'close-btn';
        closeButton.innerHTML = '&times;';
        closeButton.onclick = () => alertBox.remove();

        // Add details and close button to alert content
        alertContent.innerHTML = `<p>${details}</p>`;
        alertContent.appendChild(closeButton);

        // Add alert content to alert box
        alertBox.appendChild(alertContent);

        // Append alert box to body
        document.body.appendChild(alertBox);
    }
});

