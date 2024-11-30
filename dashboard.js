
/* 
// Retrieve stored tickets from localStorage
const storedTickets = JSON.parse(localStorage.getItem('tickets') || '[]');

// Function to group tickets by priority
function analyzePriority(tickets) {
    const priorities = { High: 0, Medium: 0, Low: 0 };
    tickets.forEach(ticket => {
        if (ticket.ticketPriority && priorities[ticket.ticketPriority] !== undefined) {
            priorities[ticket.ticketPriority]++;
        }
    });
    return priorities;
}

// Mock Sentiment Analysis (Positive, Neutral, Negative)
function analyzeSentiment(tickets) {
    const sentiments = { Positive: 0, Neutral: 0, Negative: 0 };
    tickets.forEach(ticket => {
        const description = ticket.ticketDescription.toLowerCase();
        if (description.includes("defective") || description.includes("refund") || description.includes("not working")) {
            sentiments.Negative++;
        } else if (description.includes("delayed") || description.includes("damaged")) {
            sentiments.Neutral++;
        } else {
            sentiments.Positive++;
        }
    });
    return sentiments;
}

// Render Priority Chart
function renderPriorityChart(data) {
    const ctx = document.getElementById("priorityChart").getContext("2d");
    new Chart(ctx, {
        type: "pie",
        data: {
            labels: ["High", "Medium", "Low"],
            datasets: [{
                label: "Ticket Prioritization",
                data: [data.High, data.Medium, data.Low],  // Explicitly pass values as an array
                backgroundColor: ["#dc3545", "#ffc107", "#28a745"],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow chart resizing based on container
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: "Ticket Prioritization"
                }
            }
        }
    });
}

// Render Sentiment Chart
function renderSentimentChart(data) {
    const ctx = document.getElementById("sentimentChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Positive", "Neutral", "Negative"],
            datasets: [{
                label: "Sentiment Analysis",
                data: [data.Positive, data.Neutral, data.Negative],  // Explicitly pass values as an array
                backgroundColor: ["#28a745", "#ffc107", "#dc3545"],
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false, // Allow chart resizing based on container
            plugins: {
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: "Sentiment Analysis"
                }
            }
        }
    });
}

// Initialization
const priorityData = analyzePriority(storedTickets);
const sentimentData = analyzeSentiment(storedTickets);

renderPriorityChart(priorityData);
renderSentimentChart(sentimentData);

// Navigation
function goBack() {
    window.location.href = "index.html";
}
*/