# The Athlete Insider

The Athlete Insider is an all-in-one daily sports news website that I created myself. It delivers the latest coverage and detailed analysis on major sports storylines from the NBA, NFL, UEFA Champions League, 
and for a limited time the Paris 2024 Olympics. For each league, I also included game breakdown analysis, player statistics, standings, and betting odds. To create this website, I used HTML, CSS, JavaScript, 
JQuery, and an API implementation from Rapid API to display the NBA conference standings. I called this API using Javascript as well, and fetch as the client.

In both the nbaapi.js and nbaapiwest.js files, you will notice that I did not include the API key and simply wrote "ENTER API KEY HERE." If you would like to test out this program to see how this performs, you would
need to register for free on RapidAPI to have access. Once you're registered, you can search for "API-NBA." It should allow you to subscribe to the API for free using the "Free Plan", as long as you do not go over 
the quota limits. For this API, it should be 100 objects per day, but make sure you confirm this under the subscription info. Once you're subscribed, on the left side, click any of the endpoints. This doesn't 
matter since you're only looking for the API key. At this point, you should be able to see your API key. Copy and paste it on both nbaapi.js, nbaapiwest.js files where it says "ENTER API KEY HERE." Now, you should
be able to run the website through a live server and view the NBA conference standings provided by "API-NBA."
