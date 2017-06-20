import React from 'react'
import ReactDOM from 'react-dom'
import TestUtils from 'react-dom/test-utils'
import { expect } from 'chai'
import '../jsdom-setup'
import TodoList,{ ListItem } from '../src/TodoList'

describe('React Compoment, React Instance and React Element:', () => {

  it('JSX creates React Elements.', () => {
    const am_I_a_component = <TodoList/>

    // change this var
    const __CHANGE_ME__ = '????'

    // hint, uncomment next line to see the object in the console:
    // console.log(am_I_a_component)

    expect(`Symbol(${__CHANGE_ME__})`).to.be.equal(am_I_a_component['$$typeof'].toString())
  })

  it('Does JSX create new react elements every time?.', () => {
    const component_1 = <TodoList/>
    const component_2 = <TodoList/>

    // change this assertion, are the two React Elements deeply equal?
    expect(component_1).not.to.be.deep.equal(component_2)
  })

  it('Do React elements implement the functionality of the component?.', () => {
    let reactElement = <TodoList/>

    // hint, uncomment next line to see the object in the console:
    // console.log('--------->',reactElement)

    //An assertion library would give you many clues and it would be too easy, that's why we are throwing an Error with a custom message instead
    if ('CHANGE THIS' !== typeof reactElement.addTask) {
      throw new Error('The typeof(reactElement.addTask) is not correct')
    }
  })

  it('Rendering into the document should return a React Instance.', () => {
    const component = TestUtils.renderIntoDocument(<TodoList/>)

    // hint, uncomment next line to see the object in the console:
    // console.log('--------->',component)

    // An assertion library would give you many clues and it would be too easy, that's why we are throwing an Error with a custome message instead
    // Change the following condition
    if ('CHANGE THIS' !== typeof component.addTask) {
      throw new Error('The typeof(reactElement.addTask) is not correct')
    }
  })

  it('TestUtils.renderIntoDocument should return a detached React Instance.', () => {
    const detachedComp_1 = TestUtils.renderIntoDocument(<TodoList/>)
    const detachedComp_2 = TestUtils.renderIntoDocument(<TodoList/>)

    if (detachedComp_1 === detachedComp_1) {
      throw new Error('Are you sure detachedComp_1 and detachedComp_2 are the same instance?')
    }
  })

  it('ReactDOM.render should return the same React Instance for the same component (they are not detached).', () => {
    const component_1 = ReactDOM.render(<TodoList/>, document.getElementById('app'))
    const component_2 = ReactDOM.render(<TodoList/>, document.getElementById('app'))

    if (component_1 === component_2) {
      throw new Error('Are you sure component_1 and component_2 are the same instance?')
    }
  })
})
