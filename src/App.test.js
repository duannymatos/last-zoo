import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

describe("Testing APP", () => {
  const wrapper = shallow(<App />)

  test("Renders a single child element", () => {
    expect(wrapper.children().length).toBe(1)
  })

  test("Renders 5 routers", () => {
    expect(wrapper.find("Route").length).toEqual(5)
  })

  test("Check route with path /directory", () => {
    expect(wrapper.find("Route[path='/dashboard']").length).toBe(1)
  })

  test("Check if path /login contains a Login Form", () => {
    expect(wrapper.find("Route[path='/login']").contains("LoginForm")
    );
  });
});