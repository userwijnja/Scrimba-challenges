/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/


// Test your function
const panicForm = document.getElementById("panic-form")
const panicBtn = document.getElementById("panicify-btn")

    panicBtn.addEventListener('click', function(e){
        e.preventDefault()
         const panicFormData = new FormData(panicForm)
         const fullText = panicFormData.get('panicText').toUpperCase().split(" ").join(" 😱 ");
        
   document.getElementById("panic-display").innerText = fullText + "!"
    })
    


