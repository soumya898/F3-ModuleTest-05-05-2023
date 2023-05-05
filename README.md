# F3-ModuleTest-05-05-2023
This project uses JavaScript to get the user's IP address and retrieve information from an API on button click. It displays the user's location on Google Maps using latitude and longitude data, gets the time of the user's location using timezone data, and shows a list of post offices in the area based on the pincode received.

https://course.acciojob.com/start-project?project=0ce65c40-b170-42bf-a3a6-ec81050deeed


STEP 1/2


<b>Project Overview (100 Marks)<b>

Task
----------
1. Get user's IP Address using js scripts, refer to the gfg link given. - https://www.geeksforgeeks.org/how-to-get-client-ip-address-using-javascript/


2. Once done, hit an api request at https://ipinfo.io/${IP}/geo , where ${IP} will be the IP of the user.
3. Get the IP Address on the load of the page, where as get the information from the API on the click of the button.
4. Using the lat,long given in the location of the json which you'll get in point 3, show the user's location on google map.
5. Using the timezone given from the json in point 3 get the time of the user's location - refer to this https://usefulangle.com/post/382/javascript-get-date-time-for-timezone
    Please note that you have to get current time from the given TIME ZONE, and not your time.
6. From the pincode in the json, send a get req to another API https://api.postalpincode.in/pincode/${pincode} - where ${pincode} is the pincode received in point 3.
7.  This will give you a list of post offices in that pincode. Map and show all the post offices available in that area.
8. Also create a search box and filter the postal offices by name and branch office.
Relevant Links :

Figma Link- https://www.figma.com/file/PwKrL5twQM6cDwWmL2HoYK/Untitled?node-id=0-1&t=Lo4Jnf4QGzxO0aCH-0
How to put lat,long on map - https://stackoverflow.com/questions/33464192/display-an-embedded-google-map-iframe-with-a-marker-on-a-certain-latitude-and-lo


Tutorial- https://drive.google.com/file/d/1pPgAwDs0A8dZMVRQkdEsLE63n6JhYAzV/view?usp=sharing



Marking Scheme (100 Marks)
------------------------------------------
1. Use JS to get user's IP address. (5 marks)
2. Successfully retrieve user's IP address using JS and handle errors appropriately. (5 marks)
3. Successfully retrieve user's IP address using JS and handle errors appropriately. (5 marks)
4. On page load, get the user's IP address; on button click, retrieve information from the API. (10 marks)
5. Use the latitude and longitude from the JSON response to show the user's location on Google Maps. (20 marks)
6. Use the timezone from the JSON response to get the time of the user's location. (15 marks)
7. Getting data and showing it with proper error handling (15 Marks)
8. Display a list of post offices in the area corresponding to the pincode received in point 2. (10 marks) <br>
9 .Add a search box to filter the list of post offices by name and branch office. (5 marks) <br>
10 .Create a UI according to the design in the Figma link provided. (10 marks)
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
