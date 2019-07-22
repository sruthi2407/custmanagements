import config from "./config.js"


export function saveCustomers(customers){
    return fetch(`${config.endpoint}/customers`, {
    method: "POST",
    body: JSON.stringify(customers),
    headers: {
        "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

export function getCustomers(){
    return fetch("http://localhost:3000/customers", 
    {   method: "GET",
        headers: { 
            "Content-Type": "application/json"
        }
    }).then(res => res.json());
}

export function getCustomer(id){
    return fetch(`http://localhost:3000/customers/users/${id}`)
    .then(res => res.json()
    );
}

export function deleteCustomer(id){
    return fetch(`${config.endpoint}/customers/${id}`, {
        method: "DELETE",
    }).then(res => res.json());
}


