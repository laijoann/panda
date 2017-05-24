import React from 'react'
import Days from './Days.jsx'

const Calendar = () => (
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
)

export default Calendar
