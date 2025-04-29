import textEditForm from '../textfield/TextField.form';

import NWFileEditDisplay from './editForm/NWFile.edit.display';
import NWFileEditData from './editForm/NWFile.edit.data';
import NWFileEditValidation from './editForm/NWFile.edit.validation';

/**
 *
 * @param {...any} extend
 */
export default function(...extend) {
  return textEditForm([
    {
      key: 'data',
      components: NWFileEditData
    },
    {
      key: 'display',
      components: NWFileEditDisplay
    },
    {
      key: 'validation',
      components: NWFileEditValidation
    },
  ], ...extend);
}
