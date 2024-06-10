let count =0;


//FUNCTION TO INCREASE COUNT
function increaseCount() {
    count++;
    displayCount();
}

function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}