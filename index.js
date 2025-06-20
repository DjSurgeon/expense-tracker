#!/usr/bin/env node

/**
 * Imports
 */

import { argv } from "process";
import { commands } from "./src/config/constants.js";
import { helpCommand } from "./src/commands/help.js";
import { addCommand } from "./src/commands/add.js";

if (argv.length < 3)
{
	console.log("Error. Command required. \nUse \"expense_tracker --help\" for see options.");
}
else
{
	switch (argv[2]) {
		case commands.add:
			addCommand(argv[4]);
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