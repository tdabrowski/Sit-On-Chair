document.addEventListener('DOMContentLoaded',function(){
    console.log("DOM fully loaded and parsed!");
/**
*Calculator of chair cost with custom elements
*
*/
function calculator(){
    //VARIABLES
    //List Ids
    var chairType = document.getElementById('chairType');
    var chairColor = document.getElementById('chairColor');
    var chairFactory = document.getElementById('chairFactory');
    //List Elements
    var chairTypeElements = chairType.children;
    var chairColorElements = chairColor.children;
    var chairFactoryElements = chairFactory.children;
    //List button Ids
    var chairTypeButton = document.getElementById('chairTypeButton');
    var chairColorButton = document.getElementById('chairColorButton');
    var chairFactoryButton = document.getElementById('chairFactoryButton');
    //Transport checkbox
    var checkboxTransport = document.getElementById('transport');
    //Costs
    var totalCost = 0;
    var typeCost = 0;
    var colorCost = 0;
    var factoryCost = 0;
    var transport = 0;


    //Tables with prices
    var typePrice = [{name:'Chair Clair', price:200},
                      {name:'Chair Margarita', price:220},
                      {name:'Chair Selena', price:240}];

    var colorPrice = [{name:'Czerwony',price:80},
                      {name:'Czarny',price:90},
                      {name:'Pomarańczowy',price:100}];

    var factoryPrice = [{name:'Tkanina',price:80},
                        {name:'Skóra',price:160}];

    //clients chair order (0 - name; 1 - color; 2 - factory)
    var clientOrder = [];


    /**
    * Prints choosen chair elements information in summary field and saves
    * order informaiton in order table.
    * @param {string} lable - id of lable field
    * @param {number} index - id of order table element with place for new information
    * @param {string} summaryName - id of summary element name field
    * @param {string} summaryPrice - id of summary element price field
    * @param {variable} cost - global element cost container
    */
    function printOrder(lable,index,summaryName,summaryPrice,cost){
        var elementSummaryName = document.getElementById(summaryName);
        var elementSummaryPrice = document.getElementById(summaryPrice);
        var elementLable = document.getElementById(lable);
        elementLable.innerText = clientOrder[index];
        elementLable.style.color = '#24ba9f';
        elementSummaryName.innerText = clientOrder[index];
        elementSummaryPrice.innerText = cost;
    }


    /**
    * Prints transport information in summary field
    * @param {string} contentName
    * @param {variable} contentPrice
    */
    function printTransport(contentName,contentPrice){
        transportSummaryName.innerText = contentName;
        transportSummaryPrice.innerText = contentPrice;
    }


    /**
    * Calculates total cost ordered chair from sum of elements price
    */
    function caclulateTotalCost(){
        var summaryCost = document.getElementById('summaryCost');
        totalCost = typeCost + colorCost + factoryCost + transport;
        summaryCost.innerText = totalCost;
    }


    /**
    * Display drop down menu - on/off
    * @param {table} listId
    */
    function display(listId){
        if(listId.style.display === 'block'){
            listId.style.display = 'none';
        }
        else{
            listId.style.display = 'block';
        }
    }

    //Event click - arrow button for list chairType (drop down menu show on)
    chairTypeButton.addEventListener('click',function(){
        display(chairType);
    });


    //Event click - arrow button for list chairColor (drop down menu show on)
    chairColorButton.addEventListener('click',function(){
        display(chairColor);
    });


    //Event click - arrow button for list chairFactory (drop down menu show on)
    chairFactoryButton.addEventListener('click',function(){
        display(chairFactory);
    });


    //-------------------------------------------------
    //Event handlers for select lists
    for(var i=0; i<chairTypeElements.length; i++){    //Select type
        chairTypeElements[i].addEventListener('click',function(){
            for(var j=0; j<typePrice.length; j++){
                if(this.dataset.id === typePrice[j].name){
                    typeCost = (typePrice[j].price);
                    clientOrder[0] = typePrice[j].name;
                    printOrder('typeLable',0,'typeSummaryName','typeSummaryPrice',typeCost);
                    caclulateTotalCost();
                }
            }
            chairType.style.display = 'none';
        });
    }

    for(var i=0; i<chairColorElements.length; i++){    //Select color
        chairColorElements[i].addEventListener('click',function(){
            for(var j=0; j<colorPrice.length; j++){
                if(this.dataset.id === colorPrice[j].name){
                    colorCost = (colorPrice[j].price);
                    clientOrder[1] = colorPrice[j].name;
                    printOrder('colorLable',1,'colorSummaryName','colorSummaryPrice',colorCost);
                    caclulateTotalCost();
                }
            }
            chairColor.style.display = 'none';
        });
    }

    for(var i=0; i<chairFactoryElements.length; i++){   //Select factory
        chairFactoryElements[i].addEventListener('click',function(){
            for(var j=0; j<factoryPrice.length; j++){
                if(this.dataset.id === factoryPrice[j].name){
                    factoryCost = (factoryPrice[j].price);
                    clientOrder[2] = factoryPrice[j].name;
                    printOrder('factoryLable',2,'factorySummaryName','factorySummaryPrice',factoryCost);
                    caclulateTotalCost();
                }
            }
            chairFactory.style.display = 'none';
        });
    }

    checkboxTransport.addEventListener('click',function(){  //Checking if tranport is ordered
        var transportSummaryPrice = document.getElementById('transportSummaryPrice');
        var transportSummaryName = document.getElementById('transportSummaryName');
        if(checkboxTransport.checked === true){
            transport = parseInt(checkboxTransport.dataset.transportPrice);
            caclulateTotalCost();
            printTransport('Transport',transport);
        }
        else{
            transport = 0;
            caclulateTotalCost();
            printTransport('','');
        }
    });
}
calculator();

//end of file
});
