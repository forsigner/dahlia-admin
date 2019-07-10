import React from 'react'
import { modalStore } from 'dahlia/modal'

export default () => (
  <div>
    hi dahlia
    <div className="home">
      styled
      <span>jsx</span>
    </div>
    <button onClick={() => modalStore.open('ModalLogin')}>open</button>
    <style jsx>{`
      .home {
        color: green;
      }
      span {
        color: red;
      }
    `}</style>
  </div>
)
