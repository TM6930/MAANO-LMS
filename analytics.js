async function getAnalytics(userData) {
    const response = await fetch('http://localhost:5000/get-analytics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userData }),
    });
    const data = await response.json();
    return data.insights;
}
