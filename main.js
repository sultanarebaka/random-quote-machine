
const text=document.getElementById("quote");

const author=document.getElementById("author");

const getNewQuote = async () =>


//api for quotes

    var url="https://type.fit/api/quotes";    


const response=await fetch(url);