const takeOrder = (customer,callback) =>{
    console.log(`Take order for ${customer}`)
    callback(customer)
}

const processOrder = (customer,callback) => {
    console.log(`Process order for ${customer}`)

    setTimeout(()=>{
        console.log('Cooking completed')
        console.log(`Order processed for ${customer}`)
        callback(customer)
    },3000)

   
}

const orderComplete = (customer) =>{
    console.log(`Order completed for ${customer}`)
}

takeOrder('Customer 1', (customer)=>{
    processOrder(customer,(customer)=>{
        orderComplete(customer)
    })
})