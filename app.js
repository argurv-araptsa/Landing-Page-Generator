// ==========================================
// 1. DOM SELECTION (Πιάνομαι με την HTML)
// ==========================================
const inputName = document.getElementById('biz-name');
const inputType = document.getElementById('biz-type');
const inputDesc = document.getElementById('biz-desc');
const previewSection = document.getElementById('preview-section');

// ==========================================
// 2. EVENT LISTENERS (Δίνω ζωή στα Inputs)
// ==========================================

// Α) ΟΤΑΝ Ο ΧΡΗΣΤΗΣ ΓΡΑΦΕΙ ΤΟ ΟΝΟΜΑ:
inputName.addEventListener('input', (e) => {
    const userValue = e.target.value;

    // 1. Ενημέρωση των τίτλων (και στα 3 layouts)
    const allTitles = document.querySelectorAll('.biz-title');
    allTitles.forEach((title) => {
        title.textContent = userValue || "Το Όνομα της Επιχείρησης";
    });

    // 2. Ενημέρωση του Logo στο Εστιατόριο (Craving Style)
    const restLogo = document.querySelector('.rest-logo');
    if (restLogo) {
        restLogo.textContent = userValue ? userValue.toUpperCase() + "*" : "CRAVING*";
    }

    // 3. Ενημέρωση του Logo στο Ξενοδοχείο (Luxury Style)
    const hotelLogo = document.querySelector('.hotel-logo');
    if (hotelLogo) {
        hotelLogo.textContent = userValue ? userValue.toUpperCase() : "HOTELLIA";
    }
});

// Β) ΟΤΑΝ Ο ΧΡΗΣΤΗΣ ΓΡΑΦΕΙ ΤΗΝ ΠΕΡΙΓΡΑΦΗ:
inputDesc.addEventListener('input', (e) => {
    const userValue = e.target.value;

    // Στοχεύουμε όλες τις κλάσεις .biz-description και στα 3 layouts
    const allDescriptions = document.querySelectorAll('.biz-description');
    allDescriptions.forEach((desc) => {
        desc.textContent = userValue || "Η περιγραφή σου εδώ...";
    });
});

// Γ) ΟΤΑΝ Ο ΧΡΗΣΤΗΣ ΑΛΛΑΖΕΙ ΤΟ DROPDOWN (ΤΥΠΟ ΕΠΙΧΕΙΡΗΣΗΣ):
inputType.addEventListener('change', (e) => {
    // Αλλάζουμε το attribute "data-theme" στο κεντρικό panel 
    // και το CSS αναλαμβάνει να κρύψει/δείξει το σωστό layout!
    previewSection.setAttribute('data-theme', e.target.value);
});