import {createLocalVue, mount} from '@vue/test-utils';
import ATree from "../src/lib-components/ATree.vue";

describe("ATree", () => {
    test("Render ATree", async () => {
        const wrapper = await mount(ATree);
    })
})