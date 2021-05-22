const myInput = document.getElementById('myInput');
// let input = "";

const searchValues = () =>{
    // console.log(myInput.value);
    let filter = myInput.value.toUpperCase();

    let ul = document.getElementById('mylist');
    let li = ul.getElementsByTagName('li');
    // console.log(li);

    for (var i = 0; i<li.length;i++){
        if(li[i].innerText.toUpperCase().indexOf(filter) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
    }
    
}

myInput.addEventListener('keyup',searchValues);
// console.log(input);