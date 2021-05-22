
const btn = document.getElementById('submit');
btn.addEventListener('click',()=>{
    const marks1 = Number(document.getElementById('sub1').value);
    const marks2 = Number(document.getElementById('sub2').value);
    const marks3 = Number(document.getElementById('sub3').value);
    const marks4 = Number(document.getElementById('sub4').value);
    let sum =  marks1+marks2+marks3+marks4;
    alert(sum);
})