import { amountValidator } from "../utils/validator.js";

/**
 * comando add
 */

export const addCommand = (amount, category, description) => {
	amount = amountValidator(amount);
}