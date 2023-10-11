import { FilterInput, FilterSection } from './FilterForm.styled';

const Filter = ({ value, onChange }) => {
  return (
    <FilterSection>
      <h2>Contacts</h2>
      <field>
        <FilterInput
          placeholder="find contact"
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
