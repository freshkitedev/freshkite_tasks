document.getElementById('submitBtn').addEventListener('click', function () {
    const fields = ['firstname', 'lastname', 'email'];
    let allValid = true;

    fields.forEach(field => {
        const input = document.getElementById(field);
        const existingError = input.nextElementSibling;
        if (input.value.trim() == "") {
            if (!existingError || !existingError.classList.contains('error')) {
                const errorSpan = document.createElement('span');
                errorSpan.classList.add('error');
                errorSpan.textContent = `${field} is required`;
                input.insertAdjacentElement('afterend', errorSpan);
            }
            allValid = false;
        } else {
            if (existingError && existingError.classList.contains('error')) {
                existingError.remove();
            }
        }
    });

    if (allValid) {
        createTable();
    } else {
        document.getElementById('tableContainer').innerHTML = "";
    }
});

document.getElementById('cancelBtn').addEventListener('click', function () {
    const form = document.getElementById('userForm');
    form.reset();
    document.querySelectorAll('.error').forEach(errorSpan => errorSpan.remove());
    document.getElementById('tableContainer').innerHTML = '';
});

function createTable() {
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();

    const optionlist = document.querySelectorAll('input[name="options"]:checked');
    const nodeArray = Array.from(optionlist);
    const checkboxes = nodeArray.map(element => element.value)
    console.log(optionlist, nodeArray, checkboxes);
    

    const gender = document.querySelector('input[name="gender"]:checked')?.value || '';
    const comment = document.getElementById('comment').value.trim();
    const dropdown = document.getElementById('dropdown').value;

    const tableHTML = `
        <table>
            <tr><th>First Name</th><td>${firstname}</td></tr>
            <tr><th>Last Name</th><td>${lastname}</td></tr>
            <tr><th>Email</th><td>${email}</td></tr>
            <tr><th>Options</th><td>${checkboxes.join(': ')}</td></tr>
            <tr><th>Gender</th><td>${gender}</td></tr>
            <tr><th>Comment</th><td>${comment}</td></tr>
            <tr><th>Dropdown</th><td>${dropdown}</td></tr>
        </table>
    `;

    document.getElementById('tableContainer').innerHTML = tableHTML;
}