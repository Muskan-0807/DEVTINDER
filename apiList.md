#DevTinder APIs

##authRouter
-POST /signup
-POST /login
-POST /logout

##profileRouter
-GET /profile/view
-PATCH /profile/edit
-PATCH /profile/password  //Forgot passwordAPI this is hw


##connectionRequestRouter
-POST /request/send/interested/:userId
-POST /request/send/ignored/:userId

//we will make the two apis dynamic
-POST /request/send/status/:userId

-POST /request/review/accepted/:requestId
-POST /request/review/rejected/:requestId

//we will make the two apis dynamic
-POST /request/review/:status/:requestId

##UserRouter
-GET /user/connections
-GET /user/requests
//we should be very specific about what api is doing what so
-GET /user/requests/received

-GET /user/feed - Gets you the profiles of other users on platform



Status: ignore, interested, accepted, rejected
