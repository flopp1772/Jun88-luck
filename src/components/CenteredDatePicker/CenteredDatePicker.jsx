import * as React from 'react';
import useForkRef from '@mui/utils/useForkRef';
import { styled } from '@mui/material/styles';
import { CalendarIcon, ClearIcon } from '@mui/x-date-pickers/icons';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { unstable_useDateField as useDateField } from '@mui/x-date-pickers/DateField';
import { Unstable_PickersSectionList as PickersSectionList } from '@mui/x-date-pickers/PickersSectionList';
import { usePickerContext } from '@mui/x-date-pickers/hooks';
import 'dayjs/locale/vi';
import dayjs from 'dayjs';

dayjs.locale('vi');  // set locale tiếng Việt

const BrowserFieldRoot = styled('div', { name: 'BrowserField', slot: 'Root' })({
    display: 'flex',
    alignItems: 'center',
    '& .MuiInputAdornment-root': {
        height: 'auto',
    },
});

const BrowserFieldContent = styled('div')(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    aspectRatio: 9.44 / 1,
    background: '#FFFFFF',
    border: '1.05263px solid #25ABE0',
    borderRadius: '29.4737px',
    padding: '0 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '18px',
}));

const BrowserIconButton = styled('button', {
    name: 'BrowserField',
    slot: 'IconButton',
})({
    backgroundColor: 'transparent',
    border: 0,
    cursor: 'pointer',
    '&:hover, &:focus': {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
    },
});

function BrowserDateField(props) {
    const { inputFormat, ...otherProps } = props;  // Tách inputFormat ra khỏi props
    const fieldResponse = useDateField({
        ...otherProps,
        format: 'DD/MM/YYYY'  // Thay inputFormat thành format
    });

    const {
        // Should be ignored
        enableAccessibleFieldDOMStructure,
        // Should be passed to the PickersSectionList component
        elements,
        sectionListRef,
        contentEditable,
        onFocus,
        onBlur,
        tabIndex,
        onInput,
        onPaste,
        onKeyDown,
        // Should be passed to the button that opens the picker
        openPickerAriaLabel,
        // Can be passed to a hidden <input /> element
        onChange,
        value,
        // Can be passed to the button that clears the value
        onClear,
        clearable,
        // Can be used to style the component
        areAllSectionsEmpty,
        disabled,
        readOnly,
        focused,
        error,
        // The rest can be passed to the root element
        ...other
    } = fieldResponse;

    const pickerContext = usePickerContext();
    const handleRef = useForkRef(pickerContext.triggerRef, pickerContext.rootRef);

    return (
        <BrowserFieldRoot {...other} ref={handleRef}>
            <BrowserFieldContent>
                <PickersSectionList
                    elements={elements}
                    sectionListRef={sectionListRef}
                    contentEditable={contentEditable}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    tabIndex={tabIndex}
                    onInput={onInput}
                    onPaste={onPaste}
                    onKeyDown={onKeyDown}
                />
                <BrowserIconButton
                    onClick={() => pickerContext.setOpen((prev) => !prev)}
                    sx={{ marginLeft: 1 }}
                    aria-label={openPickerAriaLabel}
                >
                    <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.7789 0.278168H17.7608V2.29621C17.7608 2.69981 17.4245 2.96888 17.0882 2.96888C16.7518 2.96888 16.4155 2.69981 16.4155 2.29621V0.278168H5.65262V2.29621C5.65262 2.69981 5.31628 2.96888 4.97994 2.96888C4.6436 2.96888 4.30726 2.69981 4.30726 2.29621V0.278168H2.28922C1.2802 0.278168 0.540253 1.15265 0.540253 2.29621V4.71785H22.066V2.29621C22.066 1.15265 20.8552 0.278168 19.7789 0.278168ZM0.540253 6.13048V18.4405C0.540253 19.6513 1.2802 20.4585 2.35649 20.4585H19.8461C20.9224 20.4585 22.1333 19.5841 22.1333 18.4405V6.13048H0.540253ZM6.5271 17.4315H4.91267C4.6436 17.4315 4.37452 17.2297 4.37452 16.8933V15.2116C4.37452 14.9426 4.57633 14.6735 4.91267 14.6735H6.59437C6.86344 14.6735 7.13251 14.8753 7.13251 15.2116V16.8933C7.06524 17.2297 6.86344 17.4315 6.5271 17.4315ZM6.5271 11.3774H4.91267C4.6436 11.3774 4.37452 11.1756 4.37452 10.8392V9.15753C4.37452 8.88846 4.57633 8.61939 4.91267 8.61939H6.59437C6.86344 8.61939 7.13251 8.82119 7.13251 9.15753V10.8392C7.06524 11.1756 6.86344 11.3774 6.5271 11.3774ZM11.9085 17.4315H10.2268C9.95776 17.4315 9.68869 17.2297 9.68869 16.8933V15.2116C9.68869 14.9426 9.89049 14.6735 10.2268 14.6735H11.9085C12.1776 14.6735 12.4467 14.8753 12.4467 15.2116V16.8933C12.4467 17.2297 12.2449 17.4315 11.9085 17.4315ZM11.9085 11.3774H10.2268C9.95776 11.3774 9.68869 11.1756 9.68869 10.8392V9.15753C9.68869 8.88846 9.89049 8.61939 10.2268 8.61939H11.9085C12.1776 8.61939 12.4467 8.82119 12.4467 9.15753V10.8392C12.4467 11.1756 12.2449 11.3774 11.9085 11.3774ZM17.29 17.4315H15.6083C15.3392 17.4315 15.0701 17.2297 15.0701 16.8933V15.2116C15.0701 14.9426 15.2719 14.6735 15.6083 14.6735H17.29C17.559 14.6735 17.8281 14.8753 17.8281 15.2116V16.8933C17.8281 17.2297 17.6263 17.4315 17.29 17.4315ZM17.29 11.3774H15.6083C15.3392 11.3774 15.0701 11.1756 15.0701 10.8392V9.15753C15.0701 8.88846 15.2719 8.61939 15.6083 8.61939H17.29C17.559 8.61939 17.8281 8.82119 17.8281 9.15753V10.8392C17.8281 11.1756 17.6263 11.3774 17.29 11.3774Z" fill="#0DB2F5" />
                    </svg>
                </BrowserIconButton>
            </BrowserFieldContent>
        </BrowserFieldRoot>
    );
}

function BrowserDatePicker(props) {
    const { inputFormat, ...otherProps } = props;  // Tách inputFormat ra khỏi props
    return (
        <DatePicker
            format="DD/MM/YYYY"
            {...otherProps}
            slots={{ field: BrowserDateField, ...props.slots }}
        />
    );
}

// Thêm một wrapper component để kiểm soát kích thước
const DatePickerWrapper = styled('div')({
    width: '100%',
    maxWidth: '427.37px', // Giữ max-width để đảm bảo không quá rộng
    margin: '0 auto',
});

export default function BrowserV7Field({ value, onChange }) {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} locale="vi">
            <DatePickerWrapper>
                <BrowserDatePicker
                    value={value}
                    onChange={onChange}
                    slotProps={{
                        field: { clearable: true },
                    }}
                />
            </DatePickerWrapper>
        </LocalizationProvider>
    );
}
