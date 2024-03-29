import React from 'react'
import connect from './connect'
import style from './produtos.module.css'
import { menus } from '../../utils/constants'

import Sidebar from '../../components/sideBar'
import Table from '../../components/table'
import Modal from '../../components/modal'
import FormProduto from '../../components/form/produto'

class ProdutosPage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            title: 'Cadastrar',
            saveFunction: () => {},
            cancelFunction: () => {},
            last_id: this.props.last_id,
        }

        this.create = this.create.bind(this)
        this.edit = this.edit.bind(this)
        this.remove = this.remove.bind(this)

        this.onClickCreate = this.onClickCreate.bind(this)
        this.onClickEdit = this.onClickEdit.bind(this)
    }

    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.last_id !== prevState.last_id) {
            nextProps.getAllProdutos()

            return {
                ...prevState,
                last_id: nextProps.last_id
            }
        }
        return null        
    }

    componentDidMount() {
        this.props.getAllProdutos()
    }

    createTableHeaders() {
        if (this.props.produtos.length) {

            const produto = this.props.produtos[0]
            return Object.keys(produto)
        }
        return []
    }

    onClickCreate() {
        this.setState({
            title: 'Cadastrar',
            saveFunction: this.create,
            cancelFunction: () => {},
            target_produto: null,
        })
    }

    onClickEdit(produto) {

        this.setState({
            title: 'Editar',
            saveFunction: this.edit,
            cancelFunction: () => {},
            target_produto: produto,
        })
    }

    create(produto) {
        this.props.create(produto)
    }

    edit(produto) {
        this.props.edit(produto)
        document.getElementById('closeModal').click()
    }

    remove(produto) {
        this.props.remove(produto)
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
                                    onClick={this.onClickCreate}
                                >
                                    Cadastrar Produto
                                </button>
                            </div>
                        </div>
                        <Modal id={'exampleModalCenter'} title={this.state.title}>
                            <FormProduto
                                handleSave={this.state.saveFunction}
                                handleCancel={this.state.cancelFunction}
                                cancelText={'Cancelar'}
                                saveText={'Salvar'}
                                produto={this.state.target_produto}
                            />
                        </Modal>
                        <div className={'row'}>
                            <Table
                                headers={this.createTableHeaders()}
                                data={this.props.produtos}
                                visualize={() => { }}
                                edit={this.onClickEdit}
                                remove={this.remove}
                                modal_id={'#exampleModalCenter'}
                            />
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default connect(ProdutosPage)
