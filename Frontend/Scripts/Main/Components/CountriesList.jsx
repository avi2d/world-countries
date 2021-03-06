import React from 'react';
import PropTypes from 'prop-types';
import { ButtonGroup, Button, Glyphicon } from 'react-bootstrap';

import CountriesTable from './CountriesTable';
import CountryCard from './CountryCard';

const CountriesList = ({ countries, field, direction, onSort, onChangeView, onDelete, view }) => (
  <div className="countries-list">
    <ButtonGroup className="view-controls">
      <Button bsStyle="default" active={view === 'table'} onClick={onChangeView('table')}>
        <Glyphicon glyph="th-list" />
      </Button>
      <Button bsStyle="default" active={view === 'cards'} onClick={onChangeView('cards')}>
        <Glyphicon glyph="th-large" />
      </Button>
    </ButtonGroup>

    {view === 'table' ? (
      <CountriesTable
        data={countries}
        field={field}
        direction={direction}
        onSort={onSort}
        onDelete={onDelete}
      />
    ) : (
      <div className="countries-cards">
        {countries.map(country => (
          <CountryCard {...country} key={country.id} />
        ))}
      </div>
    )}
  </div>
);

CountriesList.propTypes = {
  field: PropTypes.string,
  view: PropTypes.string,
  direction: PropTypes.bool,
  countries: PropTypes.array,
  onSort: PropTypes.func,
  onDelete: PropTypes.func,
  onChangeView: PropTypes.func
};

export default CountriesList;
