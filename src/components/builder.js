import Components from '.';
import AddressForm from './address/Address.form';
import ButtonForm from './button/Button.form';
import CheckboxForm from './checkbox/Checkbox.form';
import ColumnsForm from './columns/Columns.form';
import ComponentForm from './_classes/component/Component.form';
import ContainerForm from './container/Container.form';
import ContentForm from './content/Content.form';
import CurrencyForm from './currency/Currency.form';
import DataGridForm from './datagrid/DataGrid.form';
import DataMapForm from './datamap/DataMap.form';
import DateTimeForm from './datetime/DateTime.form';
import DayForm from './day/Day.form';
import EditGridForm from './editgrid/EditGrid.form';
import EmailForm from './email/Email.form';
import FieldsetForm from './fieldset/Fieldset.form';
import FileForm from './file/File.form';
import FormForm from './form/Form.form';
import ListForm from './_classes/list/ListComponent.form';
import HiddenForm from './hidden/Hidden.form';
import HtmlElementForm from './html/HTML.form';
import NestedForm from './_classes/nested/NestedComponent.form';
import NumberForm from './number/Number.form';
import PanelForm from './panel/Panel.form';
import PasswordForm from './password/Password.form';
import PhoneNumberForm from './phonenumber/PhoneNumber.form';
import RadioForm from './radio/Radio.form';
import ReCaptchaForm from './recaptcha/ReCaptcha.form';
import SelectboxesForm from './selectboxes/SelectBoxes.form';
import SelectForm from './select/Select.form';
import SignatureForm from './signature/Signature.form';
import SurveyForm from './survey/Survey.form';
import TableForm from './table/Table.form';
import TabsForm from './tabs/Tabs.form';
import TagsForm from './tags/Tags.form';
import TextAreaForm from './textarea/TextArea.form';
import TextfieldForm from './textfield/TextField.form';
import TimeForm from './time/Time.form';
import UnknownForm from './unknown/Unknown.form';
import UrlForm from './url/Url.form';
import WellForm from './well/Well.form';

Components.address.editForm = AddressForm;
Components.button.editForm = ButtonForm;
Components.checkbox.editForm = CheckboxForm;
Components.columns.editForm = ColumnsForm;
Components.component.editForm = ComponentForm;
Components.container.editForm = ContainerForm;
Components.content.editForm = ContentForm;
Components.currency.editForm = CurrencyForm;
Components.datagrid.editForm = DataGridForm;
Components.datamap.editForm = DataMapForm;
Components.datetime.editForm = DateTimeForm;
Components.day.editForm = DayForm;
Components.editgrid.editForm = EditGridForm;
Components.email.editForm = EmailForm;
Components.fieldset.editForm = FieldsetForm;
Components.file.editForm = FileForm;
Components.form.editForm = FormForm;
Components.list.editForm = ListForm;
Components.hidden.editForm = HiddenForm;
Components.htmlelement.editForm = HtmlElementForm;
Components.nested.editForm = NestedForm;
Components.number.editForm = NumberForm;
Components.panel.editForm = PanelForm;
Components.password.editForm = PasswordForm;
Components.phoneNumber.editForm = PhoneNumberForm;
Components.radio.editForm = RadioForm;
Components.recaptcha.editForm = ReCaptchaForm;
Components.select.editForm = SelectForm;
Components.selectboxes.editForm = SelectboxesForm;
Components.signature.editForm = SignatureForm;
Components.survey.editForm = SurveyForm;
Components.table.editForm = TableForm;
Components.tabs.editForm = TabsForm;
Components.tags.editForm = TagsForm;
Components.textarea.editForm = TextAreaForm;
Components.textfield.editForm = TextfieldForm;
Components.time.editForm = TimeForm;
Components.unknown.editForm = UnknownForm;
Components.url.editForm = UrlForm;
Components.well.editForm = WellForm;

// Custom
import NWFileForm from './nwfile/TextField.form';
Components.nwfile.editForm = NWFileForm;
import NWDirForm from './nwdir/File.form';
Components.nwdir.editForm = NWDirForm;
import NWFileSimple from './nwfilesimple/NWFile.form';
Components.nwfilesimple.editForm = NWFileSimple;
import RangeComponent from './range/Number.form';
Components.range.editForm = RangeComponent;

export default Components;
