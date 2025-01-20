

/**
 * Fetches the latest exchange rate for a given currency pair.
 *
 * This function sends a GET request to the freecurrencyapi.com to retrieve
 * the current exchange rate for the specified 'from' and 'to' currency codes.
 *
 * @param {string} from - The base currency code to convert from.
 * @param {string} to - The target currency code to convert to.
 * @returns {Promise<Object>} A promise that resolves to an object containing the exchange rate data.
 */

export const getCurrency = async (from, to) => {

    let url = `https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RUWtpIFaMCTdl3NmPqtYws99FCPVTb94S8064IZk&currencies=${to}&base_currency=${from}`;

    const response = await fetch(url,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );


    return response.json();
}



/**
 * Fetches a list of all currencies supported by the API.
 *
 * This function sends a GET request to the freecurrencyapi.com API to retrieve
 * a list of all supported currencies. The response will contain a list of currency
 * codes as keys and their respective names as values.
 *
 * @returns {Promise<Object>} A promise that resolves to an object with currency codes as keys and names as values.
 */
export const getCurrencyList = async () => {
    let url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_RUWtpIFaMCTdl3NmPqtYws99FCPVTb94S8064IZk";

    const response = await fetch(url,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
    );


    return response.json();
}