

const text=document.getElementById("quote");
const author=document.getElementById("author");

const getNewQuote = async () =>

{
    //api for quotes
    var url="https://type.fit/api/quotes";    


    // data from api
    const response=await fetch(url);
    console.log(typeof response);

    // quotes array

    const allQuotes = await response.json();


   // quotes array
   indx = Math.floor(Math.random()*allQuotes.length);


    //  index
    const quote=allQuotes[indx].text;

    

    // quote
    const auth=allQuotes[indx].author;



    if(auth==null)
    {
        author = "Anonymous";

    }

 

    // the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

}
getNewQuote();
        
        