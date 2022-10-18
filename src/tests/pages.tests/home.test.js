import {render , screen} from '@testing-library/react'
import { Home } from '../../components/home.component/Home'



describe("Home page test",()=>{
    test("home element test", async ()=>{
        render(<Home/>)
        const testElement = await screen.findByTestId("homeTest")
        expect(testElement).toBeInTheDocument("welcome")
    })
    test("right element name",async ()=>{
        render(<Home/>)
        const secondTestElement = await screen.findByTestId("homeTest")
        expect(secondTestElement).toHaveClass("homeTest")
    })
    test("text color", async ()=>{
        render(<Home/>)
        const colorText = await screen.findByTestId("homeTest")
        expect(colorText).toHaveStyle('color:"red"')

    })
})

