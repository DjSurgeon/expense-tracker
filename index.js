#!/usr/bin/env node

/**
 * Imports
 */

import { argv } from "process";
import { helpCommand } from "./src/help.js";

/**
 * Constantes
 */

const commands = {
	add: 'add',
	delete: 'delete',
	update: 'update',
	list: 'list',
	help: '--help'
}

if (argv.length < 3)
{
	console.log("Error. Command required. Use \"expense_tracker --help\" for see options.");
}
else
{
	switch (argv[2]) {
		case commands.add:
			// funcition add
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