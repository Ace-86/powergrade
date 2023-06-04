# powergrade
A grading tool for students to plan out and simulate their grades in real time. 

Why did I create this app?
Often, I would work with students who were regulalry behind in their classes. A ton of missing work would pile up over the semester.
Eventually, every student would asked me the same question "If I turn in these missing assignments, how much will my grade go up?". 
Not being a human calculator, I wasn't always able to tell how much a 10 point assignments would translate into grade percentage.

And that was the idea I had for this app. A way for students to be more responsible and more aware of there overall grades. It would be 
a great assistant app or plugin for any students who can see there grades online. Being able to plan out and work towards the final grade they want

Features
- Students can import current grades
- Students have the ability to simulate their grades and manipulate missing assignments
- Grades (in simulation mode) adjust in real time
- Clicking '!'  will send a reminder to the student's email to turn in the specific missing assignment.

Upcoming Features
- see individual assignment grades (simulation) update in real time
- login system (using a relational database)
- allow user to set email reminder options (example: once every 24hr, 2-7 days)
- allow user to save options in database (update and remove )
- class list will show current grade
- dark-mode

Technology Used
-React, Javascript, Node.js, Express, nodemailer

Challenges
- changes made in modal would effect the current grades page
- infinite loop whenever the modal was opened
- undefined to defined value (breaking react rules )caused the input not to be recognized and it wouldnt update the values of percentage and grade  
- connecting nodemailer to gmail (fixed with the creation of app password in gmail settings)/ temporarily used emailjs
- filtering through data recieved from database
- getting grades to update in real time (simulation mode)
- getting email to send without error 
- email not specifying the assignment clicked (object data not being recognized)