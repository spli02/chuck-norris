import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MyButton from './my-button';

//This is the test of Jest*************************:

Enzyme.configure({ adapter: new Adapter() });
describe('view', () => {
    test('button', () => {
        const wrapper = shallow(<MyButton />); 

        const buttonWrapper = wrapper.find('input[type="button"]'); 

        expect(buttonWrapper).toHaveLength(1); 
    });
});