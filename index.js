const buttonEl=document.querySelectorAll("button")
const holder=document.getElementById("input")
for(let i=0;i<buttonEl.length;i++){
    buttonEl[i].addEventListener("click", ()=>{
        const value =(buttonEl[i].textContent)
        if(value==="AC"){
            clearInput()
        }else if(value === "="){
            calculate()

        }else{
            appendvalue(value)
        }
        function clearInput(){
            holder.value= ""
        }
        function appendvalue(num){
            holder.value += num
        }
        function backspace(){
            let all = holder.value
            all.slice(0, -1)
           }
           function calculate(){
            holder.value = eval(holder.value)
           }
 
    })}