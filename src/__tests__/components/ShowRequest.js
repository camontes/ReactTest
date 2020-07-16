import React from 'react'
import { configure } from 'enzyme'
import { render } from 'enzyme'
import configureStore from 'redux-mock-store'
import Adapter from 'enzyme-adapter-react-16'
import ShowRequest from '../../components/Request/ShowRequest'

configure({ adapter: new Adapter()})
const mockStore  = configureStore();

it('No render ShowRequest', () => {
    const store = mockStore({request:{
        name: "juan",
        age: 22,
    }});

    const wrapper = render(<ShowRequest request = {store}/>)
    expect(wrapper.find("render-show").length).toBe(0);
});

