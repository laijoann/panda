import React, {Component} from 'react'

const monthArr = [
  { id: 1, name: 'January', days: 31 },
  { id: 2, name: 'February', days: 28 },
  { id: 3, name: 'March', days: 31 },
  { id: 4, name: 'April', days: 30 },
  { id: 5, name: 'May', days: 31 },
  { id: 6, name: 'June', days: 30 },
  { id: 7, name: 'July', days: 31 },
  { id: 8, name: 'August', days: 31 },
  { id: 9, name: 'September', days: 30 },
  { id: 10, name: 'October', days: 31 },
  { id: 11, name: 'November', days: 30 },
  { id: 12, name: 'December', days: 31 }
]
const d = new Date()
const dayOfMonth = d.getDate() //returns day of month in 0-30
const month = d.getMonth() //returns current month
const year = d.getFullYear() //returns current year
const dayOfWeek = d.getDay() //returns day of week in 0-6

class Calendar extends Component {
  render() {
    return (
      <div className='calendar'>
        <span id='prev'>&lang;</span>
        <span id='currMonth'>{monthArr[month].name} {year}</span>
        <span id='next'>&rang;</span>
        <table className='days'>
          <tbody>
            <tr><th>S</th><td className="nil" /><td>4</td><td>11</td><td>18</td><td>25</td></tr>
            <tr><th>M</th><td className="nil" /><td>5</td><td>12</td><td>19</td><td>26</td></tr>
            <tr><th>T</th><td className="nil" /><td>6</td><td>13</td><td>20</td><td>27</td></tr>
            <tr><th>W</th><td className="nil" /><td>7</td><td>14</td><td>21</td><td>28</td></tr>
            <tr><th>T</th><td>1</td><td>8</td><td>15</td><td>22</td><td>29</td></tr>
            <tr><th>F</th><td>2</td><td>9</td><td>16</td><td>23</td><td>30</td></tr>
            <tr><th>S</th><td>3</td><td>10</td><td>17</td><td>24</td><td className="nil" /></tr>
            </tbody>
        </table>
      </div>
    )
  }
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
