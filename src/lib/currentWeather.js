const currentWeather = [
    {
      "LocalObservationDateTime": "2019-12-26T13:55:00+02:00",
      "EpochTime": 1577361300,
      "WeatherText": "גשם",
      "WeatherIcon": 18,
      "HasPrecipitation": true,
      "PrecipitationType": "Rain",
      "IsDayTime": true,
      "Temperature": {
        "Metric": {
          "Value": 15.5,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 60,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperature": {
        "Metric": {
          "Value": 10.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 50,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RealFeelTemperatureShade": {
        "Metric": {
          "Value": 9.1,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 48,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "RelativeHumidity": 79,
      "DewPoint": {
        "Metric": {
          "Value": 11.8,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 53,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Wind": {
        "Direction": {
          "Degrees": 293,
          "Localized": "מע'-צפ'-מע'",
          "English": "WNW"
        },
        "Speed": {
          "Metric": {
            "Value": 35,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 21.8,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "WindGust": {
        "Speed": {
          "Metric": {
            "Value": 61.9,
            "Unit": "km/h",
            "UnitType": 7
          },
          "Imperial": {
            "Value": 38.5,
            "Unit": "mi/h",
            "UnitType": 9
          }
        }
      },
      "UVIndex": 2,
      "UVIndexText": "נמוך",
      "Visibility": {
        "Metric": {
          "Value": 6.4,
          "Unit": "km",
          "UnitType": 6
        },
        "Imperial": {
          "Value": 4,
          "Unit": "mi",
          "UnitType": 2
        }
      },
      "ObstructionsToVisibility": "",
      "CloudCover": 53,
      "Ceiling": {
        "Metric": {
          "Value": 4176,
          "Unit": "m",
          "UnitType": 5
        },
        "Imperial": {
          "Value": 13700,
          "Unit": "ft",
          "UnitType": 0
        }
      },
      "Pressure": {
        "Metric": {
          "Value": 1010.2,
          "Unit": "mb",
          "UnitType": 14
        },
        "Imperial": {
          "Value": 29.83,
          "Unit": "inHg",
          "UnitType": 12
        }
      },
      "PressureTendency": {
        "LocalizedText": "יורד",
        "Code": "F"
      },
      "Past24HourTemperatureDeparture": {
        "Metric": {
          "Value": -0.7,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": -1,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "ApparentTemperature": {
        "Metric": {
          "Value": 18.9,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 66,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WindChillTemperature": {
        "Metric": {
          "Value": 15.6,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 60,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "WetBulbTemperature": {
        "Metric": {
          "Value": 13.4,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 56,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "Precip1hr": {
        "Metric": {
          "Value": 2.7,
          "Unit": "mm",
          "UnitType": 3
        },
        "Imperial": {
          "Value": 0.11,
          "Unit": "in",
          "UnitType": 1
        }
      },
      "PrecipitationSummary": {
        "Precipitation": {
          "Metric": {
            "Value": 2.7,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.11,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "PastHour": {
          "Metric": {
            "Value": 2.7,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.11,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past3Hours": {
          "Metric": {
            "Value": 4.6,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.18,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past6Hours": {
          "Metric": {
            "Value": 10.2,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.4,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past9Hours": {
          "Metric": {
            "Value": 12.2,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.48,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past12Hours": {
          "Metric": {
            "Value": 16.1,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 0.63,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past18Hours": {
          "Metric": {
            "Value": 27.3,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 1.07,
            "Unit": "in",
            "UnitType": 1
          }
        },
        "Past24Hours": {
          "Metric": {
            "Value": 32.4,
            "Unit": "mm",
            "UnitType": 3
          },
          "Imperial": {
            "Value": 1.27,
            "Unit": "in",
            "UnitType": 1
          }
        }
      },
      "TemperatureSummary": {
        "Past6HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 12.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 55,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 15.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 60,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past12HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 12.8,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 55,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 15.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 60,
              "Unit": "F",
              "UnitType": 18
            }
          }
        },
        "Past24HourRange": {
          "Minimum": {
            "Metric": {
              "Value": 12.7,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 55,
              "Unit": "F",
              "UnitType": 18
            }
          },
          "Maximum": {
            "Metric": {
              "Value": 16.5,
              "Unit": "C",
              "UnitType": 17
            },
            "Imperial": {
              "Value": 62,
              "Unit": "F",
              "UnitType": 18
            }
          }
        }
      },
      "MobileLink": "http://m.accuweather.com/he/il/tel-aviv/215854/current-weather/215854",
      "Link": "http://www.accuweather.com/he/il/tel-aviv/215854/current-weather/215854"
    }
  ]

  export default currentWeather