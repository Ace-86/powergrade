will update

Problems I have encountered:

1) changes made in modal would effect the current grades page (unintended); Fixed by creating a renamed cloned array containing the same data and only allowing the modal to access the clone for grade edits

2) infinite loop whenever the modal was opened; I actaually couldn't figure this out on my own. luckily, i was able to get advice on discord that helped me fix the error. I was using the useEffect hook wrong and by using a different dependency (modalAssignments.length), the effect will only occur when the length of modalAssignments array changes

3) undefined to defined value (breaking react rules )caused the input not to be recognized and it wouldnt update the values of percentage and grade; i wasn't updating using state variables properly. By map the assignments throught the useState and adding a new value (possiblePoints Earned )I was able to get the input value to be recognized.  

