
# Garden Variety

This application is designed to allow local gardeners the ability to trade or sell any extra fruits or veggies. There is an integrated chat functionality that allowers gardeners to interact and determine meeting times and locations. It is easy to browse the available listings and determine what is available. Listing items on the market is as simple as a few clicks. 

## Technologies

Javascript
HTML
CSS
Material UI
React
Redux
Saga
Express
Node
Postgres


BUGS LIST
[x] Chat does not autorefresh - Dispatch was not in the correct Saga. Needed to update the action to make sure the correct data was transmitted.
[x] Delete listing does not work - Server and app needed restart. Updates were not in sync.
[x] Chat misidentifying the other gardener 50% of the time - Called for user instead of user.username so conditional was never met.
[x] Formatting of Material UI items does not respond to div formatting - use <Box>

ToDo
[] Make page persistent on reload
[x] style login
[] style chat
[] style new listing
[x] style register page
[] add profile update page
[] add avatars