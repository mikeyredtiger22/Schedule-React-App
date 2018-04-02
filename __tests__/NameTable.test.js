import React from "react";
import { mount } from "enzyme";
import NameTable from '../src/Components/NameTable';

describe("NameTable", () => {
  let props;
  let mountedNameTable;
  const nameTable = () => {
    if (!mountedNameTable) {
      mountedNameTable = mount(<NameTable {...props} />);
    }
    return mountedNameTable;
  };

  beforeEach(() => {
    props = {
      names: [],
      handleNewName: jest.fn(),
      handleRemoveName: jest.fn(),
    };
    mountedNameTable = undefined;
  });


  it("always renders", () => {
    const divs = nameTable().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("displays all names in table", () => {
    expect(nameTable().find(NameTableRow).length).toBe(props.names.length);
  });

  it("never renders more than 10 names in table", () => {
    expect(nameTable().find(NameTableRow).length).toBeLessThanOrEqual(10);
  });

});