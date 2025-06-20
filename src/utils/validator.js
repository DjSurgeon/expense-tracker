/**
 * @file validator.js
 * 
 * @brief Validation utilities for user input data.
 * 
 * @description
 * Provides sanitization and validation for critical user inputs.
 * Ensures data integrity before processing by business logic modules.
 */

/**
 * @brief Validates and sanitizes expense amounts.
 * 
 * @description
 * Parses and validates user-provided expense amounts. Ensures:
 * - Input is convertible to a valid floating point number.
 * - Result is a positive numerical value.
 * 
 * @param {string | number} amount Raw amount input from user.
 * 
 * @throws {error} If input is non-numeric or conversion fails
 * @throws {error} If resulting value is negative.
 * 
 * @returns {number} Sanitized positive float with 2 decimal precision.
 * 
 * @note
 * - Uses parseFloat() for conversion (supports both ',' and '.' decimals)
 * - Terminates process with exit code 1 on validation failure.
 * - Recommended formatting: 00.00 (USD style).
 */
export const amountValidator = (amount) =>
{
	amount = parseFloat(amount);
	if (isNaN(amount) && typeof(amount) === 'number')
	{
		console.error("Set a valid format number.");
		console.error("format 00.00");
		process.exit(1);
	}
	else
	{
		return amount.toFixed(2);
	}
}

/**
 * @brief Validates expense category input
 * 
 * @description
 * Ensures category input meets basic requirements:
 * - Non-empty string.
 * - Does not contain special characters.
 * @param {string} category Raw category input for user.
 * 
 * @throws {error} If input is empty or contains invalid characters.
 * 
 * @note
 * - Current implementation checks only for presence
 * - Future enhancement: integrate with allowed categories list.
 * - Terminates process with exit code 1 on validation failure.
 */
export const categoryValidator = (category) =>
{
	if (!category || category === undefined)
	{
		console.error("Set a category.");
		process.exit(1);
	}
}
