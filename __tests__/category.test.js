import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Search from '../src/components/Search/Search';

//It doesn't work...*************************:
Enzyme.configure({ adapter: new Adapter() });

describe('view', () => {
    test('button', () => {
        const wrapper = shallow(<Search />); 
        const buttonWrapper = wrapper.find('input[type="text"]');
        expect(buttonWrapper).toHaveLength(1);  
    });
});