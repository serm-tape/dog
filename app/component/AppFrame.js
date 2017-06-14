import React from 'react'
import {Link} from 'react-router-dom'

class AppFrame extends React.Component{
    constructor(){
        super()
        this.menuLink = ['/','/Dog']
    }
    render(){
        return (
            <div className='following bar'>
                <div className='ui container'>
                    <div className='ui large secondary pointing menu teal'>
                        {this.menuLink.map( page => 
                            <MenuLink
                                key={page}
                                name={page}
                                pathName={this.props.location.pathname}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

const MenuLink = ({name, pathName}) => (
    <Link className={`item ${pathName==name?'active':''}`} to={name}> {name.replace('/', '') || 'Home'} </Link>
)
export default AppFrame
