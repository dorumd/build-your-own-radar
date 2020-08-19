require('./common')
require('./images/logo.png')
require('./images/radar_legend.png')
require('./gtm.js')

const GoogleSheetInput = require('./util/factory')

GoogleSheetInput().build_from_sheet('http://localhost:8090/artifacts/radar.csv')
