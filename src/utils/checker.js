/**
 * @brief Validates flag sequence and positions for 'add' command
 * 
 * @description
 * Enforces strict flag ordering and presence rquirements for expense addition commands.
 * Verifies that command-line arguments follow the exact pattern:
 * [0] node_path, [1] script_path, [2] 'add', [3] '--amo', [4] amount, [5] '--cat', [6] category, [7] '--desc'
 * This validation ensures:
 * - Required flags present in correct positions.
 * - User follows consistent command syntax.
 * - Prevents malformed inputs from reaching business logic.
 * 
 * @param {Array<string>} arr The process.argv containing command-line arguments.
 * 
 * @throws Will terminate process with exit code 1.
 * 
 * @note
 * Current limitations:
 * - Requires exact flag ordering (inflexible for user).
 * - Future improvement: Use parser that allows flexible flag order.
 */
export const checkAdd = (arr) =>
{
	if (arr[3] != '--amo' || arr[5] != '--cat' || arr[7] != '--desc')
	{
		console.error("Check your flags.");
		console.error("--amo [amount] --cat [category] --desc[description]");
		process.exit(1);
	}
}