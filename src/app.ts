import { connectTo, dispatchify, Store } from "aurelia-store";
import { State } from "store/state";
import { doSearch } from "store/actions";
import { computedFrom } from "aurelia-binding";

@connectTo()
export class App {
    private state: State;

    searchTerm: string = '';

    search(searchTerm: string) {
        dispatchify(doSearch)(searchTerm);
    }

    viewGif(gif: any) {
        window.open(gif.imageUrl, '_blank');
    }

    @computedFrom('state.gifs')
    get gifs() {
        return this.state.gifs;
    }
}
