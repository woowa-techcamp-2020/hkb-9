/* eslint-disable no-undef */
import './Main.scss';
import { InputForm } from './InputForm';
import { List } from './List'

export default class Main {
  constructor() {
    new InputForm();
    new List();
  }
}
