import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import '../styles/dropdown.css'

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
    const { list } = this.props
    const { listOpen } = this.state
    return (
      <div className="dd-wrapper">
        <div className="dd-header" onClick={() => this.toggleList()}>
          <img className="dd-img" src={this.props.currentUrl.value}/>
          {
            listOpen ? <FontAwesome name="angle-up" /> : <FontAwesome name="angle-down" />
          }
        </div>
        {listOpen && <ul className="dd-list" onClick={e => e.stopPropagation()}>
          {list.map((item, idx) => (
            <li className="dd-list-item" key={idx} onClick={() => this.selectItem(item)}>
              <img className="dd-listImg" src={item.value}/>
            </li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default DropdownMultiple
