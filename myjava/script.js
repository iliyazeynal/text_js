const ulement=document.getElementById('myul')
const input=document.getElementById('newtext')
const addbutton=document.getElementById('addbutton')
addbutton.addEventListener('click',()=>
{
    const newtext=input.value;
    if (newtext) {
        const li=document.createElement('li')
        const paraghraf=document.createElement('p')
        paraghraf.classList.add('color')
        const timespan=document.createElement('span')
        const data=new Date();
        const formatdata=data.toLocaleDateString()+" "+data.toLocaleTimeString();
        timespan.textContent=`${formatdata}`;
        paraghraf.textContent=newtext;
        paraghraf.appendChild(timespan);
        li.appendChild(paraghraf)
        const x=document.querySelector('.color')
        if (x) {
          x.classList.remove('color')  
        }
        ulement.insertBefore(li,ulement.firstChild)
        input.value=""
    }
})

