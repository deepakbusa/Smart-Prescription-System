document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from sessionStorage
    const patientName = sessionStorage.getItem('patientName');
    const patientNumber = sessionStorage.getItem('patientNumber');
    const roomNumber = sessionStorage.getItem('roomNumber');
    const selectedTablets = JSON.parse(sessionStorage.getItem('selectedTablets'));
    const days = sessionStorage.getItem('days');
    const totalCost = sessionStorage.getItem('totalCost');
    const paymentMethod = sessionStorage.getItem('paymentMethod');
    const doctorName = sessionStorage.getItem('doctorName');
    const doctorEmail = sessionStorage.getItem('doctorEmail');
    const clinicName = sessionStorage.getItem('clinicName');

    // Populate HTML elements with fetched data
    document.getElementById('patientName').textContent = patientName;
    document.getElementById('patientName').style.color = '#28a745';

    document.getElementById('patientNumber').textContent = patientNumber;
    document.getElementById('patientNumber').style.color = '#28a745';

    document.getElementById('roomNumber').textContent = roomNumber;
    document.getElementById('roomNumber').style.color = '#28a745';

    populateSelectedTablets(selectedTablets);

    document.getElementById('days').textContent = days;
    document.getElementById('days').style.color = '#28a745';

    document.getElementById('totalCost').textContent = totalCost;
    document.getElementById('totalCost').style.color = '#28a745';

    document.getElementById('paymentMethod').textContent = paymentMethod;
    document.getElementById('paymentMethod').style.color = '#28a745';

    document.getElementById('doctorName').textContent = doctorName;
    document.getElementById('doctorName').style.color = '#28a745';

    document.getElementById('doctorEmail').textContent = doctorEmail;
    document.getElementById('doctorEmail').style.color = '#28a745';

    document.getElementById('clinicName').textContent = clinicName;
    document.getElementById('clinicName').style.color = '#28a745';

    function populateSelectedTablets(tablets) {
        const selectedTabletsList = document.getElementById('selectedTablets');
        selectedTabletsList.innerHTML = '';
    
        tablets.forEach(tablet => {
            // Assuming the format is "tablet name remove", we remove the " remove" part
            const cleanedTabletName = tablet.replace('Remove', '');
            const li = document.createElement('li');
            li.textContent = cleanedTabletName;
            li.style.color = '#28a745'; // Set color for each tablet list item
            selectedTabletsList.appendChild(li);
        });
    }
    

    // Function for viewing prescription status (placeholder alert)
    function viewPrescriptionStatus() {
        window.location.href = 'prescription-status.html';// Open the prescription status page in a new tab
    }

    // Function for moving to dashboard
    function moveToDashboard() {
        window.location.href = 'doctor-dashboard.html'; // Replace with actual dashboard URL
    }

    // Function for downloading the bill
    function downloadBill() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Add title
        doc.setFontSize(16);
        doc.setTextColor('#007bff');
        doc.text('Prescription Details', 20, 20);

        // Add patient details
        doc.setFontSize(12);
        doc.setTextColor('#333');
        doc.text(`Patient Name: ${patientName}`, 20, 30);
        doc.text(`Patient Number: ${patientNumber}`, 20, 40);
        doc.text(`Room Number: ${roomNumber}`, 20, 50);

        // Add selected tablets
        doc.setFont('helvetica', 'bold');
        doc.text('Selected Tablets:', 20, 60);
        doc.setFont('helvetica', 'normal');
        let startY = 70;
        selectedTablets.forEach((tablet, index) => {
            doc.text(`${tablet}`, 25, startY + index * 10);
        });

        // Add days, total cost, payment method
        doc.text(`Days: ${days}`, 20, startY + selectedTablets.length * 10 + 10);
        doc.text(`Total Cost: ${totalCost}`, 20, startY + selectedTablets.length * 10 + 20);
        doc.text(`Payment Method: ${paymentMethod}`, 20, startY + selectedTablets.length * 10 + 30);

        // Add doctor's information
        doc.text(`Doctor's Name: ${doctorName}`, 20, startY + selectedTablets.length * 10 + 40);
        doc.text(`Doctor's Email: ${doctorEmail}`, 20, startY + selectedTablets.length * 10 + 50);
        doc.text(`Clinic Name: ${clinicName}`, 20, startY + selectedTablets.length * 10 + 60);

        // Add payment success logo
        doc.addImage('payment-success.png', 'PNG', 160, startY + selectedTablets.length * 10 + 70, 40, 40);

        // Add horizontal line
        doc.setDrawColor(0, 0, 0);
        doc.line(20, startY + selectedTablets.length * 20 + 100, 190, startY + selectedTablets.length * 20 + 100);
        

        // Save the PDF
        doc.save('Prescription_Bill.pdf');
    }

    // Attach click event listeners to action buttons
    document.getElementById('viewStatusButton').addEventListener('click', viewPrescriptionStatus);
    document.getElementById('dashboardButton').addEventListener('click', moveToDashboard);
    document.getElementById('downloadButton').addEventListener('click', downloadBill);
});
