fnumb = process.argv[2]*1
snumb = process.argv[3]*1
nod = 1
for(i = 2;i<=fnumb;i++)
{
	if((fnumb%i==0)&&(snumb%i==0))
	{
		nod=i
	}
}
console.log(nod)