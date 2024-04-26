
const api_url = "https://zenquotes.io/api/quotes/";

async function getQuote(api_url) {
    try {
        const response = await fetch(api_url);
        const data = await response.json();
        if (data.length > 0) {
            return { quote: data[0].q, author: data[0].a };
        } else {
            return { quote: "No quotes available", author: "" };
        }
    } catch (error) {
        console.error('Error fetching quote:', error);
        return { quote: "Error fetching quote", author: "" };
    }
}

async function displayQuote() {
    const { quote, author } = await getQuote(api_url);
    document.getElementById('quote').textContent = quote;
}

displayQuote();
