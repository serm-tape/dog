import React from 'react'
import {LabeledInput} from './LabeledInput'

class DogEditor extends React.Component{
    componentDidMount(){
        const mark = [{lat: -25.363, lng: 131.044}]
        const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 3,
            center: mark[0]
        })
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    new google.maps.Marker({
                        position: {lat: pos.coords.latitude, lng: pos.coords.longitude},
                        map: map,
                        title: 'My location'
                    })
                }
            )
        }
    }
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
                    <div id='map' style={{height:300}}></div>
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
