console.log(process.argv[2])
console.log(process.argv[3])
//arr1 = process.argv[2].split()
//arr2 = process.argv[3].split()
var arr1= []
var arr2 = []
for(i=0;i<process.argv[2].length;i++)
{
	arr1[i] = process.argv[2][i]
}
for(i = 0;i<process.argv[3].length;i++)
{
	arr2[i] = process.argv[3][i]
}
answer = -1
process.argv[2].length == process.argv[3].length ? console.log(check(arr1, arr2)) : console.log("-1")
/*
console.log(check(arr1, arr2))
console.log("\n"+ arr1+"\n")
*/

function check(arg1,arg2)
{
	counter = 0
	for (i=0;i<arg1.length;i++)
	{
		for( j=i;j<arg1.length+i;j++)
		{
			//console.log("\ni= "+i+" j-i= "+(j-i )+" j mod length= "+(j%arg1.length)+ " counter = "+ counter)
			if(arg1[j-i]==arg2[j % arg1.length])
			{
				counter++
			}
			else
			{
				counter = 0
				break
			}
			
		}
		if (counter == arg1.length)
		{
			break
		}
		else
		{
			counter = 0
		}
	}
	if (counter == 0)
		 return -1 
	 else 
		 return i>arr1.length/2 ? arr1.length - i : i
}
/*
function check(arg1,arg2)
{
	counter = 0
	for (i=0;i<arg1.length;i++)
	{
		for( j=i;j<arg1.length+i;j++)
		{
			console.log("\n"+(j-i )+" "+(j%arg1.length)+ " "+ counter)
			if(arg1[j-i]==arg2[j % arg1.length])
			{
				counter++
			}
			
		}
		
			counter = 0
		
	}
	return i
}	
*/
	