export interface State {
    searchTerm: string;
    gifs: any[];
    selectedGif: any;
}

export default {
    searchTerm: '',
    gifs: [],
    selectedGif: {}
};
