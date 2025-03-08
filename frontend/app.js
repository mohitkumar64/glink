// Use environment variable for canister ID (private)  
const canisterId = process.env.REACT_APP_CANISTER_ID || "cxzzz-jyaaa-aaaap-qpxmq-cai";  

import { Actor, HttpAgent } from "@dfinity/agent";  
import { idlFactory } from "../../backend/glink_backend/declarations/glink_backend";  

const agent = new HttpAgent({ host: "https://ic0.app" });  
const canister = Actor.createActor(idlFactory, { agent, canisterId });  

// Submit a review  
async function submitReview(reviewText) {  
  try {  
    await canister.storeReview(reviewText);  
    console.log("Review stored!");  
  } catch (error) {  
    console.error("Error:", error);  
  }  
}  

// Submit session feedback  
async function submitFeedback(feedbackText) {  
  try {  
    await canister.storeSessionFeedback(feedbackText);  
    console.log("Feedback stored!");  
  } catch (error) {  
    console.error("Error:", error);  
  }  
}  

// Example usage:  
// submitReview("This device is amazing!");  