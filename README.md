# value-remover

📖 Description

The destroyer function removes specific values from an array.
It takes an array as the first argument, followed by any number of values to remove.
It returns a new array that does not include those values.

🧠 How It Works

The first parameter (array) is the main array.

The rest parameters (...rmv) collect all other values to remove.

The function loops through each item in the array.

If the item is not included in the values to remove, it’s added to a new array (result).

Finally, the function returns result.
