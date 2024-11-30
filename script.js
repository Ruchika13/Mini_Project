function importCSV(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function(e) {
        const data = e.target.result;
        const rows = data.split('\n').slice(1); // Skip header row
        const ticketsToAdd = []; // Array to collect new tickets

        rows.forEach(row => {
            const values = row.split(',');
            if (values.length < 17) return; // Skip if row doesn't have all fields

            const ticket = {
                ticketID: values[0],
                customerName: values[1],
                customerEmail: values[2],
                customerAge: values[3],
                customerGender: values[4],
                productPurchased: values[5],
                dateOfPurchase: values[6],
                ticketType: values[7],
                ticketSubject: values[8],
                ticketDescription: values[9],
                ticketStatus: values[10],
                resolution: values[11],
                ticketPriority: values[12],
                ticketChannel: values[13],
                firstResponseTime: values[14],
                timeToResolution: values[15],
                customerSatisfactionRating: values[16]
            };

            ticketsToAdd.push(ticket);
            addTicket(ticket); // Add ticket to table
        });

        // After adding all the tickets, save the updated list to localStorage
        const storedTickets = JSON.parse(localStorage.getItem('tickets') || '[]');
        console.log("Stored Tickets before update:", storedTickets); // Debugging line
        const updatedTickets = [...storedTickets, ...ticketsToAdd];
        localStorage.setItem('tickets', JSON.stringify(updatedTickets));
        console.log("Updated Tickets saved to localStorage:", updatedTickets); // Debugging line
    };
    reader.readAsText(file);
}

// Load tickets from localStorage on page load
document.addEventListener("DOMContentLoaded", function() {
    const storedTickets = JSON.parse(localStorage.getItem('tickets') || '[]');
    console.log("Tickets loaded from localStorage:", storedTickets); // Debugging line
    storedTickets.forEach(ticket => {
        addTicket(ticket); // Add stored tickets to table
    });
});

function addTicket(ticket) {
    const tableBody = document.querySelector("#ticketsTable tbody");
    const row = createRow(ticket);
    tableBody.appendChild(row);
}

function createRow(ticket) {
    const row = document.createElement("tr");
    row.dataset.id = ticket.ticketID || new Date().getTime().toString();
    for (const field in ticket) {
        const cell = document.createElement("td");
        cell.textContent = ticket[field] || "";
        row.appendChild(cell);
    }
    const actionsCell = document.createElement("td");
    actionsCell.innerHTML = `<button onclick="editTicket('${row.dataset.id}')">Edit</button>
                             <button onclick="deleteTicket('${row.dataset.id}')">Delete</button>`;
    row.appendChild(actionsCell);
    return row;
}

function editTicket(id) {
    const row = document.querySelector(`tr[data-id='${id}']`);
    const ticket = {};
    row.querySelectorAll("td").forEach((cell, index) => {
        ticket[Object.keys(ticket)[index]] = cell.textContent;
    });
    Object.keys(ticket).forEach((key) => {
        document.getElementById(key).value = ticket[key];
    });
    document.getElementById("ticketID").value = id;
}

function deleteTicket(id) {
    document.querySelector(`tr[data-id='${id}']`).remove();
}
