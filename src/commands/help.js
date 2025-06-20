/**
 * @brief Displays the help menu for the expense traker CLI.
 * 
 * @description
 * Outpus a comprehensive help guide showing available commands, their syntax, and usage examples.
 * This serves as the primary reference for the users to interact with the application.
 * The menu includes:
 * - Basic command structure.
 * - Available flags and their parameters.
 * - Supported flags and their parameters.
 * - Command examples.
 * 
 * @note
 * This implementation uses console.log for output. In future versions, consider:
 * - Color coding using libraries like 'chalk'.
 * - Pagination for longer help texts.
 * - Interactive help with '--help <command>'.
 */
export const helpCommand = () => {
	console.log("Expense tracker help menu");
	console.log("expense_tracker [COMMAND] [--FLAG] [DESCRIPTION]");
	console.log("COMMAND LIST:");
	console.log("add 	--amo [amount 00.00] --cat [category] --desc \"description\"");
	console.log("delete 	--id [id]");
	console.log("update 	--id [id] / [--FLAG] [DESCRIPTION]");
	console.log("list 	--cat [category]");
	console.log("--help");
}