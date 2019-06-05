import React from 'react'
import connect from './connect'
import style from './produtos.module.css'
import { menus } from '../../utils/constants'

import Sidebar from '../../components/sideBar'
import Table from '../../components/table'
import Modal from '../../components/modal'

class ProdutosPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: 'Cadastrar',

        }

        this.visualize = this.visualize.bind(this)
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)
        this.create = this.create.bind(this)
    }

    componentWillMount() {
        this.props.getAllProdutos()
    }

    createTableHeaders() {
        if (this.props.produtos.length) {

            const produto = this.props.produtos[0]
            return Object.keys(produto)
        }
        return []
    }

    edit(produto) {

    }

    remove(produto) {
        // this.props.removeProduto(produto)
        this.props.getAllProdutos()
    }

    visualize(produto) {

    }

    create() {

        return (
            <Modal />
        )
    }

    render() {

        return (
            <div className={'container-fluid'} style={{ minHeight: '100vh' }}>
                <div className={'row'} style={{ minHeight: '100vh' }}>
                    <Sidebar menus={menus} />
                    <div className={'col'}>
                        <div className={'row'}>
                            <div className={style.title}>
                                <h2>Gerenciamento de produtos</h2>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={style.btn_container}>
                                <button
                                    className={'btn btn-primary'}
                                    type={'button'}
                                    data-toggle="modal"
                                    data-target="#exampleModalCenter"
                                >
                                    Cadastrar Produto
                                </button>
                            </div>
                        </div>
                        <Modal id={'exampleModalCenter'} title={'Cadastrar'}>
                            {'algo'}
                        </Modal>
                        <div className={'row'}>
                            <Table
                                headers={this.createTableHeaders()}
                                data={this.props.produtos}
                                visualizar={this.visualize}
                                editar={this.edit}
                                remover={this.remove}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(ProdutosPage)
