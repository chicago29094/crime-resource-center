
# Online Federal Crime Resource Center
*This is a SPA React Website that integrates into the FBI's Crime and Arrest Data API controllers.*  
___
![Online Federal Crime Resource Center](https://user-images.githubusercontent.com/84363576/124279572-4abead00-db0d-11eb-8478-bd22109e5f54.png)
![Online Federal Crime Resource Center](https://user-images.githubusercontent.com/84363576/124279608-54e0ab80-db0d-11eb-95b0-8b88f918f0de.png)
___

### Description

The Online Federal Crime Resource Center ("OFCRC") provides two search forms for exploring and analyzing crime and arrest statistics from the FBI’s Uniform Crime Reporting (UCR) datasets.  These datasets are comprised of data that spans the year 1930 through 2019 and reportedly contains hundreds of gigabytes of records.  The focus of OFCRC is geared toward data from 1990 through 2019.  The interfaces provided allow the user to search crime statistics by state and criminal activity major category or detailed sub-category.  The user is presented with search form options related to either the crime or arrest data they are interested in viewing over a particular year-based date range.  The user is provided with options to either view the data in a text-based table format or in a graphical bar chart format.

**Link to GitHub Repository site:** https://github.com/chicago29094/crime-resource-center
**Link to Deployed public Website:** https://crime-resource-center.netlify.app/crimes

### Technologies used:
- HTML5
- CSS: Flexbox, Nested Display Components, Responsive Design
- JavaScript: loops, aync/await JSON data fetching through structured API calls, math methods/randomization, array methods, complex object data structures, arrow functions, 
- SPA Website Architecture, React, Bootstrap, React-Bootstrap, Chart.js, Controlled Components and Controlled Forms/User Input, useState, useEffect, props, and React hooks
___
## Installation Requirements
- No additional libraries or special add-ons needed beyond what is included in the dowbloadable repository
- The site uses, yarn, Bootstrap, React-Bootstrap, React, Chart.js, and React-Chartjs2.
- If for some reason the installation of a component is required use yarn install in the project's root directory to install all of the dependencies.
- Download the repo from https://github.com/chicago29094/crime-resource-center
- To deploy locally on your own computer, utilize yarn start to start the React Website's execution.
- You must obtain and install your own FBI API key and reference it in .env.local in your copy of the repository.  API keys can be requested at the following location: https://api.data.gov/signup/

## Contribution Instructions
- Contributions, suggestions, feature requests, or bug reports can be e-mailed to ofcrc@uswide.net.
- Input can also be provided by contacting the developer Harry Anastopoulos via the public GitHub repository for the OFCRC system.

## Lessons Learned/Ongoing Issues:
### Lessons Learned
- React-Bootstrap is not well documented and their are many features that are either missing or are just not documented by the developers.
- The control and resetting of complex Web forms is not well documented for Bootstrap, React-Bootstrap, and React. It is apparent from Web comments that many developers are not well verses on how these technologies work.
- Too many online individuals suggest downloading third-part apps and modules to solve common React and Bootstrap limitations and problems.
- The FBI APIs are not 100% accurately documented and contain inconsistencies.
  
### Ongoing Issues
- A more robust form validation system is needed.
- More robust error and exception handling needs to be put in place.
- It is not clear how to reset both the value of form drop-down components and their visual display on the browser without relying on DOM form reset() events.  It is not well documented on how to accomplish this using out-of-the-box React features.
- More time needs to be spent on developing a robust set of resource links for users.
- A framework is in place programmatically to access additional FBI data controllers for crimes and arrests.  Future enhancements can include demographic searches, additional offender reports, and victim information.
- Correlating the various data sets programmatically, via compound queries, may yielf more inetersting insights into the crime data.
- Some mislabelled FBI fields do not yielding display results.  THis can be an indication of mislabelled fields or missing or unreported data.
- Line charts and stacked line charts or bar charts may yielf comparison data among separate offender classes, if Chart2.js can produce such graphics.




  
