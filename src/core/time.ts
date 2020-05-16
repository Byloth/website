export class TimeDefinition
{
    public readonly divisor: number;

    public readonly singular: string;
    public readonly plural: string;

    public constructor(divisor: number, singular: string, plural: string)
    {
        this.divisor = divisor;
        this.singular = singular;
        this.plural = plural;
    }
}

export default abstract class Time
{
    protected static readonly _DIVISOR: number = 1000 * 60 * 60 * 24 * 7 * 4 * 12;

    protected static readonly _DAYS: Array<string> = [
        "Domenica",
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato"
    ];
    protected static readonly _MONTHS: Array<string> = [
        "Gennaio",
        "Febbraio",
        "Marzo",
        "Aprile",
        "Maggio",
        "Giugno",
        "Luglio",
        "Agosto",
        "Settembre",
        "Ottobre",
        "Novembre",
        "Dicembre"
    ];

    protected static readonly _TIME_DEFINITIONS: Array<TimeDefinition> = [
        new TimeDefinition(12, "anno", "anni"),
        new TimeDefinition(4, "mese", "mesi"),
        new TimeDefinition(7, "settimana", "settimane"),
        new TimeDefinition(24, "giorno", "giorni"),
        new TimeDefinition(60, "ora", "ore"),
        new TimeDefinition(60, "minuto", "minuti"),
        new TimeDefinition(1000, "secondo", "secondi")
    ];

    protected static _TimeDifferenceAsArray(timeDifference: number,
        stopAtFirst: boolean,
        divisor: number = Time._DIVISOR,
        iterationCount = 0,
        applyModule = false): Array<string> | undefined
    {
        if (iterationCount < Time._TIME_DEFINITIONS.length)
        {
            let value: number;

            if ((applyModule === true) || (iterationCount > 0))
            {
                value = Math.floor(timeDifference / divisor) % Time._TIME_DEFINITIONS[iterationCount - 1].divisor;
            }
            else
            {
                value = Math.floor(timeDifference / divisor);
            }

            if (value > 0)
            {
                let resultArray: Array<string>;

                if (value > 1)
                {
                    resultArray = [value + " " + Time._TIME_DEFINITIONS[iterationCount].plural];
                }
                else
                {
                    resultArray = ["1 " + Time._TIME_DEFINITIONS[iterationCount].singular];
                }

                if (stopAtFirst === false)
                {
                    divisor = (divisor / Time._TIME_DEFINITIONS[iterationCount].divisor);

                    const subResultArray = Time._TimeDifferenceAsArray(timeDifference, stopAtFirst, divisor, iterationCount + 1, true);

                    if (subResultArray !== undefined)
                    {
                        resultArray = resultArray.concat(subResultArray);
                    }

                    return resultArray;
                }

                return resultArray;
            }
            else
            {
                divisor = divisor / Time._TIME_DEFINITIONS[iterationCount].divisor;

                return Time._TimeDifferenceAsArray(timeDifference, stopAtFirst, divisor, iterationCount + 1, true);
            }
        }

        return undefined;
    }

    public static DateAsString(date: Date): string
    {
        const day = Time._DAYS[date.getDay()] + " " + date.getDate();
        const month = Time._MONTHS[date.getMonth()];
        const year = date.getFullYear();

        return [day, month, year].join(" ");
    }
    public static TimeAsString(time: Date): string
    {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        const hoursString = (hours < 10) ? "0" + hours.toString() : hours.toString();
        const minutesString = (minutes < 10) ? "0" + minutes.toString() : minutes.toString();
        const secondsString = (seconds < 10) ? "0" + seconds.toString() : seconds.toString();

        return [hoursString, minutesString, secondsString].join(":");
    }

    public static TimeDifferenceAsString(firstTime: Date, secondTime: Date, stopAtFirst = true)
    {
        const timeDifference = secondTime.getTime() - firstTime.getTime();
        const timeDifferences = Time._TimeDifferenceAsArray(timeDifference, stopAtFirst)!;

        let timeDifferenceAsString = timeDifferences.slice(0, -1).join(", ");

        timeDifferenceAsString += " e " + timeDifferences[timeDifferences.length - 1];

        return timeDifferenceAsString;
    }
}
