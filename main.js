


const text=document.getElementById("quote");

const author=document.getElementById("author");

const getNewQuote = async () =>

{
    const response=await fetch(url);

    console.log(typeoresponsese);
    const quote=allQuotes[indx].text;

const response=await fetch(url);
const quote=allQuotes[indx].text;

    
    // json and store it in quotes array

    const allQuotes = await response.json();

// json and store it in quotes array

    const allQuotes =

const auth=allQuotes[indx].author;
const indx = Math.floor(Math.random()*allQuotes.length);


// display the quote and the author
    text.innerHTML=quote;

    author.innerHTML="~ "+auth;

}

getNewQuote();
        