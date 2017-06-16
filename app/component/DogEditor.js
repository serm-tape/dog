import React from 'react'
import {LabeledInput} from './LabeledInput'

class DogEditor extends React.Component{
    render(){
        return (
            <div id='dog-editor' className='ui modal'>
                <i className='close icon' />
                <div className='header'>
                    Add dog
                </div>
                <div className='content'>
                    <LabeledInput label='text' type='text' placeholder='some text ...' /><br />
                    <LabeledInput label='number' type='numner' placeholder='555' /><br />
                    <LabeledInput label='email' type='email' placeholder='user@mail.com' /><br />
                </div>
                <div className='actions'>
                    <div className='ui positive button'>
                        Save
                    </div>
                    <div className='ui negative button'>
                        Cancel
                    </div>
                </div>
            </div>
        )
    }
}

export default DogEditor
