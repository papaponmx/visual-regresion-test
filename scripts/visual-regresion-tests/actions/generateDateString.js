const generateDateString = () => {
  const d = new Date()
  return `${d.getDate()}_${d.getHours()}h${d.getMinutes()}`
}

module.exports.generateDateString = generateDateString
