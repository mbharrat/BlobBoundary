//start time 1:39 am
//end time 2:45am
/*
*
* A Blob is a shape in two-dimensional integer coordinate space where all cells 
* have at least one adjoining cell to the right, left, top, or bottom that is also occupied. 
* Given a 10x10 array of boolean values that represents a Blob uniformly selected at random 
* from the set of all possible Blobs that could occupy that array, write a program that will 
* determine the Blob boundaries. Optimize first for finding the correct result, second for 
* performing a minimum number of cell Boolean value reads, and third for the elegance and 
* clarity of the solution.
*
*/

//===================================================================================================
//								GLOBAL NAMESPACE
//===================================================================================================
var read = 0;		
var blobTest1 = [
[0,0,0,0,0,0,0,0,0,0],
[0,0,1,1,1,0,0,0,0,0],
[0,0,1,1,1,1,1,0,0,0],
[0,0,1,0,0,0,1,0,0,0],
[0,0,1,1,1,1,1,0,0,0],
[0,0,0,0,1,0,1,0,0,0],
[0,0,0,0,1,0,1,0,0,0],
[0,0,0,0,1,1,1,0,0,0],
[0,0,0,0,0,0,0,0,0,0],
[0,0,0,0,0,0,0,0,0,0]

];

//===================================================================================================






//===================================================================================================
//										HELPER FUNCTION
//===================================================================================================

function isValid(array,a,b){		//helper function to test to see if there is a 1 on left, right, bottom, or top
	if(a!=0){						//all while making sure I don't go out of array bounds
		if(array[a-1][b]===1){
			read++;
			return true;
		}
	}

	if(a!=array.length-1){
		if(array[a+1][b]===1){
			read++;
			return true;
		}
	}

	if(b!=0){
		if(array[a][b-1]===1){
			read++;
			return true;
		}
	}
	if(b!=array.length-1){
		if(array[a][b+1]===1){
			read++;
			return true;
		}
	}
}


//===================================================================================================






//===================================================================================================
//									MAIN FUNC
//===================================================================================================

//simple mainFunction that traverses 2d array
function blobChecker(blob){
	var left=100;	//will never be bigger than 100
	var right=-1;	//will never be smaller than -1
	var bottom=-1;	// ditto
	var top=100;	//	ditto
	for(var a=0;a<blob.length;a++){

		for(var b=0;b<blob[a].length;b++){
			//console.log(blob[a][b]);
			
			if(blob[a][b]===1){		//this is my first read after I verify the cell is 1
				read++;
				if(isValid(blob,a,b)){			//call helper function to make sure this isn't an orphan 1
					if(b<left){
						left = b;
					}
					if(b>right){
						right = b;
					}
					if(a<top){
						top = a;
					}
					if(a>bottom){
						bottom = a;
					}
				}
			}

		}
		
	}
	console.log("Cell Reads:"+read);
	console.log("Top: "+top);
	console.log("Left: "+left);
	console.log("Bottom: "+bottom);
	console.log("Right: "+right);
	return;
}
//===================================================================================================



//===================================================================================================
//					FUNCTION CALL
//===================================================================================================

blobChecker(blobTest1);


