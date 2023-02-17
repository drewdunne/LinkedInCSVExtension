/**
 * Converts JSON-formatted data to CSV formatting (to later be exported to a CSV file)
 * @param objArray JSON-formatted Array of data to be used in CSV File 
 * @returns 
 */
export function convertToCSV(objArray) {
  var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
  var str = '';

  for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
          if (line != '') line += ','

          line += array[i][index];
      }

      str += line + '\r\n';
  }

  return str;
}
