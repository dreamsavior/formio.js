//import TextFieldComponent from '../textfield/TextField';
import Input from '../_classes/input/Input';
//import Component from '../_classes/component/Component';

import _ from 'lodash';

export default class NWFileComponent extends Input {
  static schema(...extend) {
    return Input.schema({
      type: 'nwfilesimple',
      label: 'NWFileSimple',
      key: 'nwfilesimple',
      tableView: false,
    }, ...extend);
  }

  static get builderInfo() {
    return {
      title: 'Select File',
      icon: 'file-earmark-fill',
      group: 'basic',
      documentation: '/userguide/form-building/form-components#password',
      weight: 40,
      schema: NWFileComponent.schema()
    };
  }

  get defaultSchema() {
    return _.omit(NWFileComponent.schema(), ['protected', 'tableView']);
  }

  get inputInfo() {
    console.log('inputInfo()', this);
    const info = super.inputInfo;
    info.attr.type = 'file';
    if (this.component.multipleFiles) {
      info.attr.multiple = 'multiple';
    }
    if (this.component.acceptedFiles) {
      info.attr.accept = this.component.acceptedFiles;
    }
    return info;
  }

  get emptyValue() {
    if (this.component.multiple) {
      return [];
    }
    return '';
  }

  get autocompleteDisableAttrName() {
    return 'new-file';
  }
}
