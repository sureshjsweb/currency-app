import { configureStore } from '@reduxjs/toolkit';
import reducer from './currency';

export default function () {
    return configureStore({ reducer });
}
