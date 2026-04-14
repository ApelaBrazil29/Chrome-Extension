let myLeads = []
const inputEl = document.getElementById("input-el")
const inputbtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
let leadsFromLocalstorage = JSON.parse(localStorage.getItem("myleads"))
const deleteEl=document.getElementById("delete-btn")
const saveTbEl=document.getElementById("savetab-btn")

if(leadsFromLocalstorage){
    myLeads=leadsFromLocalstorage
    renderLeads()
}

inputbtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    renderLeads()
    localStorage.setItem("myleads",JSON.stringify(myLeads))
    
    inputEl.value = ""
})

deleteEl.addEventListener("dblclick",function(){
    localStorage.clear("myleads")
    myLeads=[]
    renderLeads()
})

saveTbEl.addEventListener("click",function(){
    chrome.tabs.query({active: true,currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myLeads))
        renderLeads()
    })
})
// function renderLeads() {
//     // let listItems="<li>"+inputEl.value+"</li>"
//     // for(let i=0;i<myLeads.length;i++){
//     //     listItems+="<li>"+myLeads[i]+"</li>"


//     //     //Another way to do: ->>
//     //         // const li=document.createElement("li")
//     //         // li.textContent=myLeads[i]
//     //         // ulEl.append(li)
//     // }

//     // ulEl.innerHTML+=listItems

//     let listItems = `<li>
//                         <a href='${inputEl.value}' target='_blank'>${inputEl.value}
//                         </a>
//                 </li>`
//     ulEl.innerHTML += listItems
// }


function renderLeads() {
    let listItems = ""

    for (let i = 0; i < myLeads.length; i++) {
        let item = myLeads[i]

        // Check if it's a valid URL
        if (item.includes(".")) {
            let url = item

            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url
            }

            listItems += `
                <li>
                    <a href="${url}" target="_blank">
                        ${item}
                    </a>
                </li>`
        } else {
            // Normal text
            listItems += `
                <li>
                    ${item}
                </li>`
        }
    }

    ulEl.innerHTML = listItems
}