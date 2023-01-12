export const PROJECT_START_DATE = "2023";

export const getCopyrightYear = (startYear: String): String => {
	let currentYear = (new Date()).getFullYear();
	// 2023 or 2023-currentYear
	let copyRightYearRange = currentYear == startYear ?
	"" : "-" + currentYear;
	
	return `© Copyright ${startYear}${copyRightYearRange}`;
}

export const getProjectCopyrightYear = () => getCopyrightYear(PROJECT_START_DATE);
