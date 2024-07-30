const qt = document.querySelector(".qts")
const auth = document.querySelector(".author")

const  getQutes = async(n)=>{
    const api = "https://type.fit/api/quotes"
    try{
        const data = await fetch(api);
        const quote =await data.json();
        console.log(quote[n])
        qt.innerHTML= quote[n].text;
        auth.innerHTML = quote[n].author;

    }catch(err){
        console.log(err)
    }
}

const randomQuotes= ()=>{
    const num = Math.floor(Math.random()*15)
    console.log(num)
    getQutes(num)
}
