console.log(process.argv[2])
thestring = process.argv[2]
finalstring = ''
for(i=0;i<thestring.length;i++)
{
	if((thestring[i]!='Р')&&(thestring[i]!='К')&&(thestring[i]!='Н')&&(thestring[i]!='р')&&(thestring[i]!='к')&&(thestring[i]!='н'))
	{
		finalstring+=thestring[i]
	}
}
console.log("\n"+finalstring)