var sqrs=document.querySelectorAll('td');
function marker()
{
    if(this.textContent === '')
    {
        this.textContent = 'X';
    }
    else if(this.textContent === 'X')
    {
        this.textContent = 'O';
    }
    else{
        this.textContent = '';
    }
}
for (let index = 0; index < sqrs.length; index++) {
    sqrs[index].addEventListener("click" , marker);        
}