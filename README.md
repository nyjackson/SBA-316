# SBA-316: The Document Object Model #

## Purpose: ##
This assessment focuses on measuring my understanding of the Document Object Model (DOM) and my capabilities in implementing its features practically. For this assignment, I created a webpage in inspiration of the Reddit thread structure. 

### Objectives: ###
- Use DOM properties, methods, and techniques to create a web application that provides a dynamic user experience.
- Use BOM properties, methods, and techniques to facilitate creation of a dynamic web application.
- Demonstrate proficiency with event-driven programming and DOM events.
- Implement basic form validation using any combination of built-in HTML validation attributes and DOM-event-driven JavaScript validation.

## Installation/Access: ##
1. Download the SBA-316 project files
2. Open index.html in your web browser
3. Interact with website!

## Resource Links: ##
- [Coolors.co](https://coolors.co/0d1f22-264027-3c5233-f1bf98-b38a58)
- [Duck Picture](https://www.pexels.com/photo/close-up-of-a-mallard-duck-in-autumn-setting-33594736/)

## Known Issues: ##

- After submitting a like/dislike vote, if you comment this will add another vote to the previously selected vote.

## Functions: Definitions & Usage ##

### createNavBar() ###
This function creates the navbar and adds to the available links. The amount and content of the nav menu links are accessible and alterable via an array. 

### createComment() ###
This function crafts a comment via DocumentFragment and includes DOM event-validation by taking the inputs from `.prompt()` and ensuring that it is filled or limiting the amount of characters in a comment.

### updateCounter() ###
This function updates the vote counter on the post by accessing the element and changing it's content. 

### addVote() ###

This function takes the like or dislike vote from the form and updates the corresponding counter. 

### clearActions() ###

This functions handles the logic for interacting with the navbar items and completing the clearing action on the votes or the comments based on whether "Clear Votes" or "Clear Comments" was pressed. 