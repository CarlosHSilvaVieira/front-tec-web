import React from 'react'
import connect from './connect'

class SideBar extends React.Component {

    render() {
        return (
            <div className={'col-md-3 bg-light'}>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <a class="nav-link active" href="/" >Active</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default connect(SideBar)
