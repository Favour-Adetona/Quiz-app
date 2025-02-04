
export const formatDateWord = (date: Date | string): string => {
  let dateObj: Date;

  if (typeof date === 'string') {
    try {
      dateObj = new Date(date);
    } catch (error) {
      console.error("Invalid date format. Please provide a valid ISO 8601 string.");
      return ""; // Or return any default value you prefer for invalid input
    }
  } else {
    dateObj = date;
  }

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const year = dateObj.getFullYear();
  const monthIndex = dateObj.getMonth();
  const month = monthNames[monthIndex];
  const day = dateObj.getDate().toString().padStart(2, '0');

  return `${day} ${month}, ${year}`;
}

interface formatDateNumericalProps {
  isoDateString: string,
  format?: 'yyyy-mm-dd' | 'dd-mm-yyyy',
  separator?: '-' | '/'
}

export function formatDateNumerical(
  { isoDateString, format='yyyy-mm-dd', separator='-' }: formatDateNumericalProps,
): string {
  // Parse the date string into a Date object
  const date = new Date(isoDateString);

  // Extract the year, month, and day
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
  const day = date.getDate().toString().padStart(2, '0');

  // Format the date based on the specified format and separator
  if (format === 'dd-mm-yyyy') {
    return `${day}${separator}${month}${separator}${year}`;
  } else { // 'yyyy-mm-dd' by default
    return `${year}${separator}${month}${separator}${day}`;
  }
}