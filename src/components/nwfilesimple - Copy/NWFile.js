import TextFieldComponent from '../textfield/TextField';
import _ from 'lodash';

export default class NWFileComponent extends TextFieldComponent {
  static schema(...extend) {
    return TextFieldComponent.schema({
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
    return info;
  }

  get autocompleteDisableAttrName() {
    return 'new-file';
  }
}
