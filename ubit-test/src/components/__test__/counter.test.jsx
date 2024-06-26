import {render,fireEvent,screen} from'@testing-library/react'
import renderer from 'react-test-renderer';
import Counter from '../counter'

describe('counter',()=>{
    it("should increase counter",()=>{
        render(<Counter/>)
        const increment=screen.getByTestId("incr")
        const count=screen.getByTestId("count")
        fireEvent.click(increment)
        expect(count).toHaveTextContent("2")
    })
    it("should decrease counter",()=>{
        render(<Counter/>)
        const decrement=screen.getByTestId("decr")
        const count=screen.getByTestId("count")
        fireEvent.click(decrement)
        expect(count).toHaveTextContent("0")
    })
});
describe("counter snapshot",()=>{
    it("should match dom snapshot",() =>{
        const tree =renderer.create(<Counter/>).toJSON();
        expect(tree).toMatchSnapshot()
    })
})