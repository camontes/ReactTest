import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Converter from '../../components/Converter/Converter'

configure({ adapter: new Adapter()})

it('render converter', () => {
    const wrapper = shallow(<Converter />);
    expect(wrapper.find(".render-div").length).toBe(1);
});