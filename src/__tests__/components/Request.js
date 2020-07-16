import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Request from '../../components/Request/Request'

configure({ adapter: new Adapter()})

it(' Fail to render Request', () => {
    const wrapper = shallow(
        <Request
            currency = "$ - dolar"
            criptoCurrency = "Bitcoin"
            value = {23000}
            result = {45000}
        />
    );
    expect(wrapper.find(".render-request").length).toBe(0);
});