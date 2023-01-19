    const numbersNumerals = [
       {number: 1000, roman : "M"},
       {number: 900, roman : "CM"},
       {number: 500, roman : "D"},
       {number: 400, roman : "CD"},
       {number: 100, roman : "C"},
       {number: 90, roman : "XC"},
       {number: 50, roman : "L"},
       {number: 40, roman : "XL"},
       {number: 10, roman : "X"},
       {number: 9, roman : "IX"},
       {number: 5, roman : "V"},
       {number: 4, roman : "IV"},
       {number: 1, roman : "I"},
       
    ];

    
    function convert (arabicNumber) {
        let romanLetter = "";
        let number = arabicNumber;

        for(let i = 0; i < numbersNumerals.length; i++){

           if(numbersNumerals[i].number <= number){

            number = number - numbersNumerals[i].number

            romanLetter = romanLetter + numbersNumerals[i].roman

            i--;

            
           }

       

          
        }

         console.log(arabicNumber)
         
         document.getElementById('romano').value = romanLetter
    }
   
    document.getElementById('botao-converter').addEventListener('click', function () {
      let number = document.getElementById('numero').value
      

      convert(number)
      
    })
    
    
    
    
      

  

      
    

