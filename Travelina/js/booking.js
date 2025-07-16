AOS.init();

(() => {
    'use strict';

    /* === Bootstrap client‑side validation === */
    const forms = document.querySelectorAll('.needs-validation');
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });
    /* === Intl‑Tel‑Input initialisation === */
    const phoneInputField = document.getElementById('phone');
    const iti = window.intlTelInput(phoneInputField, {
        initialCountry: 'id',
        utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@20/build/js/utils.js'
    });

    /* === Realtime summary update === */
    const destination = document.getElementById('destination');
    const checkIn = document.getElementById('checkIn');
    const checkOut = document.getElementById('checkOut');
    const guests = document.getElementById('guests');

    [destination, checkIn, checkOut, guests].forEach(el => {
        el.addEventListener('change', updateSummary);
    });

    function updateSummary() {
        // Destination title
        document.getElementById('sum-destination').textContent = destination.value || '—';

        // Dates
        const inDate = checkIn.value ? new Date(checkIn.value).toLocaleDateString() : '—';
        const outDate = checkOut.value ? new Date(checkOut.value).toLocaleDateString() : '—';
        document.getElementById('sum-dates').textContent = `${inDate} → ${outDate}`;

        // Guests
        document.getElementById('sum-guests').textContent = guests.value || '—';
    }

    /* === Demo alert on submit === */
    document.getElementById('bookingForm').addEventListener('submit', e => {
        e.preventDefault();
        if (!e.target.checkValidity()) return;

        const fullPhone = iti.getNumber();
        alert(`Thank you, ${document.getElementById('firstName').value}!\nYour booking to ${destination.value} is confirmed.\nWe’ll contact you at ${fullPhone}.`);

        // Reset form & summary for demo purposes
        e.target.reset();
        updateSummary();
        iti.reset();
    });
})();