document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM fully loaded and parsed!");

//VARIABLES
//List Ids
var chairType = document.getElementById('chairType');
var chairColor = document.getElementById('chairColor');
var chairFactory = document.getElementById('chairFactory');
//List Elements
var chairTypeElements = chairType.children;
var chairColorElements = chairColor.children;
var chairFactoryElements = chairFactory.children;
//List labels
var typeLable = document.getElementById('typeLable');
var colorLable = document.getElementById('colorLable');
var factoryLable = document.getElementById('factoryLable');
//List button Ids
var chairTypeButton = document.getElementById('chairTypeButton');
var chairColorButton = document.getElementById('chairColorButton');
var chairFactoryButton = document.getElementById('chairFactoryButton');
//Summary order fields
var typeSummaryName = document.getElementById('typeSummaryName');
var colorSummaryName = document.getElementById('colorSummaryName');
var factorySummaryName = document.getElementById('factorySummaryName');
var transportSummaryName = document.getElementById('transportSummaryName');
var typeSummaryPrice = document.getElementById('typeSummaryPrice');
var colorSummaryPrice = document.getElementById('colorSummaryPrice');
var factorySummaryPrice = document.getElementById('factorySummaryPrice');
var transportSummaryPrice = document.getElementById('transportSummaryPrice');
var summaryCost = document.getElementById('summaryCost');
//Transport checkbox
var checkboxTransport = document.getElementById('transport');


//Costs
var totalCost = 0;
var typeCost = 0;
var colorCost = 0;
var factoryCost = 0;
var transport = 0;

//totalCost = typeCost + colorCost + factoryCost + transport;

//Tables with prices
var typePrice = [{name:'Chair Clair', price:200},
                  {name:'Chair Margarita', price:220},
                  {name:'Chair Selena', price:240}];

var colorPrice = [{name:'Czerwony',price:80},
                  {name:'Czarny',price:90},
                  {name:'Pomarańczowy',price:100}];

var factoryPrice = [{name:'Tkanina',price:80},
                    {name:'Skóra',price:160}];

//client ordered chair (0 - name; 1 - color; 2 - factory)
var clientOrder = [];


//Event click - arrow button for list chairType (drop down menu show on off)
chairTypeButton.addEventListener('click',function(){
    chairType.style.display = "block";
});


//Event click - arrow button for list chairColor (drop down menu show on off)
chairColorButton.addEventListener('click',function(){
    chairColor.style.display = "block";
});


//Event click - arrow button for list chairFactory (drop down menu show on off)
chairFactoryButton.addEventListener('click',function(){
    chairFactory.style.display = "block";
});



//-------------------------------------------------
//Event handlers for select lists

//Select type
for(var i=0; i<chairTypeElements.length; i++){
    chairTypeElements[i].addEventListener('click',function(){
        for(var j=0; j<typePrice.length; j++){
            if(this.dataset.id === typePrice[j].name){
                typeCost = (typePrice[j].price);
                clientOrder[0] = typePrice[j].name;
                typeLable.innerText = clientOrder[0];
                typeLable.style.color = '#24ba9f';
                typeSummaryName.innerText = clientOrder[0];
                typeSummaryPrice.innerText = typeCost;
                totalCost = typeCost + colorCost + factoryCost + transport;
                summaryCost.innerText = totalCost;
            }
        }
        chairType.style.display = "none";
    });
}


//Select color
for(var i=0; i<chairColorElements.length; i++){
    chairColorElements[i].addEventListener('click',function(){
        for(var j=0; j<colorPrice.length; j++){
            if(this.dataset.id === colorPrice[j].name){
                colorCost = (colorPrice[j].price);
                clientOrder[1] = colorPrice[j].name;
                colorLable.innerText = clientOrder[1];
                colorLable.style.color = '#24ba9f';
                colorSummaryName.innerText = clientOrder[1];
                colorSummaryPrice.innerText = colorCost;
                totalCost = typeCost + colorCost + factoryCost + transport;
                summaryCost.innerText = totalCost;
            }
        }
        chairColor.style.display = "none";
    });
}




//Select factory
for(var i=0; i<chairFactoryElements.length; i++){
    chairFactoryElements[i].addEventListener('click',function(){
        for(var j=0; j<factoryPrice.length; j++){
            if(this.dataset.id === factoryPrice[j].name){
                factoryCost = (factoryPrice[j].price);
                clientOrder[2] = factoryPrice[j].name;
                factoryLable.innerText = clientOrder[2];
                factoryLable.style.color = '#24ba9f';
                factorySummaryName.innerText = clientOrder[2];
                factorySummaryPrice.innerText = factoryCost;
                totalCost = typeCost + colorCost + factoryCost + transport;
                summaryCost.innerText = totalCost;
            }
        }
        chairFactory.style.display = "none";
    });
}





//Checking if tranport is ordered
checkboxTransport.addEventListener('click',function(){
    if(checkboxTransport.checked === true){
        transport = parseInt(checkboxTransport.dataset.transportPrice);
        totalCost = typeCost + colorCost + factoryCost + transport;
        summaryCost.innerText = totalCost;
        transportSummaryName.innerText = 'Transport';
        transportSummaryPrice.innerText = transport;
    }
    else{
        transport = 0;
        totalCost = typeCost + colorCost + factoryCost + transport;
        summaryCost.innerText = totalCost;
        transportSummaryName.innerText = '';
        transportSummaryPrice.innerText = '';
    }
});






//end of file
});
