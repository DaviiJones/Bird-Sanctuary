import React from 'react';
import { useState } from 'react';

const Checkout = ({handleCheckout}) => {

 const [checkout, setCheckout] = useState({
    firstName: "",
    lastName: "",
    email: "",
    zipCode: null 
})

const handleChange = (e) => { 
    setCheckout({...checkout,
        [e.target.id]: e.target.value 
    })
}

const handleSubmit = (e) =>  {
    e.preventDefault()

    const validCheckout = Object.values(checkout).every((value) => Boolean(value)=== true)

    if(validCheckout){
        setCheckout({
            firstName: "",
            lastName: "",
            email: "",
            zipCode: "" 
        })
        handleCheckout()
        alert("You have adopted birds! Thank you! :)")
    } else {
        alert("Form must be completed in order to checkout.")
    }


    
}

    return (
        <div className="checkout">
            <h3>Checkout</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName"> First Name </label>
                <input 
                    value={checkout.firstName} 
                    onChange={handleChange} 
                    type="text" name="firstName" id="firstName" />
                <label htmlFor="lastName"> Last Name </label>
                <input 
                    value={checkout.lastName} 
                    onChange={handleChange} type="text" name="lastName" id="lastName" />
                <label htmlFor="email"> Email </label>
                <input value={checkout.email} 
                    onChange={handleChange} 
                    type="text" name="email" id="email" />
                <label htmlFor="zipCode"> Zip Code </label>      
                <input value={checkout.zipCode} 
                    onChange={handleChange}
                    type="number" name="zipCode" id="zipCode" />
                <button type='submit' >Submit</button>
            </form> 
        </div>
    );
}

export default Checkout;
