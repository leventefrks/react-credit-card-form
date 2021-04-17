import PropTypes from 'prop-types';
import { useState } from 'react';
import { CARD_MIN_EXPIRATION_YEAR } from './../constants';

const Form = ({
  cardNumber,
  onChangeCardNumber,
  onChangeCvv,
  onFocusCvv,
  onChangeName,
  onSubmit,
  onChangeExpirationMonth,
}) => {
  return (
    <form
      className="w-full bg-white p-6 space-y-3 rounded-bl-xl rounded-br-xl"
      onSubmit={onSubmit}
    >
      <div>
        <label htmlFor="card-number" className="form-label capitalize">
          card number
        </label>
        <input
          type="text"
          name="card-number"
          id="card-number"
          autoComplete="off"
          value={cardNumber}
          className="form-input"
          onChange={onChangeCardNumber}
        />
      </div>
      <div>
        <label htmlFor="name" className="form-label capitalize">
          card holder
        </label>
        <input
          type="text"
          name="name"
          id="name"
          maxLength="26"
          autoComplete="off"
          className="form-input"
          onChange={onChangeName}
        />
      </div>
      <div className="flex space-x-4 items-end">
        <div className="flex-1">
          <label
            htmlFor="expiration-date-month"
            className="form-label capitalize"
          >
            expiration date
          </label>
          <select
            name="expiration-date-month"
            id="expiration-date-month"
            className="form-input"
            autoComplete="off"
            onChange={onChangeExpirationMonth}
          >
            <option value="" defaultValue="Month" disabled hidden />
            {[...Array(13).keys()].map((item, key) =>
              key !== 0 ? (
                <option key={key} value={key}>
                  {key}
                </option>
              ) : (
                ''
              )
            )}
          </select>
        </div>
        <div className="flex-1">
          <select
            name="expiration-date-year"
            id="expiration-date-year"
            className="form-input"
            autoComplete="off"
            onChange={onChangeExpirationMonth}
          >
            <option value="" defaultValue="Year" disabled hidden />
            {[...Array(8).keys()].map((item, key) => (
              <option key={key} value={CARD_MIN_EXPIRATION_YEAR + key}>
                {CARD_MIN_EXPIRATION_YEAR + key}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-1">
          <label htmlFor="cvv" className="form-label uppercase">
            cvv
          </label>
          <input
            type="text"
            name="cvv"
            id="cvv"
            autoComplete="off"
            onChange={onChangeCvv}
            onFocus={onFocusCvv}
            onBlur={onFocusCvv}
            maxLength="3"
            className="form-input"
          />
        </div>
      </div>
      <button type="submit" className="btn">
        save card details
      </button>
    </form>
  );
};

Form.propTypes = {
  cardNumber: PropTypes.string,
  onChangeCardNumber: PropTypes.func,
  onChangeExpirationMonth: PropTypes.func,
  onChangeCvv: PropTypes.func,
  onFocusCvv: PropTypes.func,
  onChangeName: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Form;
