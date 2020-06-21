const summaryUrl = 'https://api.covid19api.com/summary';
const countriesNameURl = 'https://api.covid19api.com/countries';
export const covidApi = {
    async getAllCountries() {
        try {
            const response = await fetch(countriesNameURl);
            if(response.ok) {
                const countriesList = await response.json();
               return countriesList;
            }
            return ;
        }
        catch(e) {
            return ;
        }
    },
    async getCountryData(name) {
        try {
            const response = await fetch(summaryUrl);
            if(response.ok) {
                const json = await response.json();
                if(name === 'Global') {
                    return  {
                        name:'Global',
                        infected:json.Global.TotalConfirmed,
                        recovered:json.Global.TotalRecovered,
                        deaths:json.Global.TotalDeaths,
                        newInfected: json.Global.NewConfirmed,
                        newDeaths:json.Global.NewDeaths,
                        newRecovered:json.Global.NewRecovered
                    };
                }
                const countries = json.Countries;
                const targetCountry = countries.find((country) => country.Country.toLowerCase() === name.toLowerCase());
                //Check Whether the country matches or not
                if(targetCountry) {
                    //If the country matches {
                       return  {
                            name,
                            infected:targetCountry.TotalConfirmed,
                            recovered:targetCountry.TotalRecovered,
                            deaths:targetCountry.TotalDeaths,
                            newInfected: targetCountry.NewConfirmed,
                            newDeaths:targetCountry.NewDeaths,
                            newRecovered:targetCountry.NewRecovered
                        }
                    }
                }
            return ;
        }
        catch(e) {
            return ;
        }
    }
}