import React from 'react';
import { Form, Button, Input } from 'antd';
import './App.css';

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            TopText: '',
            BottomText: '',
            Img: "https://i.imgflip.com/345v97.jpg",
            allMemeImages: []
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.generate = this.generate.bind(this)
    }
    
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => {
            const {memes} = data.data
            console.log(memes[0])
            this.setState({
                allMemeImages: memes
            })
        })
    }
    
    handleChange(event){
        
        const { name, value, type } = event.target
        this.setState({ [name]: value })
    }
    
    generate(event){
        
       // console.log(Math.round(Math.random() * 99));
        this.setState({
            Img: this.state.allMemeImages[Math.round(Math.random() * 99)]['url']
        })
        console.log(this.state.allMemeImages[Math.round(Math.random() * 99)]['url']);
    }
    
    
    render(){
        
        const imgTop = {
            position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
            'font-family': 'fantasy',
            'color': 'grey',
            'font-size': '2.7em',
            'box-shadow': "1px 1px 20px 5px grey",
            'background-color': 'black',
            'opacity': 0.7,
            'border': '1px solid grey',
            'border-radius': "20px"
        }
        
        const imgBottom = {
            position: 'absolute',
  top: '90%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
            'font-family': 'fantasy',
            'color': 'grey',
            'font-size': '2.7em',
            'box-shadow': "1px 1px 20px 5px grey",
            'background-color': 'black',
            'opacity': 0.7,
            'border': '1px solid grey',
            'border-radius': "20px"
        }
        
        return(
        
            <div>
                <Form>
                    <Form.Item label="First Text Box:">
                    <Input 
                        type='text' 
                        name='TopText' 
                        value={this.state.TopText} 
                        onChange={this.handleChange} />
                    </Form.Item> 
                    
                    <Form.Item label="Second Text Box:">
                    <Input 
                        type='text' 
                        name='BottomText' 
                        value={this.state.BottomText} 
                        onChange={this.handleChange}/>
                    </Form.Item>
            
                    <Button type='danger' onClick={this.generate}>Generate the meme MemeLord</Button>
            
                </Form>
            <div className='container'>
                <h2 style={ imgTop } className='top'>{this.state.TopText}</h2>
            <img src={this.state.Img}/>
            <h2 style={ imgBottom }>{this.state.BottomText}</h2>
            </div>
            </div>
            
        )
    }
}


export default MemeGenerator