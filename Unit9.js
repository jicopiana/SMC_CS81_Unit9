/*
Student: Jofhel Opiana 
CS81 - 1729
Unit 9 Assignment
Date: 05/08/18
*/

/* 
Write a JavaScript program to highlight the bold words of the following paragraph by changing the text color to red, on mouse over.
*/
    
    // Declare variable
    var strongElements = document.getElementsByTagName('strong');

    // for loop with onmouseover function to turn bold words red when hovered over
    for (var i = 0; i < strongElements.length; i++) { 		    	                     strongElements[i].onmouseover = function () 
            { this.style.color = "red"; }; 
    } 

    // for loop with onmouseout function to turn bold words back to black
    for (var i = 0; i < strongElements.length; i++) { 		    	           
        strongElements[i].onmouseout = function () 
            { this.style.color = "black"; }; 
    } 