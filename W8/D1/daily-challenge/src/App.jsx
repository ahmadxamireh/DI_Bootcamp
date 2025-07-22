import { useState } from 'react'
import FormComponent from './FormComponent';
import './App.css'

function App() {
    const [ data, setData ] = useState({
        firstName: '',
        lastName: '',
        age: 0,
        gender: '',
        destination: '',
        nutsFree: false,
        lactoseFree: false,
        vegan: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        console.log(checked)
        setData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    };

    return (
        <>
            <form>
                <InputField type={'text'} name={'firstName'} value={data.firstName} placeholder={'First Name'} onChangeFunc={handleChange} />
                <InputField type={'text'} name={'lastName'} value={data.lastName} placeholder={'Last Name'} onChangeFunc={handleChange} />
                <InputField type={'number'} name={'age'} value={data.age} placeholder={'Age'} onChangeFunc={handleChange} />
                <InputField type={'radio'} name={'gender'} value={'Male'} text={'Male'} onChangeFunc={handleChange} />
                <InputField type={'radio'} name={'gender'} value={'Female'} text={'Female'} onChangeFunc={handleChange} />
                <label htmlFor={'destination'}>Select your destination</label>
                <select name={'destination'} value={data.destination} onChange={handleChange}>
                    <option value={'...'}>-- Please choose a destination --</option>
                    <option value={'Thailand'}>Thailand</option>
                    <option value={'Japan'}>Japan</option>
                    <option value={'Brazil'}>Brazil</option>
                </select>
                <label htmlFor={'dietaryRestrictions'}>Dietary Restrictions:</label>
                <InputField type={'checkbox'} name={'nutsFree'} text={'Nuts free'} onChangeFunc={handleChange} />
                <InputField type={'checkbox'} name={'lactoseFree'} text={'Lactose free'} onChangeFunc={handleChange} />
                <InputField type={'checkbox'} name={'vegan'} text={'Vegan'} onChangeFunc={handleChange} />
                <button type='submit'>Submit</button>
            </form>
            <hr/>
            <FormComponent data={data} />
        </>
    );
}

const InputField = ({ type, name, value, text = '', placeholder = '', onChangeFunc }) => {
    return (
        <>
            <div>
                <input
                    type={type}
                    name={name}
                    value={type === 'checkbox' ? undefined : value}
                    checked={type === 'checkbox' ? value : undefined}
                    placeholder={placeholder}
                    onChange={onChangeFunc}/>{text}
            </div>
        </>
    );
}

export default App
