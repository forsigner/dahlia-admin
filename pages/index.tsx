import React from 'react'

export default () => (
  <div>
    hi dahlia
    <div className="home">
      styled
      <span>jsx</span>
    </div>
    <style jsx>{`
      .home {
        color: green;
      }
      div {
        color: red;
      }
    `}</style>
  </div>
)
