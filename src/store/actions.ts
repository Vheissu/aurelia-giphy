import { State } from './state';
import { dispatchify } from 'aurelia-store';
import { searchGiphy } from 'services/giphy';
import store from '.';

export function selectGif(state: State, selectedGif: any) {
    return { ...state, ...{ selectedGif } };
}

export async function doSearch(state: State, searchTerm) {
    const newState = {...state};

    newState.searchTerm = searchTerm;
    newState.gifs = await searchGiphy(searchTerm);

    return newState;
}

store.registerAction('doSearch', doSearch);
store.registerAction('selectGif', selectGif);
