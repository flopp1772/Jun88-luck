import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function SelectTeamStep({ onNext }) {
    const [selected, setSelected] = React.useState('Pacquiao');
    const [error, setError] = React.useState("");

    const handleCheck = () => {
        if (!selected) {
            setError("Vui lòng chọn đội thắng.");
            return;
        }
        setError("");
        onNext(selected);
    };

    return (
        <>
            <h2 className="sportpage-title">DỰ ĐOÁN THỂ THAO</h2>
            <div className="sportpage-label sportpage-label--blue">QUYỀN ANH 19/7/2025</div>
            <div className="sportpage-label sportpage-label--mb16">Lựa chọn đội thắng</div>
            <FormControl component="fieldset" className="sportpage-formcontrol">
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
            {error && <div className="sportpage-label" style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
            <button className="sportpage-btn" onClick={handleCheck}>KIỂM TRA</button>
        </>
    );
}