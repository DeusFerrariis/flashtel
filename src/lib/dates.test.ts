import { assert, expect, test } from "vitest";
import {
	getCopyrightYear, 
	getProjectCopyrightYear,
	PROJECT_START_DATE 
} from "./dates.ts";

test('getCopyrightYear()', () => {
	const currentFullYear = (new Date()).getFullYear();

	expect(PROJECT_START_DATE).toBe("2023");
	
	// year is start -> start
	// year >= start -> start-year

	expect(getCopyrightYear("2022")).toBe(
		currentFullYear == "2022" ?
		`© Copyright 2022`
		:
		`© Copyright 2022-${currentFullYear}`
	);
	
	expect(getProjectCopyrightYear()).toBe(
		currentFullYear == PROJECT_START_DATE ?
		`© Copyright ${PROJECT_START_DATE}`
		:
		`© Copyright ${PROJECT_START_DATE}-${currentFullYear}`
	);
})
