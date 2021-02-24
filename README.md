# Travelbriefing

## Team Haiyaaaa

* Wenwen Xie
* Jianna Huang
* Yun Zhang
* Haoli Yang

## Problem

It is very time-consuming when it comes to researching requirements and important information about a country. When planning to travel to a country, it is important to understand the visa requirements, vaccine requirements, currency exchange prices, do and don’ts, laws/restrictions, cultural differences, etiquettes, etc. Most of the time, travelers have to visit multiple websites to get the information they need because the information is not gathered in one place; thus, travelers need to spend a lot of time researching. The API Travelbriefing provides common information needed for all countries like travel restrictions, exchange rates, visa requirements, etc; However, it does not provide other additional resources like dos and don'ts, cultural differences, special laws, and restrictions, etc.

## Solution

Provide a system that allows users to find all information needed in one place specific to a country. This system will draw travel information from [Travelbriefing.org public API](https://travelbriefing.org/api) and obtain culturally related data from [Cultural Atlas](https://culturalatlas.sbs.com.au/). There will be a feedback form to allow users to submit their opinions or anything they would like to correct or see in the system, along with their names and emails. The system will have its own database for tracking the user feedback and storing the data from [Cultural Atlas](https://culturalatlas.sbs.com.au/).

1. The system will consume the following Travelbriefing.org public API by sending a GET request with the user-selected country:
    * GET https://travelbriefing.org/{:country}?format=json

2. We will utilize the data-scraping technique by using node.js and puppeteer to retrieve the information from Cultural Atlas, and the information retrieved will be stored in a local database.

We are not able to do real-time data-scraping and are not sure if Cultural Atlas will have the user’s desired country information available in real-time, plus the concerns on the storage space, we will start off with the six identified Asia countries.

Users will be able to do the following:

1. Pick an Asian country:
    * China
    * Japan
    * South Korea
    * Malaysia
    * Thailand
    * Singapore

2. Access basic information about the country

3. Access cultural information about the country

4. Provide user feedback

## Sketch

The six countries will list on the main page, along with the country name and its image retrieved from APIs. Each country will display as individual clickable button. The user will always have the ability to visit the main page by clicking on the logo.

![Main page](https://user-images.githubusercontent.com/25678885/107431641-583ab280-6aec-11eb-9423-f13d0bb117f4.jpg)


After the user click on a country to check out related information, he/she will be directed to the country-specific page where user will find out country’s basic detailed information and cultural information. Information will be categorized and display as menu items of a side menu bar on the left. The content on the right side of the page will change as user choose different categories.

Since we are presenting many information, the page will split into multiple pages if needed for a well organization, but the design will remain the same.

![Country-specific page](https://user-images.githubusercontent.com/25678885/107431645-58d34900-6aec-11eb-8d62-3264cd49ad60.jpg)


Users have the ability to submit their opinions or anything that they would like us to know through a feedback form. The form will be always accessible to the user as it is always on the header. The user will need to submit their email and name along with the feedback, in an email-like design.

![Feedback page](https://user-images.githubusercontent.com/25678885/107431646-58d34900-6aec-11eb-9112-f4350dcec7ff.jpg)


## Appetite

This project will be completed in a 6-week cycle by a group of 4 members.

## Rabbit holes

* Information such as visa requirements and currency exchange differs based on the country the user is from.
* Since we are only providing information to six Asia countries and some country data can be outdated or incorrect, providing a user feedback form can allow users to inform us of the new country that they would like and the problem(s) they see in the system.

## No goes

* Due to time constraint and the excessive amount of database considerations, for our first launch we will only provide information on the identified six Asian countries mentioned above.
* Since there isn’t any feature that requires the user to have an account, it isn’t necessary to create user logins.
* Information from the feedback form will only be stored in the database, no actual emails will be sent out nor an admin view to manage the information.

//test test
