import { FilterInput, FilterSection } from './Filter.styled';
import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <FilterSection>
      <h2>Contacts</h2>
      <field>
        <FilterInput
          placeholder="Find contact"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </field>
    </FilterSection>
  );
};

export default Filter;
