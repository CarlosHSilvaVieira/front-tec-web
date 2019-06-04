import React from 'react'
import { map } from 'lodash'
import { Icon } from 'react-icons-kit'
import {eye} from 'react-icons-kit/fa/eye'
import {edit} from 'react-icons-kit/fa/edit'
import {trash} from 'react-icons-kit/fa/trash'

class Table extends React.Component {

    renderHeader() {

        const headers = map(this.props.headers, (header, index) => {

            return (
                <th scope="col">{header}</th>
            )
        })

        if (headers.length) {

            headers.push(<th scope="col"></th>)
            headers.push(<th scope="col"></th>)
            headers.push(<th scope="col"></th>)
        }

        return headers
    }

    renderBody() {

        return map(this.props.data, (value, index) => {

            const tds = map(Object.keys(value), (key, code) => {

                return (
                    <th scope="row">{value[key]}</th>
                )
            })

            return (
                <tr key={index}>
                    {tds}
                    <th scope="row">
                        <span onClick={this.props.visualize(value)}>
                            <Icon size={10} icon={eye} />
                        </span>
                    </th>
                    <th scope="row">
                        <span onClick={this.props.editar(value)}>
                            <Icon size={10} icon={edit} />
                        </span>
                    </th>
                    <th scope="row">
                        <span onClick={this.props.remover(value)}>
                            <Icon size={10} icon={trash} />
                        </span>
                    </th>
                </tr>
            )
        })
    }

    render() {

        return (
            <div className={'table-responsive'}>
                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            {this.renderHeader()}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBody()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table
