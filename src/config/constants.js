/**
 * @file constants.js
 * 
 * @brief Defines CLI command constants for the expense tracker application.
 * 
 * @description
 * Centralized registry of supported CLI commands. This ensures:
 * - Consistent command naming across the application.
 * - Avoidance of hard-coded strings in business logic.
 * - Single source of truth for command validation.
 * 
 * @note
 * Commands correspond directly to user-facing CLI inputs. Any changes here affect:
 * - Command parsing in index.js
 * - Routing logic.
 * - User documentation.
 * @property {string} add Command to add new expenses (usage: `add --amount X --desc "Y"`).
 * @property {string} delete Command to remove expenses by ID (usage: `delete --id Z`).
 * @property {string} update Command to modify existing expenses (usage: `update --id Z --amount X`).
 * @property {string} list Command to display expenses (usage: `list [--category C]`).
 * @property {string} help Command to show usage guide (usage: `--help`).
 */
export const commands = {
	add: 'add',
	delete: 'delete',
	update: 'update',
	list: 'list',
	help: '--help'
}