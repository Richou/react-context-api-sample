import React from 'react'
import { Button, InputField, SelectField } from '../../core/ui'

import './home.scss'
import { withRouter } from "react-router";
import { LOGOUT_ROUTE } from "../castanea.routes";

function Home({ history }) {
  const [value, setValue] = React.useState('')
  const options = [
    { label: 'Hello world', value: 'hello_world' },
    { label: 'Coucou tout le monde', value: 'coucou'}
  ]

  function onClickHandler(event) {
    history.push(LOGOUT_ROUTE.url)
  }

  function onChangeHandler(event) {
    setValue(event.target.value)
  }

  return (
    <div>
      <Button className="full-width" onClick={onClickHandler}>{LOGOUT_ROUTE.label}</Button>
      <InputField onChange={onChangeHandler} placeholder="Enter your name" type="text" value={value} />
      <SelectField options={options} placeholder="Choose the hello" />
    </div>
  )
}

export default withRouter(Home)
