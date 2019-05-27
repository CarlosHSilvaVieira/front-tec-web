import React from 'react'
import connect from './connect'

import style from './home.module.css'

import Hero from '../../components/hero'

class HomePage extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    return (
      <div className={'container-fluid'}>
        <div className={'row'}>
          <div className={style.title}>
            <Hero
              children={'Bem vindo a BookStore'} 
              subtext={'Aqui você vai encontrar um mundo cheio livros só pra você ^^'}
            />
          </div>
        </div>

        <p>Welcome home!</p>
        <button onClick={() => this.props.changePage()}>Go to about page via redux</button>
      </div>
    )
  }
}

export default connect(HomePage)