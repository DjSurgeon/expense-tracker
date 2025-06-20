/**
 * Funciones que validen los datos introducidos por el usuario
 */

export const amountValidator= (amount) =>
{
	amount = parseFloat(amount);
	if (isNaN(amount) && typeof(amount) === 'number')
	{
		console.error("Introduce a valid format number");
		console.error("format 00.00");
	}
	else
	{
		return amount;
	}
}