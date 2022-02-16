import React from 'react'

export default function Structure(props) {
  return (
    <div>
         <table className="table table-striped table-hover table-responsive">
        
        <tbody>
              <tr>
                <td>{props.word}</td>
                <td>{props.meaning}</td>
                <td>{props.time}</td>
              </tr>
        </tbody>
      </table>
    </div>
  )
}
