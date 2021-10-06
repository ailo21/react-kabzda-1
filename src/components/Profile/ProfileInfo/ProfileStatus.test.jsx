import React from "react";
import {findByTestId} from "@testing-library/react";
import {create} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

describe("ProfileStatus", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("it-kamasutra.com");
    })
    test("after creation span should be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    })
    test("after creation input should`t be displayed", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        expect(()=>{
            let span = root.findByType("input");
        }).toThrow()
    })

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status="it-kamasutra.com"/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick()
        let input = root.findByType("input");

        expect(input).not.toBeNull();
    })

})