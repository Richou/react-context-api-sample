import React from 'react'
import Codes from './codes'

function CodesWrapper() {

  async function onCodesCreateHandle(codesRequest) {
    console.log('creating', codesRequest)
    return true
  }

  return (
    <Codes onCodesCreate={onCodesCreateHandle} />
  )
}

export default CodesWrapper
