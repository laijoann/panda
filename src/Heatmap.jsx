import React, {Component} from 'react'
import CalendarHeatmap from 'react-calendar-heatmap'

class Heatmap extends Component {
  render() {
    return (
      <div className='heatmap'>
        <CalendarHeatmap
        endDate={new Date('2017-05-26')}
        numDays={200}
        values={[
          { date: '2017-05-01', count: 1 },
          { date: '2017-05-03', count: 2 },
          { date: '2017-05-15', count: 3 }
        ]}
        classForValue={(value) => {
          if (!value) {
            return 'color-empty';
          }
          return `color-scale-${value.count}`;
        }}
        showOutOfRangeDays = {true}
        horizontal = {false}
        />
      </div>
    )
  }
}

export default Heatmap
