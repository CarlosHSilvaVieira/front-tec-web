import React from 'react'
import connect from './connect'
import Sidebar from '../../components/sideBar'
import style from './area.module.css'

class AreaFuncionario extends React.Component {

    static getDerivedStateFromProps(nextProps, prevState) {

        /*if (!nextProps.employee) {
            nextProps.redirect('/')
        }*/

        return null
    }

    render() {

        const menus = [{
            title: 'Produtos',
            itens: [{
                nome: 'Gerenciar Produtos',
                href: '/produtos'
            }]
        }, {
            title: 'Vendas',
            itens: [{
                nome: 'Gerenciar Vendas',
                href: '/vendas'
            }]
        }]


        return (
            <div className={'container-fluid'}>
                <div className={style.row}>
                    <Sidebar menus={menus} />
                    <div className={'col-md-9'}>
                        <div class="jumbotron">
                            <h1 class="display-4">Olá,</h1>
                            <p class="lead">Essa é a parte do sistema reservada para os funcionários.</p>
                            <hr class="my-4" />
                            <p>Nela você pode fazer o controle sobre os produtos e as vendas da loja.</p>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default connect(AreaFuncionario)
