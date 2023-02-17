import { convertToCSV } from '../lib/utils'
import { Person } from './linkedIn';

/**
 * Exports a CSV file with the given parameters
 * @param headers The headers to be displayed in the first row of the CSV file
 * @param data The data to be used in populating the CSV file
 * @param fileTitle The desired title of the CSV file. Do not include file extension.
 */
export default function exportCSVFile(headers: any, data: Person[], fileTitle: string | undefined) {

  if (headers) {
    data.unshift(headers);
  }

  const csvData = convertToCSV(JSON.stringify(data));
  const exportedFilename = fileTitle + '.csv' || 'export.csv';

  var blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
  var link = document.createElement("a");
  if (link.download !== undefined) { // feature detection
      // Browsers that support HTML5 download attribute
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", exportedFilename);
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  }
}
