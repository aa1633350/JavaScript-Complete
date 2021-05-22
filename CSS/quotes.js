const quotes = document.getElementById('Heading');
const author = document.getElementById('baseline');
const newbtn = document.getElementById('newbtn');
let realdata = "";
const getNewRandomQuotes = () =>{
    let rnum = Math.floor(Math.random() * 1642 );  // total length of data is 1643
    quotes.innerText = `${realdata[rnum].text}`;

    if(realdata[rnum].author == null){
        author.innerText = "Unknown";
    }
    else{
        author.innerText = `${realdata[rnum].author}`;
    }
    
    // console.log(realdata[rnum].author);
    // console.log(realdata[rnum].text);
}

const getQuotes = async () => {
    const api = "https://type.fit/api/quotes";

    try{
        let data = await fetch(api);
        realdata = await data.json(); //.json() se humko data json object format main milega
        // console.log(realdata); 
        
        getNewRandomQuotes();
    }
    catch (error){

    };
}

newbtn.addEventListener('click',getNewRandomQuotes);
getQuotes();