const input = document.querySelector(".input")
const btn = document.querySelector(".btn")

const output = document.querySelector(".outputcontainer")
 // change the color of text 

//Api which i am using from dictionaryapi.dev
//https://api.dictionaryapi.dev/api/v2/entries/en/<word>

async function dictionary(word)
{
    const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res => res.json());
 
    console.log(res);
    return res[0];
}
 
async function displayResult()
{
    const data = await dictionary(input.value)
    console.log(data);

    let partOfSpeech_arr = []

    for(let i =0; i < data.meanings.lenght-1; i++)
    {
        partOfSpeech_arr.push(data.meanings[i].partOfSpeech)
    }

    output.innerHTML = `
    
    <div class="property">
        <span>Word: </span>
        <span>${data.word} </span>
    </div>
    <div class="property">
        <span>Phonetics: </span>
        <span>${data.phonetic} </span>
    </div>

    <div class="property">

        <audio controls style="height: 40px; width: 280px;" src="${data.phonetics[0].audio}"></audio>
    </div>

    <div class="property">
        <span>Definition: </span>
        <span>${data.meanings[0].definitions[0].definition} </span>

    </div>
    <div class="property">
        <span>Example: </span>
        <span>${data.meanings[0].definitions[0].example} </span>
    </div>

    <div class="property">
        <span>parts of  Speach: </span>
        <span>${partOfSpeech_arr.map(e => e).join(', ') } </span>
    </div>
     
    
    `
    output.style.display = 'grid';
    
    
}
//<audio controls src="${data.phonetics[0].audio}"></audio>

btn.addEventListener('click',displayResult)



//this function is for day and night mood

// Get the icon elements (it returns a collection, so we need to access the first one)
let icons = document.getElementsByClassName('icon');
let icon = icons[0];

// Get the elements with class 'box1' (assuming you have such elements)
let box1 = document.getElementsByClassName('box1')[0];
let box2 = document.getElementsByClassName('outputcontainer')[0];


// Add a click event listener to the icon
icon.addEventListener('click', function() {
    // Toggle the 'day-them' class on the 'box1' element
    box1.classList.toggle('day-them');
    box2.classList.toggle('day-them');
    
    

    // Check if 'day-them' class is present on 'box1' and update the icon accordingly
    if (box1.classList.contains('day-them') ) {
        
        icon.src = "./sun.png";
        // box2.classList.toggle('day-them1')
    } else {
        icon.src = "./moon.jpeg";
        
    }
});
