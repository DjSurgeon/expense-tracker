#!/usr/bin/env node

/**
 * @file index.js
 * 
 * @brief Main entry point for the Expense Tracker CLI application.
 * 
 * @description
 * Acts as the command reouter and primary orchestation layer for the application.
 * Responsible for:
 * - Parsing command-line arguments (process.argv).
 * - Validating command presence.
 * - Routing commands to appropiate handlers.
 * - Managing application exit codes.
 * Command routing follows a strict switch-case pattern for:
 * add - delete - update - list - help
 * @note
 * - Uses shebang directive for Unix-like OS execution.
 * - Exit codes:
 * 		0 = Success.
 * 		1 = Command error (user input issue).
 * 		2 = System error (unhandled exception).
 * - Implements minimal argument checking.
 */

/**
 * @brief Core application imports.
 * @description Critical dependencies for CLI operation.
 */
import { argv } from "process";
import { commands } from "./src/config/constants.js";
import { helpCommand } from "./src/commands/help.js";
import { addCommand } from "./src/commands/add.js";
import { checkAdd } from "./src/utils/checker.js";

/**
 * @brief Command routing logic
 * @description
 * Dispatches command to specialized handlers.
 * @throws
 * Unhandled exceptions propagate to top-level catch.
 */
if (argv.length < 3)
{
	console.log("Error. Command required. \nUse \"expense_tracker --help\" for see options.");
}
else
{
	switch (argv[2]) {
		case commands.add:
			checkAdd(argv);
			addCommand(argv[4], argv[6], argv);
			break;
		case commands.delete:
			break;
		case commands.update:
			break;
		case commands.list:
			break;
		case commands.help:
			helpCommand();
			break;
		default:
			console.log("Error. Unknow command.")
			break;
	}
}
process.exit(0);