
document.addEventListener('DOMContentLoaded', function() {
    // Redirect to prescription history page when "History of Prescriptions" link is clicked
    document.getElementById('historyPrescriptions').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Navigate to prescription history page
        window.location.href = 'prescription-history.html';
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Redirect to prescription history page when "History of Prescriptions" link is clicked
    document.getElementById('logout').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Navigate to prescription history page
        window.location.href = 'doctor-login.html';
    });
});
