function categorizeDataTypes(array) {
    let categorizeDataTypes = {}
    array.forEach(arrType => {
        let keyPart = typeof arrType;
        let x = [keyPart, arrType]
        console.log(categorizeDataTypes)
    });
    console.log(categorizeDataTypes)

  }
  
  
  // Example usage
  const mixedArray = [42, 'hello', true, null, undefined, { key: 'value' }, [1, 2, 3], function() {}];
  console.log(categorizeDataTypes(mixedArray));