import React, {PropTypes} from 'react'
import Days from './Days.jsx'

const Calendar = (props) => (
  <div className='calendar'>
    <span id='prev'>&lang;</span>
    <span id='currMonth'>{props.currMonth}</span>
    <span id='next'>&rang;</span>
    <Days />
  </div>
)

Calendar.propTypes = {
  currMonth: PropTypes.string
}

export default Calendar

/*
calendar options:
- https://www.npmjs.com/package/react-calendar-heatmap
- https://www.npmjs.com/package/react-native-calendars
- https://www.npmjs.com/package/rc-calendar
- https://www.npmjs.com/package/react-big-calendar
- https://github.com/wa0x6e/cal-heatmap
- https://code.tutsplus.com/tutorials/how-to-build-a-beautiful-calendar-widget--net-12538
*/
