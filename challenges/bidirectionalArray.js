/*
You need to create a bidirectional array n x m 
you will receive an array that contains rows and column numbers as follow:
[ '2 3', '3 7', '4 1']
'2 3' should be read as row number = 2 and column number = 3
You have to determine the number of rows and columns for bidirectional array based on the array received
in this case the bidirectional array will be 7 (columns) x 4(rows) all values should be zero (0)
Afterwards, from the array you have to take each column and row and update you bidirectional array as follow:

initialArray = [
    0,0,0,0,0,0,0
    0,0,0,0,0,0,0
    0,0,0,0,0,0,0
    0,0,0,0,0,0,0
]

applying '2 3' the result should be:
[
    0,0,0,0,0,0,0
    0,0,0,0,0,0,0
    1,1,1,0,0,0,0
    1,1,1,0,0,0,0
]

applying '3 7' 

[
    0,0,0,0,0,0,0
    1,1,1,1,1,1,1
    2,2,2,1,1,1,1
    2,2,2,1,1,1,1
]

applying '4 1'
[
    1,0,0,0,0,0,0
    2,1,1,1,1,1,1
    3,2,2,1,1,1,1
    3,2,2,1,1,1,1
]

The maximum number that could exists inside on the array in this case will be 3 
you have to count the number of times that number 3 appears in this case is 2
You should return 2
*/