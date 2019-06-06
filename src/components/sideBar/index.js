import React from 'react'
import connect from './connect'
import { map } from 'lodash'

import style from './sidebar.module.css'

class SideBar extends React.Component {

    renderMenus() {

        return map(this.props.menus, (menu, index) => {

            return (
                <div key={index}>
                    <h6>{menu.title}</h6>
                    <ul className="nav flex-column mb-2">
                        { this.renderItens(menu) }
                    </ul>
                </div>
            )
        })
    }

    renderItens(menu) {

        return map(menu.itens, (item, index) => {

            return (
                <li key={index} className="nav-item">
                    <a className="nav-link" href={item.href}>{item.nome}</a>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={'col-md-2 col-lg-2 bg-light'} style={{marginBottom: '20px'}}>
                <div className={style.sidebar}>
                    { this.renderMenus() }
                </div>
            </div>
        )
    }
}

export default connect(SideBar)
