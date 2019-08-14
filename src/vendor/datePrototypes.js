// from: https://gist.github.com/wildhart/e9a662056baac81d387a80083a4df9d9

Date.prototype.addMins = function(mins) {
    var dat = new Date(this.valueOf()); // make a new date coz we can't change the original
    dat.setMinutes(dat.getMinutes() + mins * 1); // force mins to be integer instead of string
    return dat;
};

Date.prototype.addDays = function(days) {
    var dat = new Date(this.valueOf()); // make a new date coz we can't change the original
    dat.setDate(dat.getDate() + days * 1); // force days to be integer instead of string
    return dat;
};

Date.prototype.addHours = function(hours) {
    var dat = new Date(this.valueOf()); // make a new date coz we can't change the original
    dat.setHours(dat.getHours() + hours * 1); // force hours to be integer instead of string
    return dat;
};

Date.prototype.addMonths = function(months) {
    var dat = new Date(this.valueOf()); // make a new date coz we can't change the original
    dat.setMonth(dat.getMonth() + months * 1); // force months to be integer instead of string
    return dat;
};

Date.prototype.daysFromNow = function() {
    var dat = this;
    var now = new Date();
    var timeDiff = dat.getTime() - now.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24));
};

// https://date-fns.org/v1.9.0/docs/format
// https://momentjs.com/docs/#/displaying/format/
const dateSuffixes = ["th", "st", "nd", "rd"];
const dateMonths = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];
const dateDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

Date.prototype.format = function(format) {
    const hours = this.getHours(),
        date = this.getDate();

    if (!format) format = "MM/DD/YYYY";
    // year
    if (format.indexOf("YYYY") > -1) format = format.replace("YYYY", this.getFullYear().toString());
    else if (format.indexOf("YY") > -1)
        format = format.replace(
            "YY",
            this.getFullYear()
                .toString()
                .substr(2, 2)
        );
    // hours (24hr)
    if (format.indexOf("HH") > -1) format = format.replace("HH", ("0" + hours).slice(-2));
    if (format.indexOf("H") > -1) format = format.replace("H", hours.toString());
    // hours (12hr)
    if (format.indexOf("hh") > -1)
        format = format.replace("hh", ("0" + (hours % 12 || 12)).slice(-2));
    if (format.indexOf("h") > -1) format = format.replace("h", hours % 12 || 12);
    // minute
    if (format.indexOf("mm") > -1)
        format = format.replace("mm", ("0" + this.getMinutes()).slice(-2));
    if (format.indexOf("m") > -1) format = format.replace("m", this.getMinutes());
    // seconds
    if (format.indexOf("ss") > -1)
        format = format.replace("ss", ("0" + this.getSeconds()).slice(-2));
    if (format.indexOf("s") > -1) format = format.replace("s", this.getSeconds());
    // milliseconds
    if (format.indexOf("SSS") > -1)
        format = format.replace("SSS", ("00" + this.getMilliseconds()).slice(-3));
    // date`
    if (format.indexOf("DD") > -1) format = format.replace("DD", ("0" + date.toString()).slice(-2));
    if (format.indexOf("D") > -1) format = format.replace("D", date.toString());
    // th / st / nd / rd so need to do AFTER 's' and 'h' above
    if (format.indexOf("o") > -1)
        format = format.replace(
            "o",
            dateSuffixes[(date - 20) % 10] || dateSuffixes[date] || dateSuffixes[0]
        );
    // am/pm - do BEFORE day or month name substitutions which introduce 'a'
    if (format.indexOf("a") > -1) format = format.replace("a", hours > 11 ? "pm" : "am");
    if (format.indexOf("A") > -1) format = format.replace("A", hours > 11 ? "PM" : "AM");
    // month name - do AFTER a -> am/pm
    if (format.indexOf("MMMM") > -1) format = format.replace("MMMM", dateMonths[this.getMonth()]);
    if (format.indexOf("MMM") > -1)
        format = format.replace("MMM", dateMonths[this.getMonth()].substr(0, 3));
    // month number
    if (format.indexOf("MM") > -1)
        format = format.replace("MM", ("0" + (this.getMonth() + 1)).slice(-2));
    // day of the week (name) - do AFTER a -> am/pm
    if (format.indexOf("dddd") > -1) format = format.replace("dddd", dateDays[this.getDay()]);
    if (format.indexOf("ddd") > -1)
        format = format.replace("ddd", dateDays[this.getDay()].substr(0, 3));
    return format;
};

export default Date;
