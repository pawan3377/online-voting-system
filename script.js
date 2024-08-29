document.getElementById('voteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected candidate
    const candidate = document.getElementById('candidate').value;

    // Simple validation
    if(candidate === "") {
        alert("Please select a candidate.");
        return;
    }

    // Simulate sending vote data to a server
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `You voted for ${candidate.replace("candidate", "Candidate ")}`;

    // In a real application, here you would send the data to a server
    // Example:
    // fetch('/submit_vote', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ candidate: candidate }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Handle response
    //     console.log('Success:', data);
    // })
    // .catch((error) => {
    //     console.error('Error:', error);
    // });
});
