const inputVal = document.getElementById('myInput');
const myTable = document.getElementById('myTable');
// console.log(inputVal);
inputVal.addEventListener("keyup",searchFun);


function searchFun(){
    let filter = inputVal.value.toUpperCase();
    
    let tr = myTable.getElementsByTagName('tr');
    // console.log(tr.length);
     
    for(var i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[1];  //1ST COLUMN MAI NAMES HAI NA 
        // console.log(td);

            if(td){
                let textVal = td.textContent || td.innerHTML;

                if(textVal.toUpperCase().indexOf(filter) > -1){
                    tr[i].style.display ="";
                }
                else{
                    tr[i].style.display = "none";
                    // tr[i].style.visibility = "hidden";
                }
            }
    }
    
    
}