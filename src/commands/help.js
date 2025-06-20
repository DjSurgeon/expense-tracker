/**
 * funcion para mostrar el menu de ayuda
 */

export const helpCommand = () => {
	console.log("Expense tracker help menu");
	console.log("expense_tracker [COMMAND] [--FLAG] [DESCRIPTION]");
	console.log("COMMAND LIST:");
	console.log("add 	--amo [amount 00.00] --cat [category] --desc [description]");
	console.log("delete 	--id [id]");
	console.log("update 	--id [id] / [--FLAG] [DESCRIPTION]");
	console.log("list 	--cat [category]");
	console.log("--help");
}