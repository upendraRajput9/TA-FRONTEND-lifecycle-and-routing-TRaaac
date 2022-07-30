import { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super()
    this.state = {
      data: null,
      dataRender: 'name',
      load: false,
    }
  }

  handleUI = (value) => {
    switch (value) {
      case 'name':
        return <Name randomUser={this.state.data ? this.state.data.name : ''} />
      case 'email':
        return <Email email={this.state.data ? this.state.data.email : ''} />
      case 'birth':
        return <Age age={this.state.data ? this.state.data.dob.age : ''} />
      case 'address':
        return <Address street={{ ...this.state.data.location.street }} />
      case 'phone':
        return <Phone phone={this.state.data.phone} />
      case 'password':
        return <Password password={this.state.data.login.password} />
      default:
        return <Name randomUser={this.state.data.name} />
    }
  }

  handleData = (value) => {
    this.setState({ dataRender: value })
  }
  componentDidMount() {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results[0], load: true }))
  }

  handleRander = () => {
    fetch('https://randomuser.me/api/')
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results[0], load: true }))
  }
  render() {
    return (
      <main>
        <div className="dark-color"></div>
        <div className="light-color"></div>
        <article>
          <div className="profile"></div>
          <figure>
            <img
              src={this.state.data ? this.state.data.picture.large : ''}
              alt="img"
            />
          </figure>
          <div className="button-div">
            {this.handleUI(this.state.dataRender)}
            <nav>
              <i
                onClick={() => this.handleData('name')}
                class="fa-solid fa-user"
              ></i>

              <i
                onClick={() => this.handleData('email')}
                class="fa-solid fa-envelope-open"
              ></i>

              <i
                onClick={() => this.handleData('birth')}
                class="fa-solid fa-calendar-xmark"
              ></i>

              <i
                onClick={() => this.handleData('address')}
                class="fa-solid fa-map"
              ></i>

              <i
                onClick={() => this.handleData('phone')}
                class="fa-solid fa-phone-flip"
              ></i>

              <i
                onClick={() => this.handleData('password')}
                class="fa-solid fa-lock"
              ></i>
            </nav>
            <button
              onClick={() => {
                this.handleRander()
                this.setState({ load: false })
              }}
            >
              {this.state.load ? 'RANDOM USER' : 'LOADING...'}
            </button>
          </div>
        </article>
      </main>
    )
  }
}

class Name extends Component {
  constructor(props) {
    super()
  }
  render() {
    let { title, first, last } = this.props.randomUser
      ? this.props.randomUser
      : ''

    return (
      <>
        <p>My name is</p>
        <h1>{this.props.randomUser ? `${title} ${first} ${last}` : ''}</h1>
      </>
    )
  }
}

class Email extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <>
        <p>My email is</p>
        <h1>{this.props.email}</h1>
      </>
    )
  }
}

class Age extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <>
        <p>My age is</p>
        <h1>{this.props.age}</h1>
      </>
    )
  }
}

class Address extends Component {
  constructor(props) {
    super()
  }

  render() {
    return (
      <>
        <p>My address is</p>
        <h1>{`${this.props.street.number} ${this.props.street.name}`}</h1>
      </>
    )
  }
}

class Phone extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <>
        <p>My phone is</p>
        <h1>{this.props.phone}</h1>
      </>
    )
  }
}

class Password extends Component {
  constructor(props) {
    super()
  }
  render() {
    return (
      <>
        <p>My password is</p>
        <h1>{this.props.password}</h1>
      </>
    )
  }
}
