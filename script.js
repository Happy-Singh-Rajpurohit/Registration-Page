document.getElementById('dropdown-btn').addEventListener('click', function () {
    document.getElementById('dropdown').classList.toggle('active');
});

document.addEventListener('click', function (event) {
    let dropdown = document.getElementById('dropdown');
    if (!dropdown.contains(event.target) && event.target.id !== 'dropdown-btn') {
        dropdown.classList.remove('active');
    }
});

let checkboxes = document.querySelectorAll('.dropdown-content input[type="checkbox"]');
let display = document.getElementById('event-selection-display');

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        let selectedEvents = Array.from(checkboxes)
            .filter(c => c.checked)
            .map(c => c.value);
        display.innerText = selectedEvents.length ? selectedEvents.join(', ') : 'None Selected';
    });
});

function generateTeamFields(size) {
    let container = document.getElementById('team-details');
    container.innerHTML = '';
    
    for (let i = 1; i <= size; i++) {
        let required = i <= 2 ? 'required' : '';
        
        let memberFields = `
            <div class="member">
                <label>Member-${i} Full Name ${i <= 2 ? '<span class="asterisk">*</span>' : ''}</label>
                <input type="text" placeholder="Enter Member-${i} Full Name" ${required}>
                
                <label>Member-${i} Email ${i <= 2 ? '<span class="asterisk">*</span>' : ''}</label>
                <input type="email" placeholder="Enter Member-${i} Email" ${required}>
                
                <label>Member-${i} Roll Number ${i <= 2 ? '<span class="asterisk">*</span>' : ''}</label>
                <input type="text" placeholder="Enter Member-${i} Roll Number" ${required}>
                
                <label>Member-${i} Mobile Number ${i <= 2 ? '<span class="asterisk">*</span>' : ''}</label>
                <input type="tel" placeholder="Enter Member-${i} Mobile Number" ${required}>
            </div>
        `;
        container.innerHTML += memberFields;
    }
}

document.getElementById('team-size').addEventListener('change', function() {
    generateTeamFields(parseInt(this.value));
});

window.onload = function() {
    generateTeamFields(2);
};
