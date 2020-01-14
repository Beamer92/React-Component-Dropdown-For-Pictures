import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import '../styles/ImageDropDown.css'

class ImageDropDown extends Component{
  constructor(props){
    super(props)
    this.state = {
      listOpen: false,
    }
    this.close = this.close.bind(this)
  }

  componentDidUpdate(){
    const { listOpen } = this.state
    setTimeout(() => {
      if(listOpen){
        window.addEventListener('click', this.close)
      }
      else{
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  componentWillUnmount(){
    window.removeEventListener('click', this.close)
  }

  close(){
    this.setState({
      listOpen: false
    })
  }

  selectItem(item) {
    this.setState({
      listOpen: false
    }, this.props.onChange(item))
  }

  toggleList(){
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  render() {
    console.log(this.props)
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <img className="dd-img" src={this.props.selected.value} alt=""/>
          <label>{this.props.selected.label}</label>
          {
            this.state.listOpen ? <FontAwesome name="angle-up" /> : <FontAwesome name="angle-down" />
          }
        </div>
        {this.state.listOpen && <ul className="dd-list" onClick={e => e.stopPropagation()}>
          {this.props.list.map((item, idx) => (
            <li className="dd-list-item" key={idx} onClick={() => this.selectItem(item)}>
              <img className="dd-listImg" src={item.value} alt=""/>
            </li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default ImageDropDown
