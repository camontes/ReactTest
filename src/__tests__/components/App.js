import React from 'react'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from '../../components/App'
import { shallow } from 'enzyme'

configure({ adapter: new Adapter()})

it('render without crashing', () => {
    shallow( <App />);
});