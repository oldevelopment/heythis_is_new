Backend dev changelog 
25th of march 2020 added keys for fb and google and insta
25th of march 2020 moving to apply grapql to the project.
27th of march all 3 logins are now working ( using my personal credtials which points to a larger problem in the way alviono has configured the app)
7th April added last commits to graphqwl and read in front in dev
11th April added user profile to the grapql schema
![](./graphqluser-profile.png)

21st April Graphql pretty much done . waiting for feedback and more possible points to expose from front end dev
21st April checked client ID's and app secrets again 
  facebook working we need to do some more configuring on our end.
  it will get you to log in but the next bit is not working 
  instagram not working when you try to go further with the login screen you get 
  {
error_type: "OAuthException",
code: 400,
error_message: "Invalid scope field(s): public_content"
}
SUGGEST STEFAN DOES A PERSONAL ON TO TEST AND IF YOU GET DIFFERENT RESULTS THEN CREATE A NEW ONE FOR THE MAIN APP
Google log  also give an error when going past the sign in 
This app isn't verified
This app hasn't been verified by Google yet. Only proceed if you know and trust the developer.

If you’re the developer, submit a verification request to remove this screen. Learn more

Advanced
to be reserached and resolved immediately.
21st to do persist data to localhost/mongodb. and test 

April 25th Graphql working - updated with database I/O queries and mutations below.
to delete a user 
mutation {
  deleteUser(id: "id of user to be deleted ") {
    id
  }
}

to add a user 
mutation {
  addUser(firstname: "James", lastname: "Bond", email: "jamesbond@mi5.com", wachtwoord: "tester1") {
    firstname
  }
}
to update a user 
mutation {
  updateUser(
    id: "id of user to be updated", 
    firstname: "jason", 
    lastname: "Bourne", 
    email: "jasonbourne@gmail.com", 
    wachtwoord: "infinite", 
    companyname: "Blackbriar", 
    address: "Somewhere in the US", 
    pobox: " 22222 langley", 
    city: " Washinton", 
    country: "USA", 
    telephone: "00012345678", 
    accountstatus: "active", 
    profilepic: "porfile pic url", 
    pagetitle: "jason's page", 
    pitch: " al ittle murder a little mayhem", 
    backgroundimage: "backgroundimageurl", 
    keywords: " jazzhop hop , dance ", 
    profession: "spy", 
    genre: "Espionage", 
    pageRules: "a list of page rules", 
    pageContent: "a list of page rules", 
    hyperlinks: "a list of hyperlinks", 
    pageBuilder: "a list of pagebuilder rules", 
    portals: "a list of portals user belongs to") {
    id
    firstname
    lastname
    wachtwoord
    companyname
    address
    pobox
    city
    country
    telephone
    accountstatus
    profilepic
    pagetitle
    pitch
    backgroundimage
    keywords
    profession
    genre
    pageRules
    pageContent
    hyperlinks
    pageBuilder
    portals
  }
}
to query a user 
{
  user(id:"Id#"){
    id
    email
    keywords {
      keyword
    }
  }
}

}
to query a list of users 
{
  users {
    firstname
    lastname
  }
}
to query a list of key words
{
 keywords {
    id
    keyword
  }
}

to create a portal 
mutation {
  createPortal(name: "Alvinio's Special", type: "vanity", typeof2:"city2") {
    name
    type
    typeof2
  }
}

to delete a portal 
mutation {
 deletePortal(id: "id of portal to be deleted") {
    name
    type
    typeof2
    title
    description
  }
}
to update a portal 
mutation {
  updatePortal(id: "id of portal to be updated",name: "Alvinio's Special Portal", type: "vanity-Test", typeof2:"Test-city2") {
    name
    type
    typeof2
  }
}
to update a user 
mutation {
  updateUser(id: "5ea40c26dbdfab78875d2e9b",oauth:true, firstname: "Vera", wachtwoord: "mzhaal2", companyname: "OSS-CIA", country: "U.S.A", ww: "www.oss.com", profession: "Female secret agent", portals: "world class female spies", socialmedia: "has facebook", keywords: [{keyword: "nederpop"}, {keyword: "Reggeaton"}, {keyword: "Salsa"}, {keyword: "EDM"}, {keyword: "Trance"}, {keyword: "Jazz"}]) {
    firstname
    lastname
    email
    id
    wachtwoord
    companyname
    country
    profession
    portals
    keywords {
      keyword
    }
  }
}


26th of april modularized types for easy maintenance
added & Modularized
AmbassadorsType *
Infotype *
KeywordType
PortalType
UserType

26th  these types are not working properly due to nested nature. *
30th nested types working properly 
1st may Deeper nested objects working for mutations 
it has to be done via inputtypes 

google login now working  
:smile:

8th April : After over 2 weeks of trying to figure out if facebook login will work with instagram I have finally discovered when they(facebook) removed instagram authentication they did not provide an alternative.
Thus things to note in certain user cases 
user has facebook = :unlock:
user has email = :unlock:
user has only instagram? = create account with either facebook or email and then :unlock:

facebook login now working  
:smile:

instagram token accessed   
:smile:


explanation the flow to get insta info
get permissions but first using at pop up window 
this gives user token 
this user token can be exchanged to loglived one 
and this can be used to make calls to the instagram graph api
explanation the flow to get FB info
get permissions but first using at pop up window 
this gives user token 
this user token can be exchanged to loglived one 
and this can be used to make calls to the facebook graph api
TODO : 
explain the flow to get youtube info

11th updated keywords query and mutation and allowed keywords to be created from users
12th updated models to reflect original project.
user.js portal why ? especially since we have portaljs and portal types ? q for alvinio
Added various types for facebook instagram and youtube (remember to change google in app.js to store to the youtube object)
added query and resolver scaffolding for 
youtube & facebook & instagram permissions
youtube & facebook & instagram content

16th of may 2020 
Google
flow explanation 
Authentication --> user token this will be stored in the db under tokens google access token -->(permissions) user access token ---> take access token and add use it to retrieve channel id  ---> take channel id and use it to retrieve uploads id and uploads has playlist of all the videos 
list of videos(object)---> extract 

instagram
authwindow grants permissions(user input) and reutrns code
code is exchanged for accesstoken 
and accesstoken is exchanged for longlived token 

