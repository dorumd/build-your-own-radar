require('./common')
require('./images/logo.png')
require('./images/radar_legend.png')
require('./gtm.js')

const GoogleSheetInput = require('./util/factory')
const sheetId = process.env.SHEET_ID

GoogleSheetInput().build_from_sheet(sheetId)
