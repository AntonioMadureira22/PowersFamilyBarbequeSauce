import { reducer } from '../utils/reducers';
import {
    UPDATE_SAUCES,
    UPDATE_CATEGORIES,
    UPDATE_CURRENT_CATEGORY
} from '../utils/actions';

const initialState = {
    sauces: [],
    categories: [{ name: 'Sauce' }],
    currentCategory: '1',
}

test('UPDATE_SAUCES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_SAUCES,
        sauces: [{}, {}]
    });
    expect(newState.sauces.length).toBe(2);
    expect(initialState.sauces.length).toBe(0);
})

test('UPDATE_CATEGORIES', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CATEGORIES,
        categories: [{}, {}]
    });
    expect(newState.categories.length).toBe(2);
    expect(initialState.categories.length).toBe(1);
});

test('UPDATE_CURRENT_CATEGORY', () => {
    let newState = reducer(initialState, {
        type: UPDATE_CURRENT_CATEGORY,
        currentCategory: '2'
    });
    expect(newState.currentCategory).toBe('2');
    expect(initialState.currentCategory).toBe('1');
});