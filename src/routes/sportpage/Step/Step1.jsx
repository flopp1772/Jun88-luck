import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function Step1({ onNext }) {
    const [selected, setSelected] = React.useState('Pacquiao');

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(selected);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="form1-title">DỰ ĐOÁN THỂ THAO</h2>
            <div className="form1-label" style={{ color: '#0DB2F5', fontWeight: 700, marginBottom: 0 }}>QUYỀN ANH 19/7/2025</div>
            <div className="form1-label" style={{ marginBottom: 16 }}>Lựa chọn đội thắng</div>
            <FormControl component="fieldset" style={{ width: '100%', marginBottom: 24 }}>
                <RadioGroup
                    row
                    aria-label="team"
                    name="team"
                    value={selected}
                    onChange={e => setSelected(e.target.value)}
                    style={{ justifyContent: 'center' }}
                >
                    <FormControlLabel value="Pacquiao" control={<Radio sx={{ color: '#0DB2F5', '&.Mui-checked': { color: '#0DB2F5' } }} />} label="Pacquiao" />
                    <FormControlLabel value="Barrios" control={<Radio sx={{ color: '#0DB2F5', '&.Mui-checked': { color: '#0DB2F5' } }} />} label="Barrios" />
                </RadioGroup>
            </FormControl>
        </form>
    );
}