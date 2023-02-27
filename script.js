
// Get all the countries from the Asia continent /region using the Filter function
// Get all the countries with a population of less than 2 lakhs using Filter function
// Print the following details name, capital, flag using forEach function
// Print the total population of countries using reduce function
// Print the country which uses US Dollars as currency.




var req = new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all',true);
req.send();
req.onload = function(){
    var result = JSON.parse(req.response);
    // Get all the countries from the Asia continent /region using the Filter function
    var data = result.filter((value)=>{
    return value.region === "Asia" || value.continent === "Asia";
    });
    console.log("Countries from the Asia continent:",data);

    // Get all the countries with a population of less than 2 lakhs using Filter function
    var data2 = result.filter((value)=>{
        return value.population<200000; //23503349
        });
    console.log("Countries with a population of less than 2 lakhs:",data2);

    // Print the following details name, capital, flag using forEach function
     result.forEach(element => {
       console.log("Name:",element.name.common+","+"Capital:", element.capital+","+"Flag:",element.flag) ;
    });

    //Print the total population of countries using reduce function
    const totalPop =()=>{
        let ini =0;
      console.log("Total population of countries :",result.reduce((acc,cur)=>acc+cur.population,ini)); 
    }
    totalPop();

   //Print the country which uses US Dollars as currency.
  for (let i = 0; i < result.length; i++) {
  if(Object.keys(result[i].currencies)[0] === 'USD'){
    console.log(result[i]);
  }
  }  

}
