export const SET_CURRENT_CITY = "SET_CURRENT_CITY";
export const SET_CURRENT_CITY_FORECAST = "SET_CURRENT_CITY_FORECAST";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const RMV_FAVORITE = "RMV_FAVORITE";
export const CLEAR_FAVORITES = "CLEAR_FAVORITES";

export const API_KEY = "v1AAIjS1qvgXr2GperDmJDQpoicxWPFR";
export const INITIAL_CITY_KEY = 215854;
export const INITIAL_CITY_NAME = "Tel Aviv";

export const MOCK_CITY = {
  Version: 1,
  Key: "215854",
  Type: "City",
  Rank: 31,
  LocalizedName: "Tel Aviv",
  EnglishName: "Tel Aviv",
  PrimaryPostalCode: "",
  Region: {
    ID: "MEA",
    LocalizedName: "Middle East",
    EnglishName: "Middle East",
  },
  Country: {
    ID: "IL",
    LocalizedName: "Israel",
    EnglishName: "Israel",
  },
  AdministrativeArea: {
    ID: "TA",
    LocalizedName: "Tel Aviv",
    EnglishName: "Tel Aviv",
    Level: 1,
    LocalizedType: "District",
    EnglishType: "District",
    CountryID: "IL",
  },
  TimeZone: {
    Code: "IDT",
    Name: "Asia/Jerusalem",
    GmtOffset: 3,
    IsDaylightSaving: true,
    NextOffsetChange: "2022-10-29T23:00:00Z",
  },
  GeoPosition: {
    Latitude: 32.045,
    Longitude: 34.77,
    Elevation: {
      Metric: {
        Value: 34,
        Unit: "m",
        UnitType: 5,
      },
      Imperial: {
        Value: 111,
        Unit: "ft",
        UnitType: 0,
      },
    },
  },
  IsAlias: false,
  SupplementalAdminAreas: [],
  DataSets: [
    "AirQualityCurrentConditions",
    "AirQualityForecasts",
    "Alerts",
    "DailyPollenForecast",
    "ForecastConfidence",
    "FutureRadar",
    "MinuteCast",
  ],
};
export const MOCK_FORECAST = [
  {
    Date: "2022-05-07T07:00:00+03:00",
    EpochDate: 1651896000,
    Temperature: {
      Minimum: {
        Value: 17.6,
        Unit: "C",
        UnitType: 17,
      },
      Maximum: {
        Value: 22.5,
        Unit: "C",
        UnitType: 17,
      },
    },
    Day: {
      Icon: 3,
      IconPhrase: "Partly sunny",
      HasPrecipitation: false,
    },
    Night: {
      Icon: 36,
      IconPhrase: "Intermittent clouds",
      HasPrecipitation: false,
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=1&unit=c&lang=en-us",
  },
  {
    Date: "2022-05-08T07:00:00+03:00",
    EpochDate: 1651982400,
    Temperature: {
      Minimum: {
        Value: 19.3,
        Unit: "C",
        UnitType: 17,
      },
      Maximum: {
        Value: 23.9,
        Unit: "C",
        UnitType: 17,
      },
    },
    Day: {
      Icon: 2,
      IconPhrase: "Mostly sunny",
      HasPrecipitation: false,
    },
    Night: {
      Icon: 34,
      IconPhrase: "Mostly clear",
      HasPrecipitation: false,
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=2&unit=c&lang=en-us",
  },
  {
    Date: "2022-05-09T07:00:00+03:00",
    EpochDate: 1652068800,
    Temperature: {
      Minimum: {
        Value: 20.8,
        Unit: "C",
        UnitType: 17,
      },
      Maximum: {
        Value: 25.5,
        Unit: "C",
        UnitType: 17,
      },
    },
    Day: {
      Icon: 1,
      IconPhrase: "Sunny",
      HasPrecipitation: false,
    },
    Night: {
      Icon: 33,
      IconPhrase: "Clear",
      HasPrecipitation: false,
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=3&unit=c&lang=en-us",
  },
  {
    Date: "2022-05-10T07:00:00+03:00",
    EpochDate: 1652155200,
    Temperature: {
      Minimum: {
        Value: 19,
        Unit: "C",
        UnitType: 17,
      },
      Maximum: {
        Value: 24.7,
        Unit: "C",
        UnitType: 17,
      },
    },
    Day: {
      Icon: 1,
      IconPhrase: "Sunny",
      HasPrecipitation: false,
    },
    Night: {
      Icon: 38,
      IconPhrase: "Mostly cloudy",
      HasPrecipitation: false,
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=4&unit=c&lang=en-us",
  },
  {
    Date: "2022-05-11T07:00:00+03:00",
    EpochDate: 1652241600,
    Temperature: {
      Minimum: {
        Value: 17.1,
        Unit: "C",
        UnitType: 17,
      },
      Maximum: {
        Value: 23.6,
        Unit: "C",
        UnitType: 17,
      },
    },
    Day: {
      Icon: 2,
      IconPhrase: "Mostly sunny",
      HasPrecipitation: false,
    },
    Night: {
      Icon: 35,
      IconPhrase: "Partly cloudy",
      HasPrecipitation: false,
    },
    Sources: ["AccuWeather"],
    MobileLink:
      "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
    Link: "http://www.accuweather.com/en/il/tel-aviv/215854/daily-weather-forecast/215854?day=5&unit=c&lang=en-us",
  },
];
