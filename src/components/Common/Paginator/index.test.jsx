import React from "react";
import {create} from "react-test-renderer";
import Paginator from "./index";

describe("Paginator", () => {

    test("Paginator contains div", () => {
        const component = create(<Paginator totalItemCount={100} pageSize={10} currentPage={2} portionSize={10} />);
        const root = component.root;
        let div = root.findByType("div");
        expect(div).not.toBeNull();
    })
});

