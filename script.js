//navbar
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

//banner 
const quotes = [
    {
        text: "I am not free while any woman is unfree, even when her shackles are very different from my own.",
        author: "Audre Lorde"
    },
    {
        text: "We need women at all levels, including the top, to change the dynamic, reshape the conversation, to make sure women's voices are heard and heeded, not overlooked and ignored.",
        author: "Sheryl Sandberg"
    },
    {
        text: "There is no limit to what we, as women, can accomplish.",
        author: "Michelle Obama"
    },
    {
        text: "We cannot all succeed when half of us are held back.",
        author: "Malala Yousafzai"
    },
    {
        text: "The question isn't who's going to let me; it's who's going to stop me.",
        author: "Ayn Rand"
    },
    {
        text: "A woman with a voice is, by definition, a strong woman.",
        author: "Melinda Gates"
    },
    {
        text: "I raise up my voice—not so that I can shout, but so that those without a voice can be heard.",
        author: "Malala Yousafzai"
    },
    {
        text: "Women belong in all places where decisions are being made.",
        author: "Ruth Bader Ginsburg"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');

let currentIndex = 0;

function changeQuote() {
    // Hide current quote
    quoteElement.classList.remove('visible');
    authorElement.classList.remove('visible');

    setTimeout(() => {
        // Update to next quote
        currentIndex = (currentIndex + 1) % quotes.length;
        quoteElement.textContent = quotes[currentIndex].text;
        authorElement.textContent = "- " + quotes[currentIndex].author;

        // Show new quote
        quoteElement.classList.add('visible');
        authorElement.classList.add('visible');

    }, 500);
}

// Change quote every 5 seconds
setInterval(changeQuote, 5000);

