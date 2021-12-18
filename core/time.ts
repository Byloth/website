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
    protected static readonly _DIVISOR = 1000 * 60 * 60 * 24 * 7 * 4 * 12;

    protected static readonly _DAYS = [
        "Domenica",
        "Lunedì",
        "Martedì",
        "Mercoledì",
        "Giovedì",
        "Venerdì",
        "Sabato"
    ];
    protected static readonly _MONTHS = [
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

    protected static readonly _TIME_DEFINITIONS = [
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
        divisor = Time._DIVISOR,
        iterationCount = 0,
        applyModule = false): string[] | undefined
    {
        if (iterationCount < Time._TIME_DEFINITIONS.length)
        {
            let value: number;

            if ((applyModule) || (iterationCount))
            {
                value = Math.floor(timeDifference / divisor) % Time._TIME_DEFINITIONS[iterationCount - 1].divisor;
            }
            else
            {
                value = Math.floor(timeDifference / divisor);
            }

            if (value)
            {
                let resultArray: string[];

                if (value > 1)
                {
                    resultArray = [`${value} ${Time._TIME_DEFINITIONS[iterationCount].plural}`];
                }
                else
                {
                    resultArray = [`1 ${Time._TIME_DEFINITIONS[iterationCount].singular}`];
                }

                if (stopAtFirst === false)
                {
                    divisor = (divisor / Time._TIME_DEFINITIONS[iterationCount].divisor);

                    const subResultArray =
                        Time._TimeDifferenceAsArray(timeDifference, stopAtFirst, divisor, iterationCount + 1, true);

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

    public static DateAsString(date: Date, showDayOfWeek = true): string
    {
        const dateStrings: string[] = [];

        if (showDayOfWeek)
        {
            dateStrings.push(`${Time._DAYS[date.getDay()]}`);
        }

        dateStrings.push(`${date.getDate()}`);
        dateStrings.push(Time._MONTHS[date.getMonth()]);
        dateStrings.push(`${date.getFullYear()}`);

        return dateStrings.join(" ");
    }
    public static TimeAsString(time: Date, showSeconds = true): string
    {
        const timeStrings: string[] = [];

        timeStrings.push(`${time.getHours()}`.padStart(2, "0"));
        timeStrings.push(`${time.getMinutes()}`.padStart(2, "0"));

        if (showSeconds)
        {
            timeStrings.push(`${time.getSeconds()}`.padStart(2, "0"));
        }

        return timeStrings.join(":");
    }

    public static TimeDifferenceAsString(firstTime: Date, secondTime: Date, stopAtFirst = true): string
    {
        const timeDifference = secondTime.getTime() - firstTime.getTime();
        const timeDifferences = Time._TimeDifferenceAsArray(timeDifference, stopAtFirst)!;

        return `${timeDifferences.slice(0, -1).join(", ")} e ${timeDifferences[timeDifferences.length - 1]}`;
    }
}
