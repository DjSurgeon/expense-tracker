import { amountValidator, categoryValidator } from "../utils/validator.js";

/**
 * @brief Processes and validates an expense addition command.
 * 
 * @description
 * This function handless the 'add' command for the expensee tracker CLI. It performs:
 * 1. Validation of the amount using amountValidator.
 * 2. Validation of the category using categoryValidator.
 * 3. Construction of the description from command arguments.
 * 
 * @param {string|number} amount The expense amount to be validated and processed.
 * @param {string} category The expense category to be validated.
 * @param {array} argv The full array of commmand-line arguments.
 * 
 * @throws {error} If amount validation fails (invalid format or negative value).
 * @throws {error} If category validation fails (nothing set as category).
 * 
 * @note 
 * - Description is built from arguments starting at index 8.
 * - The currently logs the results (to be replaced with DB operations).
 * 
 * @example
 * In CLI: expense-tracker add --amo 15 --cat Food --desc "Business lunch"
 * Output: add 15 in Food: Business lunch
 */
export const addCommand = (amount, category, argv) => {
	let description = "";

	amount = amountValidator(amount);
	categoryValidator(category);
	for (let i = 8; i < argv.length; i++)
	{
		if (i == argv.length - 1)
			description += argv[i];
		else
			description += argv[i] + " ";
	}
	// console.log(`add ${amount} in ${category}: ${description}`);
}