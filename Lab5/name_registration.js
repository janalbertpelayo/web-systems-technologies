document.addEventListener("DOMContentLoaded", function() {

    const registrationForm = document.getElementById("registrationForm");
    const registrationBody = document.getElementById("registrationBody");

    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const firstName = document.getElementById('firstName');
        const lastName = document.getElementById('lastName');

        if(firstName.value == ""){
            alert("Please add first name");
            return;
        }

        if(lastName.value == ""){
            alert("Please add last name");
            return;
        }
        
        register(firstName.value, lastName.value);
        firstName.value = "";
        lastName.value = "";
    });

    registrationBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-icon')) {
            event.target.closest('tr').remove();
        } else if(event.target.classList.contains('edit-icon')){
            const currentRow = event.target.closest('tr');
            document.getElementById('firstName').value = currentRow.querySelector('td:first-child').textContent;
            document.getElementById('lastName').value = currentRow.querySelector('td:nth-child(2)').textContent;
        }
    })
   

    function register(firstName, lastName){
        const appendNewRow = document.createElement('tr');
        appendNewRow.innerHTML = '<td>'+ firstName +'</td>' +
            '<td>'+ lastName +'</td>'+
            '<td><i class="fas fa-edit edit-icon hover:text-blue-500 cursor-pointer" style="color: #3b82f6;"></i> <i class="fas fa-trash-alt delete-icon hover:text-red-500 cursor-pointer" style="color: #f04848;"></i>'+
            '</td>';

        registrationBody.appendChild(appendNewRow)
    }

});
