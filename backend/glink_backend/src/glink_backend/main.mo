import Debug "mo:base/Debug";  // ← Add this line  

actor {  
  // Store device reviews  
  public func storeReview(review : Text) : async () {  
    Debug.print("Review stored: " # review);  // ← Now works  
  };  

  // Store session feedback (mentor-mentee)  
  public func storeSessionFeedback(feedback : Text) : async () {  
    Debug.print("Feedback stored: " # feedback);  // ← Now works  
  };  
};  