# Online Federal Crime Resource Center
*This is a SPA React Website that integrates into the FBI's Crime and Arrest Data API controllers.*  
___
![Online Federal Crime Resource Center](https://chicago29094.github.io//)
___

### Description

The Online Federal Crime Resource Center ("OFCRC") provides two search forms for exploring and analyzing crime and arrest statistics from the FBI’s Uniform Crime Reporting (UCR) datasets.  These datasets are comprised of data that spans 1930 through 2019 and reportedly hundreds of gigabytes.  The focus of OFCRC is on data from 1990 through 2019.  The interfaces provided allow the user to search crime statistics by state.  The user is presented with search form options on the crime or arrest data they are interested in viewing over a particular year-based date range.  The user is provided with options to either view the data in a text-based table format or in a graphical chart format.

**Link to GitHub Repository site:** https://github.com/chicago29094/crime-resource-center
**Link to Deployed public Website:** https://chicago29094.github.io/

### Game summary:
You are the band member for the rock band Bad Tendencies. Your job is to get the band members on stage and to keep them out of trouble. If you get close to a band member they will follow you to the stage, unless they are distracted or under the influence. You can collect money as you move along, otherwise the band members will grab it and likely waste it to support their Rock-n-Roll lifestyle. Use the keyboard arrow keys to move around. Good Luck!!!.

The game ends when one of the following conditions is met:
**Win Condition:** The player must complete all five levels of the game by bring band members to the stage entrance and keeping the band members alive.
**Lose Conditions:** The player will lose the game if there are no more band members left alive on a level or if the player's own health reaches zero.
**Multiple Game Rounds** As the player progress between levels, they are presented with a new game playfield and increasing challenges.

### Technologies used:
- HTML5
- CSS: Flexbox, Nested Display Components, Responsive Design
- JavaScript: loops, aync/await JSON data fetching through structured API calls, math methods/randomization, array methods, complex object data structures, arrow functions, 
- SPA Web development, React, Bootstrap, React-Bootstrap, Chart.js, Controlled Components and Controlled Forms/User Input, useState, useEffect, props, React hooks
___
## Installation Requirements
- No additional libraries or special add-ons needed beyond what is included in the repository
- The site uses, yarn, Bootstrap, React-Bootstrap, React, Chart.js, React-Chartjs2.
- Download the repo from https://github.com/chicago29094/crime-resource-center
- To deploy locally on your own computer, utilize yarn start to  start the Website's execution.

## Contribution Instructions
- Contributions, suggestions, feature requests, or bug reports can be e-mailed to ofcrc@uswide.net.
- Input cn also be provided by contact the developer Harry Anastopoulos via the public GitHub repository for the OFCRC system.

## Lessons Learned/Ongoing Issues:
### Lessons Learned
- React-Bootstrap is not well documented and their are many features that are either missing or are just not documented by the developers.
- The control and resetting of complex Web forms is not well documented for Bootstrap, React-Bootstrap, and React. It is apparent from Web comments that many developers are not well verses on how these technologies work.
- Too many online individuals suggest downloading third-part apps and modules to solve common React and Bootstrap limitations and problems.
- The FBI APIs are not 100% accurately documented/
  
### Ongoing Issues
- A more robust form validation system is needed.
- More robust error and exception handling need to be put in place.
- It is not clear how to reset both the value of form drop-down components and their visual display on the browser without relying on DOM events.  It is not well documented on how to accomplish this using out-of-the-box react.
- More time needs to be spent on developing a robust set of resource links for users.
- A framework is in place programmatically to access additional FBI data controllers for crimes and arrests.  Future enhancements can include demographic searches, additional offender reports, and victim information.
- Correlating the various data sets programmatically, via compound queries, may yielf more inetersting insights into the crime data.
- Some mislabelled FBI fields are not yielding display results.  THis can be an indication of mislabelled fields or missing or unreported data.





  