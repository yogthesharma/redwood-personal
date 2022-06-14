import { render } from '@redwoodjs/testing/web'

import SingleArticle from './SingleArticle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SingleArticle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SingleArticle />)
    }).not.toThrow()
  })
})
