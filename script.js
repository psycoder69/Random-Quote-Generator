const quotes = [
    {
        quote: "The unexamined life is not worth living.",
        source: "Socrates"
    },

    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
        source: "Aristotle"
    },

    {
        quote: "The foundation of every state is the education of its youth.",
        source: "Diogenes"
    },

    {
        quote: "Difficulties are things that show a person what they are.",
        source: "Epictetus"
    },

    {
        quote: "There is nothing permanent except change.",
        source: "Heraclitus"
    },

    {
        quote: "He has the most who is most content with the least.",
        source: "Diogenes"
    },

    {
        quote: "Wise men speak because they have something to say; Fools because they have to say something.",
        source: "Plato"
    },

    {
        quote: "Pay attention to your enemies, for they are the first to discover your mistakes.",
        source: "Antisthenes"
    },

    {
        quote: "The art of living well and the art of dying well are one.",
        source: "Epicurus"
    },

    {
        quote: "Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.",
        source: "Albert Einstein"
    },

    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        source: "Thomas Edison"
    },

    {
        quote: "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
        source: "Robert Frost"
    },

    {
        quote: "What doesn't kill us makes us stronger.",
        source: "Friedrich Nietzsche"
    },

    {
        quote: "You can fool all of the people some of the time, and some of the people all of the time, but you can't fool all of the people all of the time.",
        source: "Abraham Lincoln"
    },

    {
        quote: "You must be the change you wish to see in the world.",
        source: "Mahatma Gandhi"
    },

    {
        quote: "The way to get started is to quit talking and begin doing.",
        source: "Walt Disney"
    },

    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        source: "James Cameron"
    },

    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        source: "Benjamin Franklin"
    },

    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        source: "Nelson Mandela"
    },

    {
        quote: "Out of the mountain of despair, a stone of hope.",
        source: "Martin Luther King Jr."
    },

    {
        quote: "Keep your face always toward the sunshine, and shadows will fall behind you.",
        source: "Walt Whitman"
    },

    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        source: "Winston Churchill"
    },

    {
        quote: "Wake up determined, go to bed satisfied.",
        source: "Dwayne Johnson"
    },

    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        source: "Albert Einstein"
    },

    {
        quote: "A person without regrets is a nincompoop.",
        source: "Mia Farrow"
    },

    {
        quote: "The most sincere compliment we can pay is attention.",
        source: "Walter Anderson"
    },

    {
        quote: "Aim for the moon. If you miss, you may hit a star.",
        source: "W. Clement Stone"
    },

    {
        quote: "It always seems impossible until it's done.",
        source: "Nelson Mandela"
    },

    {
        quote: "If you cannot do great things, do small things in a great way.",
        source: "Napoleon Hill"
    },

    {
        quote: "You can't cross the sea merely by standing and staring at the water.",
        source: "Rabindranath Tagore"
    },

    {
        quote: "Doubt kills more dreams than failure ever will.",
        source: "Suzy Kassem"
    },

    {
        quote: "Never regret anything that made you smile.",
        source: "Mark Twain"
    },

    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: Only love can do that.",
        source: "Martin Luther King Jr."
    },

    {
        quote: "Everything you can imagine is real.",
        source: "Pablo Picasso"
    },

    {
        quote: "A person who never made a mistake never tried anything new.",
        source: "Albert Einstein"
    },

    {
        quote: "Wherever you go, go with all your heart.",
        source: "Confucius"
    },

    {
        quote: "In three words I can sum up everything I've learned about life: It goes on.",
        source: "Robert Frost"
    },

    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        source: "Herman Melville"
    },

    {
        quote: "Clouds come floating into my life, no longer to carry rain or usher storm, but to add color to my sunset sky.",
        source: "Rabindranath Tagore"
    },

    {
        quote: "The journey of a thousand miles begins with one step.",
        source: "Lao Tzu"
    },

    {
        quote: "Tough times never last, but tough people do.",
        source: "Dr. Robert Schuller"
    },

    {
        quote: "The difference between ordinary and extraordinary is that little extra.",
        source: "Jimmy Johnson"
    },

    {
        quote: "Even if you're on the right track, you'll get run over if you just sit there.",
        source: "Will Rogers"
    },

    {
        quote: "Don't wait. The time will never be just right.",
        source: "Napoleon Hill"
    },

    {
        quote: "What we fear doing most is usually what we most need to do.",
        source: "Tim Ferriss"
    },

    {
        quote: "If you can't outplay them, outwork them.",
        source: "Ben Hogan"
    },

    {
        quote: "Champions keep playing until they get it right.",
        source: "Billie Jean King"
    },

    {
        quote: "You miss 100% of the shots you don't take.",
        source: "Wayne Gretzky"
    },

    {
        quote: "Never let your memories be greater than your dreams.",
        source: "Doug Ivester"
    },

    {
        quote: "Sometimes life is going to hit you in the head with a brick. Don't lose faith.",
        source: "Steve Jobs"
    },
];

function displayQuote() {
    let randomQuote = function() {
        return quotes[Math.floor(Math.random() * quotes.length)];
    }

    randomQuote = randomQuote();

    let randomColor = function() {
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);

        return `rgb(${red}, ${green}, ${blue})`;
    }

    randomColor = randomColor();

    // document.getElementById("main").style.background = randomColor;
    document.getElementById("quote").innerHTML = ` &#8220; ${randomQuote.quote} &#8221; `;
    document.getElementById("source").innerHTML = ` &#126; ${randomQuote.source} `;
    document.getElementById("button").innerHTML = ` next &#8594; `;
}

displayQuote();

window.setInterval(displayQuote, 15000);

document.getElementById("button").addEventListener("click", displayQuote);