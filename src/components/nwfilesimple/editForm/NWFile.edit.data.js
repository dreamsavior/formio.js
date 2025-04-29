export default [
  {
    key: 'inputFormat',
    ignore: true
  },
  {
    key: 'persistent',
    ignore: true
  },
  {
    key: 'protected',
    ignore: true
  },
  {
    key: 'dbIndex',
    ignore: true
  },
  {
    key: 'encrypted',
    ignore: true
  },
  {
    key: 'multiple',
    ignore: true
  },
  {
    key: 'defaultValue',
    ignore: true
  },
  {
    key: 'customDefaultValuePanel',
    ignore: true
  },
  {
    key: 'calculateValuePanel',
    ignore: true
  },
  {
    key: 'case',
    ignore: true
  },
  {
    weight: 0,
    type: 'checkbox',
    input: true,
    key: 'multipleFiles',
    label: 'Allow multiple files',
  },
  {
    weight: 1,
    type: 'textfield',
    input: true,
    key: 'acceptedFiles',
    placeholder: '.trans,.json',
    label: 'Enter the list of accepted file(s)',
    tooltip: 'Enter the list of accepted file(s)',
  },
];
