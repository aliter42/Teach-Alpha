function fisherYates ( myArray )
{
  var i = myArray.length, j, tempi, tempj;
  if ( i === 0 ) return false;
  while (--i)
  {
     j = Math.floor( Math.random() * ( i + 1 ) );
     tempi = myArray[i];
     tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
}

function addSelectionElement(selection, elemId, elemText,elemValue)
{
	// Create an Option object
	var opt = document.createElement(elemId);

	// Add an Option object to Drop Down/List Box
	document.getElementById(selection).options.add(opt);

	// Assign text and value to Option object
	opt.text = elemText;
	opt.value = elemValue;
}