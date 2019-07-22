import {saveCustomers, getCustomers, getCustomer, deleteCustomer } from "./lib.js";



    
    document.body.onload = async function (){
    // to delete customer info with ref by id
         async function deleteOnClick(id){
             let res = await deleteCustomer(id);
             alert("Click Ok to Delete" + " " + id);
             console.log(id);
             
    }
         var data  = await getCustomers();
        console.log(data); // prints the objects of JSON as an array

      
        //const userIds = posts.map(p => p.id);
        //const user = await getUser(userIds);
        if(data.length == 0){
            document.getElementById("custTable").innerHTML = "No Data to show";
           document.getElementById("data").innerHTML = "No Data Found";
        }
        else{
      
      let table = document.getElementById("custTable");
      
      for(var i=0; i<data.length; i++){
          let tr = document.createElement("tr");  

          let tid = document.createElement("td");
          tid.textContent = data[i].id;
          tr.appendChild(tid);   
            

          let tdFN = document.createElement("td");
          tdFN.textContent = data[i].fn;
          tr.appendChild(tdFN);
          
          let tdLN = document.createElement("td");
          tdLN.textContent = data[i].ln;
          tr.appendChild(tdLN);

          let tdTE = document.createElement("td");
          tdTE.textContent = data[i].te;
          tr.appendChild(tdTE);

          let tdEM = document.createElement("td");
          tdEM.textContent = data[i].em;
          tr.appendChild(tdEM);         

          let tdDEL = document.createElement("input");
          tdDEL.setAttribute("type", "button");
          tdDEL.setAttribute("value", "DELETE");
          tdDEL.setAttribute("id", data[i].id);
          tdDEL.setAttribute("class", "btn-btn-info");

          tdDEL.onclick = deleteOnClick.bind(null, data[i].id);
          tr.appendChild(tdDEL);

          table.appendChild(tr);

    }
}
  

    document.forms[0].addEventListener("submit", async function submitForm(e) {
        console.log(e);
        e.preventDefault();
        let fn = document.querySelector("#firstName").value;
        console.log(fn);
       
        let ln = document.querySelector("#lastName").value;
        let te = document.querySelector("#tel").value;
        
        let em = document.querySelector("#email").value;
        let body = { fn, ln, te, em };
        let createCustomer = await saveCustomers(body);
        let { id } = createCustomer;
        let message = `Post save succesfully with id ${id}`;
        alert(message);
    });
}
