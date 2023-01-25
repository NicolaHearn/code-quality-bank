class DateHelper {
  constructor(date) {
    this.date = date
  }

  stringToDate() {
    const year = dateString.slice(6);
    const month = dateString.slice(3, 5);
    const day = dateString.slice(0, 2);

    return new Date(year, month-1, day);
  } 

dateStringValid() {
  const dateFormat = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/
  if ((typeof this.date) == "string") {
    if (this.date.match(dateFormat)) {
   
      return true
      } else {
     
      return false
      }
  } else {
    return false
  }
}

dateIsDateObject() {
  if (Object.prototype.toString.call(this.date) === "[object Date]") {
    return true
    } else {
     return false
    }
}
  
}

module.exports = DateHelper