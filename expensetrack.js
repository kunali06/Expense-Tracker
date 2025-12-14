  let total=0;
    let titleInput=document.getElementById("title")
    let amountInput=document.getElementById("amount")
    let addbtn=document.getElementById("addBtn")
    let list=document.getElementById("list")
    let totalSpan=document.getElementById("total");

    addbtn.addEventListener("click",addExpense);

    function addExpense(){
        let title=titleInput.value;
        let amount=Number(amountInput.value);

        if(title===""||amount<=0)return;

        let li=document.createElement("li")
        li.textContent=`${title}-${amount}`;
        list.appendChild(li);

        total +=amount;
        totalSpan.textContent=total;

        titleInput.value="";
        amountInput.value="";
    }
