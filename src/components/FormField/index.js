import React from 'react';

function FormField({ type, name, value, onChange}) {
    return (
        <div>
          <label>
            Nome da Categoria:
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
            />
          </label>
        </div>
    )
}

export default FormField;