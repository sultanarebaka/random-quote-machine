
const text=document.getElementById("quote");

const author=document.getElementById("author");

const getNewQuote = async () =>


//api for quotes

    var url="https://type.fit/api/quotes";    


const response=await fetch(url);



const quote=allQuotes[indx].text;

    

const allQuotes = await response.json();




text.innerHTML=quote;

    author.innerHTML="~ "+auth;

getNewQuote();


const auth=allQuotes[indx].author;

const indx = Math.floor(Math.random()*allQuotes.length);