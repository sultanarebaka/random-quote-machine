


const text=document.getElementById("quote");

const author=document.getElementById("author");

const tweetButton=document.getElementById("tweet");



const getNewQuote = async () =>

{

    //api for quotes

    var url="https://type.fit/api/quotes";    



const response=await fetch(url);
const quote=allQuotes[indx].text;

    
    // array

    const allQuotes = await response.json();

// array

    const allQuotes =

const auth=allQuotes[indx].author;
const indx = Math.floor(Math.random()*allQuotes.length);


// quote and the author
    text.innerHTML=quote;

    author.innerHTML="~ "+auth;

}

getNewQuote();



       const indx = Math.floor(Math.random()*allQuotes.length);



    / index

    const quote=allQuotes[indx].text;

     