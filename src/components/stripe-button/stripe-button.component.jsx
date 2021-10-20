import React from "react";
import StripeCheckout from "react-stripe-checkout";



const StripeCheckoutButton = ({price}) => {
    const priceInCents = price * 100;
    const publishableKey = 'pk_test_51Jm0hVErVKzAtiHXWNKIqYbdrxa6gZ5nreOfJsh3zb8Qh7zOEFKnk3fxq6MByfG4IyaPy7u4d9d1IdYHywmfjAD000xeOyAuyV';

    const onToken = token => {
        alert('Paymenet successfully proceded');
        console.log(token);
    };

    return <StripeCheckout 
            label= 'Pay Now'
            name= 'CRWN clothing'
            image= "https://stripe.com/img/documentation/checkout/marketplace.png"
            shippingAddress
            billingAddress
            description= {`Your total is $${price}`}
            amount= {priceInCents}
            panelLabel= 'Pay Now'
            token= {onToken}
            stripeKey= {publishableKey}
            />
    
};

export default StripeCheckoutButton;