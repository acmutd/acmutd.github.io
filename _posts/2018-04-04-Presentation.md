---
title: "ACM Projects Presentation Night"
date: "Apr 04, 2018 11:00 PM"
categories: acm
featured: true
image: "https://i.imgur.com/jNNpEU4.jpg"
---

Tonight, the five fantastic teams of ACM Projects presented their final products. 

<!--more-->

#### Crypto Context

As it stands, the market is currently saturated with websites providing crypto currency price information and there's a steep learning curve for people trying to get involved in this exciting new economy. In order to mitigate this problem, the BitCoin team created a website that not only simplifies the process of learning about crypto currencies, but also provides valuable information about the general mood surrounding certain crypto currencies. Their website can generate and graph information from 4,732 different crypto coins from 102 different exchanges. Their backend javascript scrapes the latest tweets about each coin and determines the average tone of voice surrounding each coin. And by using Bootstrap and Node.JS libraries, they were able to create an aesthetically pleasing website that can be viewed on mobile or desktop computers.

##### The Crypto Context team are the official winners of ACM Projects Spring 2018.

#### Convolutional American Sign Language

The goals of the ASL Team with this project was to create an application that could take an image feed from a web-cam, recognize if there is a human hand in frame, and translate the sign that hand makes into a letter based on the American Sign Language alphabet. Some aspects of this product that were important to the team was real time input from the web-cam, high fidelity character recognition, and low latency between input and output. 

The technique they used to locate the hand was Color Segmentation. And in order to track the hand in real-time, they utilized back projection and mean shift calculations. They used a Convolutional Neural Network in order to classify what letter the hand is making. The CNN then returns an array with the confidence level for each of the 24 static letters, and the letter with the highest confidence is printed on the screen. 

Some real world applications for their project include Educating people on American Sign Language, real time translation of ASL in the workforce to allow for the mute population to communicate with servers or coworkers. This project is also a contribution to the open source community, presenting a free end-to-end solution that relies on no third-party services.


#### Smart Lock

Have you ever forgotten your keys? Or worse yet, had a key break off in the lock on a cold winter day? These are some of the issues the Smart Lock team of ACM aimed to solve with their project. The Smart Lock does not require a physical key and can be unlocked with your phone. The Smart Lock can also provide multi-person access by allowing you to authorize other people's phones. This can be useful if you're out of town and you need a trusted friend to house-sit. In order to make the process as easy as possible for the end user, the team designed a visually appealing website to go along with the lock.

The team used a Raspberry Pi to obtain the MAC addresses of authorized phones and to control the servomotor. The servo is connected to the door, and turns to unlocks it when given the command by your phone. The Smart Lock utilizes a SQLite Database to store all pertinent data, such as whitelisted devices and login data for the website. By using the Object-relational mapping tool, Peewee, the team was able to easily update and maintain their database within Python. The Smart Lock website was built using Bootstrap and Jinja2 for the front-end and Flask and SQLite for the back-end.


#### CometTours

The Augmented Reality team decided to apply AR technology to campus tours with their project. CometTours appeals to current UTD students by being more interactive than the typical campus tour and by containing off the book trivia about campus locales. Their project is easily scalable and has the potential to grow beyond UTD. The app was developed with the Unity Engine, Vuforia, and Android Studio. 


#### Whoosh Cam

Homes are 300% less likely to be burgled if they have a security camera installed. However, most security cameras on the market are prohibitively expensive. That's why the Smart Cam team set out to make a cross platform, user friendly, and cost efficient security camera. Thus was born, the Woosh Cam. With a projected maximum cost of only $50, the Woosh Cam is significantly cheaper than most every security camera on the market. 

The Woosh Cam can detect and record the features of a face, compare that to its dataset of trusted faces, and send an email to you immediately if a non-trusted user enters the frame. The team created a training dataset by collecting 100 images of faces using the HAAR cascade face detection software. They normalized each image by gray-scaling and resizing them to 200x200 pixels. Then, they created an array of labels, one per trusted user. They were able to train the model using this data with openCV.
