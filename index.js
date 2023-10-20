
const cats = function(){
    console.log('["Milo", "Otis", "Garfield"]')
}

function destructivelyAppendCat(name){

    beforeEach(function () {
        cats.length = 0;
      
        cats.push("Milo", "Otis", "Garfield");
      })
      
        cats.push("Ralph");
    
};
      
destructivelyAppendCat();


function destructivelyPrependCat(name){
beforeEach(function () {
    cats.length = 0;
  
    cats.unshift("Bob");
  })
}

destructivelyPrependCat();

 
function destructivelyRemoveLastCat(name){
    beforeEach(function () {
        cats.length = 0;
      
        cats.pop();
      })
    }
    
    destructivelyRemoveLastCat();


    
function destructivelyRemoveFirstCat(name){
    beforeEach(function () {
        cats.length = 0;
      
        cats.shift();
      })
    }
    
    destructivelyRemoveFirstCat();





    function appendCat(name){

        beforeEach(function () {
            cats.length = 0;

     const cats = ["Milo", "Otis", "Garfield"]; 
      copyOfCats=cats.slice();
            cats.push("Broom")
         
        })

    }
         appendCat();



   
    function prependCat(name){

        beforeEach(function () {
            cats.length = 0;

     const cats = ["Milo", "Otis", "Garfield"]; 
      copyOfCats=[...cats];
      cats.shift("Arnold");
         
        })

    }
        prependCat();



        function removeLastCat(name){

            beforeEach(function () {
                cats.length = 0;
    
         const cats = ["Milo", "Otis", "Garfield"]; 
          copyOfCats=[...cats];
                cats.slice(-1);
             
            })
    
        }
        removeLastCat();
    



        function removeFirstCat(name){

            beforeEach(function () {
                cats.length = 0;
    
         const cats = ["Milo", "Otis", "Garfield"]; 
          copyOfCats=[...cats];
                cats.slice(1);
             
            })
    
        }
        removeFirstCat();


















      function destructivelyAppendCat(name){

        beforeEach(function () {
            cats.length = 0;
          
    
        });
    };

    function destructivelyRemoveLastCat(name){
        beforeEach(function () {
            cats.length = 0;

    cats.pop.shift();
          
           
});

};


function destructivelyFirstLastCat(name){

        beforeEach(function () {
            cats.length = 0;
          
            cats.pop.shift();

    
        });
    };