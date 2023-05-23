import { loadStripe } from "@stripe/stripe-js"




export async function checkout({devices})
{
    let stripePromise=null

    const getStripe= () => {
        if (!stripePromise){
            stripePromise= loadStripe(process.env.NEXT_PUBLIC_API_KEY)
        }

        return stripePromise
    }

    const stripe= getStripe()
    
    console.log(stripe)
    
    
    // stripe.redirectToCheckout({
    //     mode:'payment',
    //     devices,
    //     successUrl: `${window.location.origin}?session_id={CHECK_OUT_SESSION_ID}`,
    //     cancelurl: window.location.origin


    // })
  

}