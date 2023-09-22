import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as ChartJs} from 'chart.js/auto'

function LineChart({chartData}) {
  return (
    <div><Line data={chartData}/></div>
  )
}

export default LineChart